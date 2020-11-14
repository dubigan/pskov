import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button, Row } from 'react-bootstrap';
import Loader from './Loader';

export class Owners extends Component {
  state = {
    loading: false,
    owners: [],
    sortedBy: {
      name: 'last_name',
      direction: 'asc',
    },
  };

  url = '/testforjob/api/owners/';

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
    this.setState({ loading: true });
    axios
      .post(this.url, { sorted_by: this.state.sortedBy })
      .then((res) => {
        console.log('getOwners', res.data);
        this.setState({ owners: res.data });
      })
      .catch((err) => console.log('getOwners', err.response.data))
      .finally(() => this.setState({ loading: false }));
  };

  btnSortClick = (e) => {
    const sorted_name = e.target.id;
    //console.log('btnSortClick e', e);

    if (this.state.sortedBy.name !== sorted_name) {
      const sortedBy = {
        name: sorted_name,
        direction: 'desc',
      };
      //console.log('btnSortClick sortedBy', sortedBy);
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
      //console.log('btnSortClick', sortedBy);

      this.setState({ sortedBy: sortedBy });
    }
  };

  get arrow() {
    //console.log('arrow', this.state.sortedBy.direction);
    return this.state.sortedBy.direction === 'asc' ? this.upArrow : this.downArrow;
  }

  btnDelClick = (e) => {
    this.setState({ loading: true });
    axios
      .post(this.url, {
        sorted_by: this.state.sortedBy,
        btn_del: '',
        owner_pk: this.state.owners[+e.target.value].id,
      })
      .then((res) => {
        console.log('delBtnClick', res.data);
        this.setState({ owners: res.data });
      })
      .catch((err) => console.log('delBtnClick', err.response.data))
      .finally(() => this.setState({ loading: false }));
  };
  btnEditClick = (e) => {
    axios
      .post(this.url, { btn_edit: '', owner_pk: this.state.owners[+e.target.value].id })
      .then((res) => {
        if (res.data.redirect) {
          window.location.href = res.data['redirect'];
        }
      })
      .catch((err) => console.log('btnEditClick', err.response.data));
  };
  btnAddClick = (e) => {
    axios
      .post(this.url, { btn_add: '' })
      .then((res) => {
        if (res.data.redirect) {
          window.location.href = res.data['redirect'];
        }
      })
      .catch((err) => console.log('btnAddClick', err.response.data));
  };

  render() {
    return (
      <div>
        {this.state.loading && <Loader />}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th id="last_name" onClick={this.btnSortClick}>
                <Row id="last_name">
                  {this.state.sortedBy.name === 'last_name' && (
                    <div id="last_name" className="ml-2">
                      {this.arrow}
                    </div>
                  )}{' '}
                  <div id="last_name" className="ml-2">
                    Фамилия
                  </div>
                </Row>
              </th>
              <th id="name" onClick={this.btnSortClick}>
                <Row id="name">
                  {this.state.sortedBy.name === 'name' && (
                    <div id="name" className="ml-2">
                      {this.arrow}
                    </div>
                  )}{' '}
                  <div id="name" className="ml-2">
                    Имя
                  </div>
                </Row>
              </th>
              <th id="patronymic">Отчество</th>
              <th id="gender" onClick={this.btnSortClick}>
                <Row id="gender">
                  {this.state.sortedBy.name === 'gender' && (
                    <div id="gender" className="ml-2">
                      {this.arrow}
                    </div>
                  )}
                  <div id="gender" className="ml-2">
                    Пол
                  </div>
                </Row>
              </th>
              <th id="age" onClick={this.btnSortClick}>
                <Row id="age">
                  {this.state.sortedBy.name === 'age' && (
                    <div id="age" className="ml-2">
                      {this.arrow}
                    </div>
                  )}{' '}
                  <div id="age" className="ml-2">
                    Возраст
                  </div>
                </Row>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.owners.map((o, index) => {
              return (
                <tr key={index}>
                  <td>{o.last_name}</td>
                  <td>{o.name}</td>
                  <td>{o.patronymic}</td>
                  <td>{o.gender === 'f' ? 'Жен' : 'Муж'}</td>
                  <td>{o.age}</td>
                  <td style={{ width: 100 + 'px' }}>
                    <Row>
                      <Button
                        value={index}
                        variant="primary"
                        className="ml-2"
                        onClick={this.btnEditClick}
                      >
                        {'\u27f6'}
                      </Button>
                      <Button
                        value={index}
                        variant="danger"
                        className="ml-2"
                        onClick={this.btnDelClick}
                      >
                        x
                      </Button>
                    </Row>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Button variant="primary" className="col" onClick={this.btnAddClick}>
          +
        </Button>
      </div>
    );
  }
}
