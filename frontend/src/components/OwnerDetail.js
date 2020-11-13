import React, { Component } from 'react';
import axios from 'axios';

export class OwnerDetail extends Component {
  state = {
    owner: null,
  };

  componentDidMount() {}

  getOwnerDetail = () => {
    axios
      .post('/testforjob/api/owner/', {})
      .then((res) => {})
      .catch((err) => console.log('getOwnerDetail', err));
  };

  render() {
    return <div></div>;
  }
}
