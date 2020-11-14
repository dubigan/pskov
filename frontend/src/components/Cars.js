import React, { Component } from 'react';
import axios from 'axios';

export class Cars extends Component {
  state = {
    manufacurers: [],
    owner: null,
    cars: [],
  };

  componentDidMount() {
    this.getCars();
  }

  getManufacturers = () => {
    axios
      .post('/testforjob/api/manufacturers/', {})
      .then((res) => {
        console.log('getManufacturers', res.data);

        this.setState({ manufacturers: res.data });
      })
      .catch((err) => console.log('getManufacturers', err));
  };

  getCars = () => {
    axios
      .post('/testforjob/api/cars/', { owner: this.state.owner })
      .then((res) => {
        console.log('getCars', res.data);

        this.setState({ cars: res.data });
      })
      .catch((err) => console.log('getCars', err));
  };

  render() {
    return <div></div>;
  }
}
