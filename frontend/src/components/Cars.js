import React, { Component } from 'react';

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
      .then((res) => {})
      .catch((err) => console.log('getManufacturers', err));
  };

  getCars = () => {
    axios
      .post('/testforjob/api/cars/', { owner: this.state.owner })
      .then((res) => {})
      .catch((err) => console.log('getCars', err));
  };

  render() {
    return <div></div>;
  }
}
