import React, { Component } from 'react';
import axios from 'axios';
import { Card, Row, Form, Button, Alert, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { Cars } from './Cars';

export class OwnerDetail extends Component {
  state = {
    alert: {
      showAlert: false,
      errors: [],
      messages: [],
    },
    owner: {
      id: -10, // indicate new owner, -1 is not acceptable
      cars: [],
      name: '',
      patronymic: '',
      last_name: '',
      gender: '',
      age: '',
      comment: '',
    },
  };

  url = '/testforjob/api/owner/';
  tooltipPlace = 'bottom';

  componentDidMount() {
    this.getOwner();
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

  getOwner = () => {
    axios
      .post(this.url, {})
      .then((res) => {
        //console.log('getOwner', res.data);

        const owner = { ...res.data, id: res.data['id'] ? res.data['id'] : -10 };
        console.log('getOwner', owner);
        this.setState({ owner: owner });
      })
      .catch((err) => {
        console.log('getOwnerDetail getOwner', err.response.data);
        this.setState({
          alert: { messages: [], errors: this.getErrors(err.response.data), showAlert: true },
        });
      });
  };

  saveOwner = () => {
    axios
      .post(this.url, { owner: this.state.owner })
      .then((res) => {
        //console.log('saveOwner', res.data);

        this.setState({
          owner: res.data,
          alert: {
            showAlert: true,
            messages: ['Информация о владельце сохранена'],
            errors: [],
          },
        });
      })
      .catch((err) => {
        console.log('getOwnerDetail saveOwner', err.response.data);
        this.setState({
          alert: { messages: [], errors: this.getErrors(err.response.data), showAlert: true },
        });
      });
  };

  changeOwner = (e) => {
    let owner;
    switch (e.target.name) {
      case 'gender-f':
        owner = {
          ...this.state.owner,
          gender: 'f',
        };
        break;
      case 'gender-m':
        owner = {
          ...this.state.owner,
          gender: 'm',
        };
        break;
      default:
        owner = {
          ...this.state.owner,
          [e.target.name]: e.target.value,
        };
    }
    //console.log('changeOwner', owner);

    this.setState({ owner });
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

  btnNewCarClick = () => {
    axios
      .post(this.url, { btn_add: '', url: window.location.pathname, owner_pk: this.state.owner.id })
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
        {this.showAlert()}
        <Card>
          <Card.Title>Автовладелец</Card.Title>
          <Card.Body>
            <Row>
              <div className="col-5">
                <Row>
                  <Form.Label className="col-4">Имя</Form.Label>
                  <input
                    className="form-control col-6"
                    name="name"
                    type="text"
                    value={this.state.owner.name ? this.state.owner.name : ''}
                    onChange={this.changeOwner}
                  />
                  <Form.Label className="col-4">Отчество</Form.Label>
                  <input
                    className="form-control col-6"
                    name="patronymic"
                    type="text"
                    value={this.state.owner.patronymic ? this.state.owner.patronymic : ''}
                    onChange={this.changeOwner}
                  />
                  <Form.Label className="col-4">Фамилия</Form.Label>
                  <input
                    className="form-control col-6"
                    name="last_name"
                    type="text"
                    value={this.state.owner.last_name ? this.state.owner.last_name : ''}
                    onChange={this.changeOwner}
                  />
                  <Form.Label className="col-4" name="gender">
                    Пол
                  </Form.Label>
                  <Row className="col-6">
                    <Form.Label className="col-1" name="gender-m">
                      <small>М</small>
                    </Form.Label>
                    <input
                      className="form-control col-1 border-0"
                      name="gender-m"
                      type="radio"
                      checked={this.state.owner.gender === 'm' ? 1 : 0}
                      onChange={this.changeOwner}
                    />
                    <Form.Label className="col-1" name="gender-f">
                      <small>Ж</small>
                    </Form.Label>
                    <input
                      className="form-control col-1 border-0"
                      name="gender-f"
                      type="radio"
                      checked={this.state.owner.gender === 'f' ? 1 : 0}
                      onChange={this.changeOwner}
                    />
                  </Row>
                  <Form.Label className="col-4" name="age">
                    Возраст
                  </Form.Label>
                  <input
                    className="form-control col-6"
                    name="age"
                    type="text"
                    maxLength="3"
                    value={this.state.owner.age ? this.state.owner.age : ''}
                    onChange={this.changeOwner}
                    onKeyPress={this.digitsOnly}
                  />
                </Row>
              </div>
              <div className="col-7">
                <Form.Label className="col-4">Комментарий</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="6"
                  value={this.state.owner.comment}
                  name="comment"
                  onChange={this.changeOwner}
                />
              </div>
            </Row>
            <hr />
            <div className="row spacer">
              <div className="col-12">
                <OverlayTrigger
                  key={1}
                  placement={this.tooltipPlace}
                  overlay={
                    <Tooltip id={`tooltip-1`}>Сохранить информацию об автовладельце</Tooltip>
                  }
                >
                  <Button variant="primary" className="col" onClick={this.saveOwner}>
                    Сохранить
                  </Button>
                </OverlayTrigger>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Title>Автомобили</Card.Title>
          <Card.Header>
            <Row className="spacer">
              <Col xs={12}>
                <OverlayTrigger
                  key={2}
                  placement={this.tooltipPlace}
                  overlay={<Tooltip id={`tooltip-2`}>Добавить автомобиль</Tooltip>}
                >
                  <Button
                    variant="primary"
                    className="col"
                    name="add_car"
                    onClick={this.btnNewCarClick}
                    disabled={this.state.owner.id < 0 ? 'disabled' : ''}
                  >
                    Добавить автомобиль
                  </Button>
                </OverlayTrigger>
              </Col>
            </Row>
          </Card.Header>
          <div className="row spacer">
            <div className="col-12">
              <Cars
                owner={this.state.owner.id}
                withButtons="true"
                withOwnerInfo="false"
                withSearch="false"
              />
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
