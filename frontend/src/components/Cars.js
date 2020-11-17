import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button, Row, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Loader from './Loader';
import { CarDeleteDialog } from './CarDeleteDialog';

export class Cars extends Component {
  state = {
    loading: false,
    showDeleteDialog: false,
    cars: [],
    carDelete: '',
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
    const car = this.state.cars.filter((c) => +c.id === +e.target.value)[0];
    //console.log("order out", orderOut);
    this.setState({
      showDeleteDialog: true,
      carDelete: car,
    });
  };
  btnEditClick = (e) => {
    axios
      .post(this.url, {
        btn_edit: '',
        car_pk: this.state.cars[+e.target.value].id,
        url: window.location.pathname,
      })
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

  carDelete = (confirm) => {
    this.setState({ showDeleteDialog: false });
    console.log('carDelete', confirm);

    if (confirm === 'true') {
      this.setState({ loading: true });
      axios
        .post(this.url, {
          sorted_by: this.state.sortedBy,
          btn_del: '',
          car_pk: this.state.carDelete.id,
        })
        .then((res) => {
          console.log('delBtnClick', res.data);
          this.setState({ cars: res.data });
        })
        .catch((err) => console.log('delBtnClick', err.response.data))
        .finally(() => this.setState({ loading: false }));
    }
  };

  render() {
    return (
      <div>
        {this.state.loading && <Loader />}
        {this.state.showDeleteDialog && (
          <CarDeleteDialog params={this.state} carDelete={this.carDelete} />
        )}
        <Table striped bordered hover>
          <thead>
            <tr>
              <OverlayTrigger
                key={1}
                placement={'bottom'}
                overlay={<Tooltip id={`tooltip-1`}>Нажмите для сортировки</Tooltip>}
              >
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
              </OverlayTrigger>
              <OverlayTrigger
                key={2}
                placement={'bottom'}
                overlay={<Tooltip id={`tooltip-2`}>Нажмите для сортировки</Tooltip>}
              >
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
              </OverlayTrigger>
              <OverlayTrigger
                key={3}
                placement={'bottom'}
                overlay={<Tooltip id={`tooltip-3`}>Нажмите для сортировки</Tooltip>}
              >
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
              </OverlayTrigger>
              <OverlayTrigger
                key={4}
                placement={'bottom'}
                overlay={<Tooltip id={`tooltip-4`}>Нажмите для сортировки</Tooltip>}
              >
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
              </OverlayTrigger>
              <OverlayTrigger
                key={5}
                placement={'bottom'}
                overlay={<Tooltip id={`tooltip-5`}>Нажмите для сортировки</Tooltip>}
              >
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
              </OverlayTrigger>
              <OverlayTrigger
                key={6}
                placement={'bottom'}
                overlay={<Tooltip id={`tooltip-6`}>Нажмите для сортировки</Tooltip>}
              >
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
              </OverlayTrigger>
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
                      <OverlayTrigger
                        key={7}
                        placement={'bottom'}
                        overlay={<Tooltip id={`tooltip-7`}>Редактировать</Tooltip>}
                      >
                        <Button
                          value={o.id}
                          variant="primary"
                          className="ml-2"
                          onClick={this.btnEditClick}
                        >
                          {'\u27f6'}
                        </Button>
                      </OverlayTrigger>
                      <OverlayTrigger
                        key={8}
                        placement={'bottom'}
                        overlay={<Tooltip id={`tooltip-8`}>Удалить</Tooltip>}
                      >
                        <Button
                          value={o.id}
                          variant="danger"
                          className="ml-2"
                          onClick={this.btnDelClick}
                        >
                          x
                        </Button>
                      </OverlayTrigger>
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
