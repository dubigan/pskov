import React, { Component } from 'react';
import axios from 'axios';

export class Owners extends Component {
  state = {
    owners: [],
  };

  componentDidMount() {
    this.getOwners();
  }

  getOwners = () => {
    axios
      .post('/testforjob/api/owners/', { get_owners: '' })
      .then((res) => {
        console.log('getOwners', res.data);
        this.setState({ owners: res.data });
      })
      .catch((err) => console.log('getOwners', err));
  };

  render() {
    return (
      <div>
        {this.state.owners.map((o, index) => {
          return (
            <input
              className="form-control col-6"
              name="name"
              type="text"
              value={o.name}
              key={index}
            />
          );
        })}
      </div>
    );
  }
}
