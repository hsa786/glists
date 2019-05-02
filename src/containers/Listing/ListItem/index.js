import React, { Component } from 'react';
import axios from 'axios';

import './listItem.scss';

class ListItem extends Component {
  state = {
    forks: []
  }

  componentDidMount() {
    this.getForks();
  }

  async getForks() {
    const { data } = await axios.get(this.props.data.forks_url);
    if (data) this.setState({ forks: data });
  }

  getAllFileTypes(filesArray, files) {
    const extsArray = [];
    filesArray.forEach(file => {
      const arrayedFile = files[file].filename.split('.');

      if (arrayedFile.length && arrayedFile.length > 1) {
        extsArray.push(arrayedFile.reverse()[0]);
      }
    });

    return [ ...new Set(extsArray) ];
  }

  render() {
    const { forks } = this.state;
    const { data: { files } } = this.props;
    const filesArray = Object.keys(files);
    const fileExts = this.getAllFileTypes(filesArray, files);

    const fileList = (
      <ul className="list-item__files">
        {filesArray.map(file => (
          <li className="list-item__file">
            <a href={files[file].raw_url} className="list-item__file-link">
              {files[file].filename} ({files[file].size} KB)
            </a>
          </li>
        ))}
      </ul>
    )

    const badges = fileExts.length ? (
      <div className="list-item__badges-section">
        <h3 className="list-item__badges-title">File type(s)</h3>
        <ul className="list-item__file-badges">
          {fileExts.map((file, i) => (
            <li key={i} className="list-item__file-badge">{file}</li>
          ))}
        </ul>
      </div>
    ) : null;

    const forksList = forks.length ? (
      <div className="list-item__forks-section">
        <h3 className="list-item__forks-title">Forks</h3>
        <ul className="list-item__forks">
          {forks.map((fork, i) => (
            <li key={i} className="list-item__fork">
              <a href={fork.url}><img className="list-item__fork-avatar" src={fork.owner.avatar_url} alt={fork.login} /></a>
              <div className="list-item__fork-user">{fork.owner.login}</div>
            </li>
          ))}
        </ul>
      </div>
    ) : null;

    return (
      <li className="list-item">
        {fileList}
        {forksList}
        {badges}
      </li>
    )
  }
}

export default ListItem;
