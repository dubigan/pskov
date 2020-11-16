import React, { Component } from 'react';
import axios from 'axios';
import { Card, Row, Form, Button, Alert } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
//import 'react-day-picker/lib/style.css';
import 'react-datepicker/dist/react-datepicker.css';
import { ru } from 'date-fns/locale/ru/index.js';

export class CarDetail extends Component {
  state = {
    alert: {
      showAlert: false,
      errors: [],
      messages: [],
    },
    car: {
      manufacturer: '',
      model: '',
      production: '',
      color: '',
      power: '',
      mileage: '',
      comment: '',
    },
  };

  url = '/testforjob/api/car/';

  componentDidMount() {
    //registerLocale('ru', ru);
    this.getCar();
  }

  digitsOnly = (e) => {
    let charCode = e.charCode;
    //console.log(charCode);
    if (charCode < 48 || charCode > 57) {
      // digits only
      e.preventDefault();
    }
  };

  getErrors = (data) => {
    const errors = [];
    for (let key in data) {
      errors.push(data[key]);
    }
    return errors;
  };

  showAlert = () => {
    if (this.state.alert.showAlert) {
      setTimeout(
        () => this.setState({ alert: { messages: [], errors: [], showAlert: false } }),
        5000
      );
      if (this.state.alert.errors.length > 0)
        return <Alert variant="danger">{this.state.alert.errors.join('. ')}</Alert>;
      if (this.state.alert.messages.length > 0)
        return <Alert variant="primary">{this.state.alert.messages.join('. ')}</Alert>;
    }
    return <div />;
  };

  changeCar = (e) => {
    //console.log('changeCar', e);

    const car = {
      ...this.state.car,
      [e.target.name]: e.target.value,
    };

    //console.log('changeCar', car);

    this.setState({ car });
  };

  changeDate = (date) => {
    console.log('changeDate date', date);
    const dt = new Date(date).toLocaleDateString('ru');
    console.log('changeDate date', dt);
    const car = {
      ...this.state.car,
      production: new Date(date).toLocaleDateString('ru'),
    };
    console.log('changeDate car', car);

    this.setState({ car });
  };

  saveCar = (e) => {
    axios
      .post(this.url, { car: this.state.car })
      .then((res) => {
        console.log('saveCar', res.data);
        if (res.data.redirect) {
          window.location.href = res.data['redirect'];
        }

        this.setState({
          car: res.data,
          alert: {
            showAlert: true,
            messages: ['Информация об автомобиле сохранена'],
            errors: [],
          },
        });
      })
      .catch((err) => {
        console.log('geCarDetail saveCar', err.response.data);
        this.setState({
          alert: { messages: [], errors: this.getErrors(err.response.data), showAlert: true },
        });
      });
  };

  getCar = () => {
    axios
      .post(this.url, {})
      .then((res) => {
        console.log('getCar', res.data);

        this.setState({ car: res.data });
      })
      .catch((err) => {
        console.log('getCarDetail getCar', err.response.data);
        this.setState({
          alert: { messages: [], errors: this.getErrors(err.response.data), showAlert: true },
        });
      });
  };

  render() {
    return (
      <div>
        {this.showAlert()}
        <Card>
          <Card.Title>Автомобиль</Card.Title>
          <Card.Body>
            <Row>
              <div className="col-6">
                <Row>
                  <Form.Label className="col-5">Производитель</Form.Label>
                  <input
                    className="form-control col-6"
                    name="manufacturer"
                    type="text"
                    value={this.state.car.manufacturer}
                    onChange={this.changeCar}
                  />
                  <Form.Label className="col-5">Модель</Form.Label>
                  <input
                    className="form-control col-6"
                    name="model"
                    type="text"
                    value={this.state.car.model}
                    onChange={this.changeCar}
                  />
                  <Form.Label className="col-5">Дата выпуска</Form.Label>
                  <DatePicker
                    className="col-11"
                    //format="dd.MM.yyyy"
                    locale={ru}
                    name="production"
                    showYearDropdown={true}
                    onChange={this.changeDate}
                    value={this.state.car.production}
                  />
                  {/* <input
                    className="form-control col-6"
                    name="production"
                    type="text"
                    value={this.state.car.production}
                    onChange={this.changeCar}
                  /> */}
                  <Form.Label className="col-5" name="color">
                    Цвет
                  </Form.Label>
                  <input
                    className="form-control col-6"
                    name="color"
                    type="text"
                    value={this.state.car.color}
                    onChange={this.changeCar}
                  />
                  <Form.Label className="col-5" name="age">
                    Мощность (л.с.)
                  </Form.Label>
                  <input
                    className="form-control col-6"
                    name="power"
                    type="text"
                    maxLength="3"
                    value={this.state.car.power ? this.state.car.power : ''}
                    onChange={this.changeCar}
                    onKeyPress={this.digitsOnly}
                  />
                  <Form.Label className="col-5" name="age">
                    Пробег (км.)
                  </Form.Label>
                  <input
                    className="form-control col-6"
                    name="mileage"
                    type="text"
                    maxLength="10"
                    value={this.state.car.mileage ? this.state.car.mileage : ''}
                    onChange={this.changeCar}
                    onKeyPress={this.digitsOnly}
                  />
                </Row>
              </div>
              <div className="col-6">
                <Form.Label className="col-5">Комментарий</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="7"
                  value={this.state.car.comment}
                  name="comment"
                  onChange={this.changeCar}
                />
              </div>
            </Row>
            <hr />
            <div className="row spacer">
              <div className="col-12">
                <Button variant="primary" className="col" onClick={this.saveCar}>
                  Сохранить
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
