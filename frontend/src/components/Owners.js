import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button, Row } from 'react-bootstrap';

export class Owners extends Component {
  state = {
    owners: [],
    sortedBy: {
      name: 'last_name',
      direction: 'desc',
    },
  };

  //upArrow = '&#x0225C;';
  upArrow = '\u2191';
  //downArrow = '&#x0225C;';
  downArrow = '\u2193';

  componentDidMount() {
    this.getOwners();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.sortedBy.name !== this.state.sortedBy.name ||
      prevState.sortedBy.direction !== this.state.sortedBy.direction
    ) {
      this.getOwners();
    }
  }

  getOwners = () => {
    axios
      .post('/testforjob/api/owners/', { sortedBy: this.state.sortedBy })
      .then((res) => {
        console.log('getOwners', res.data);
        this.setState({ owners: res.data });
      })
      .catch((err) => console.log('getOwners', err));
  };

  btnSortClick = (e) => {
    const sorted_name = e.target.id;
    console.log('btnSortClick e', e);

    if (this.state.sortedBy.name !== sorted_name) {
      const sortedBy = {
        name: sorted_name,
        direction: 'desc',
      };
      console.log('btnSortClick sortedBy', sortedBy);
      this.setState({
        sortedBy: sortedBy,
      });
    } else {
      const direction = this.state.sortedBy.direction === 'desc' ? 'asc' : 'desc';
      //console.log('btnSortClick direction', direction);

      const sortedBy = {
        ...this.state.sortedBy,
        direction: direction,
      };
      console.log('btnSortClick', sortedBy);

      this.setState({ sortedBy: sortedBy });
    }
  };

  arrow = () => {
    //console.log('arrow', this.state.sortedBy.direction);

    return this.state.sortedBy.direction === 'asc' ? this.upArrow : this.downArrow;
  };

  render() {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                <Button
                  variant="outline"
                  className="col text-left"
                  id="last_name"
                  value={''}
                  onClick={this.btnSortClick}
                >
                  <Row id="last_name">
                    {this.state.sortedBy.name === 'last_name' && (
                      <div id="last_name">{this.arrow()}</div>
                    )}{' '}
                    <strong id="last_name">Фамилия</strong>
                  </Row>
                </Button>
              </th>
              <th>
                <Button
                  variant="outline"
                  className="col text-left"
                  id="name"
                  value={''}
                  onClick={this.btnSortClick}
                >
                  <Row id="name">
                    {this.state.sortedBy.name === 'name' && <div id="name">{this.arrow()}</div>}{' '}
                    <strong id="name">Имя</strong>
                  </Row>
                </Button>
              </th>
              <th>
                <Button
                  variant="outline"
                  className="col text-left"
                  name="patronymic"
                  value={'Отчество'}
                  onClick={this.btnSortClick}
                >
                  <strong>Отчество</strong>
                </Button>
              </th>
              <th>
                <Button
                  variant="outline"
                  className="col text-left"
                  id="gender"
                  value={''}
                  onClick={this.btnSortClick}
                >
                  <Row id="gender">
                    {this.state.sortedBy.name === 'gender' && <div id="gender">{this.arrow()}</div>}{' '}
                    <strong id="gender">Пол</strong>
                  </Row>
                </Button>
              </th>
              <th>
                <Button
                  variant="outline"
                  className="col text-left"
                  id="age"
                  value={''}
                  onClick={this.btnSortClick}
                >
                  <Row id="age">
                    {this.state.sortedBy.name === 'age' && <div id="age">{this.arrow()}</div>}{' '}
                    <strong id="age">Возраст</strong>
                  </Row>
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.owners.map((o, index) => {
              return (
                <tr key={index}>
                  <td>{o.last_name}</td>
                  <td>{o.name}</td>
                  <td>{o.patronymic}</td>
                  <td>{o.gender}</td>
                  <td>{o.age}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
