import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button, Row } from 'react-bootstrap';
import Loader from './Loader';

export class Cars extends Component {
  state = {
    loading: false,
    cars: [],
    sortedBy: {
      name: 'model',
      direction: 'asc',
    },
  };

  url = '/testforjob/api/cars/';

  //upArrow = '&#x0225C;';
  upArrow = '\u2191';
  //downArrow = '&#x0225C;';
  downArrow = '\u2193';

  componentDidMount() {
    this.getCars();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.owner !== this.props.owner) this.getCars();
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
    console.log('getCars props.owner', this.props.owner);

    axios
      .post(this.url, { owner_pk: this.props.owner ? this.props.owner : -1 })
      .then((res) => {
        console.log('getCars', res.data);

        this.setState({ cars: res.data });
      })
      .catch((err) => console.log('getCars', err));
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
        car_pk: this.state.cars[+e.target.value].id,
      })
      .then((res) => {
        console.log('delBtnClick', res.data);
        this.setState({ cars: res.data });
      })
      .catch((err) => console.log('delBtnClick', err.response.data))
      .finally(() => this.setState({ loading: false }));
  };
  btnEditClick = (e) => {
    axios
      .post(this.url, { btn_edit: '', car_pk: this.state.cars[+e.target.value].id })
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
              <th id="manufacturer" onClick={this.btnSortClick}>
                <Row id="manufacturer">
                  {this.state.sortedBy.name === 'manufacturer' && (
                    <div id="manufacturer" className="ml-2">
                      {this.arrow}
                    </div>
                  )}{' '}
                  <div id="manufacturer" className="ml-2">
                    Производитель
                  </div>
                </Row>
              </th>
              <th id="model" onClick={this.btnSortClick}>
                <Row id="model">
                  {this.state.sortedBy.name === 'model' && (
                    <div id="model" className="ml-2">
                      {this.arrow}
                    </div>
                  )}{' '}
                  <div id="model" className="ml-2">
                    Модель
                  </div>
                </Row>
              </th>
              <th id="production" onClick={this.btnSortClick}>
                <Row id="production">
                  {this.state.sortedBy.name === 'production' && (
                    <div id="production" className="ml-2">
                      {this.arrow}
                    </div>
                  )}{' '}
                  <div id="production" className="ml-2">
                    Дата выпуска
                  </div>
                </Row>
              </th>
              <th id="color" onClick={this.btnSortClick}>
                <Row id="color">
                  {this.state.sortedBy.name === 'color' && (
                    <div id="color" className="ml-2">
                      {this.arrow}
                    </div>
                  )}
                  <div id="color" className="ml-2">
                    Цвет
                  </div>
                </Row>
              </th>
              <th id="power" onClick={this.btnSortClick}>
                <Row id="power">
                  {this.state.sortedBy.name === 'power' && (
                    <div id="power" className="ml-2">
                      {this.arrow}
                    </div>
                  )}{' '}
                  <div id="power" className="ml-2">
                    Мощность
                  </div>
                </Row>
              </th>
              <th id="mileage" onClick={this.btnSortClick}>
                <Row id="mileage">
                  {this.state.sortedBy.name === 'mileage' && (
                    <div id="mileage" className="ml-2">
                      {this.arrow}
                    </div>
                  )}{' '}
                  <div id="mileage" className="ml-2">
                    Пробег
                  </div>
                </Row>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.cars.map((o, index) => {
              return (
                <tr key={index}>
                  <td>{o.manufacturer}</td>
                  <td>{o.model}</td>
                  <td>{o.production}</td>
                  <td>{o.color}</td>
                  <td>{o.power}</td>
                  <td>{o.mileage}</td>
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
        {/* <Button variant="primary" className="col" onClick={this.btnAddClick}>
          +
        </Button> */}
      </div>
    );
  }
}
