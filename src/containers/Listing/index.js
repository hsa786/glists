import React, { Component } from 'react';
import axios from 'axios';

import SearchInput from './SearchInput';
import ListItem from './ListItem/index';
import NoItems from './NoItems';

import './listing.scss';

class Listing extends Component {
  state = {
    username: '',
    items: [],
    isEmpty: false
  }

  async getLists() {
    const api = `https://api.github.com/users/${this.state.username}/gists`;

    try {
      const { data } = await axios.get(api);
      if (data) this.setState({ items: data, isEmpty: !data.length });
    } catch {
      this.setState({ isEmpty: true })
    }

  }

  handleSubmit = username => {
    this.setState({ username }, () => this.getLists());
  }

  render() {
    const { username, items, isEmpty } = this.state;

    const listItems = !isEmpty ? items.map(item => <ListItem key={item.id} data={item} />) : null;

    const noItemsHtml = isEmpty ? <NoItems /> : null;

    return (
      <section className="listing">
        <SearchInput username={username} onSubmit={this.handleSubmit}  />
        <ul className="listing__items">{listItems}</ul>
        {noItemsHtml}
      </section>
    )
  }
}

export default Listing;
