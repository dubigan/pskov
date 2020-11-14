import React, { Component } from 'react';
import axios from 'axios';
import { Card, Row, Form, Button, Alert } from 'react-bootstrap';

export class OwnerDetail extends Component {
  state = {
    alert: {
      showAlert: false,
      errors: null,
      messages: null,
    },
    owner: {
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

  getOwner = () => {
    axios
      .post(this.url, {})
      .then((res) => {
        //console.log('getOwner', res.data);

        this.setState({ owner: res.data });
      })
      .catch((err) => {
        console.log('getOwnerDetail getOwner', err.response.data);
        this.setState({ alert: { errors: err.response.data, showAlert: true } });
      });
  };

  saveOwner = () => {
    axios
      .post(this.url, { owner: this.state.owner })
      .then((res) => {
        //console.log('saveOwner', res.data);

        this.setState({
          owner: res.data,
          alert: { showAlert: true, messages: 'Информация о владельце сохранена' },
        });
      })
      .catch((err) => {
        console.log('getOwnerDetail saveOwner', err.response.data);
        this.setState({ alert: { errors: err.response.data, showAlert: true } });
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
      setTimeout(() => this.setState({ alert: { errors: null, showAlert: false } }), 5000);
      if (this.state.alert.errors)
        return <Alert variant="danger">{JSON.stringify(this.state.alert.errors)}</Alert>;
      if (this.state.alert.messages)
        return <Alert variant="primary">{JSON.stringify(this.state.alert.messages)}</Alert>;
    }
    return <div />;
  };

  render() {
    return (
      <div>
        {this.showAlert()}
        <Card>
          <Card.Title>Клиент</Card.Title>
          <Card.Body>
            <Row>
              <div className="col-5">
                <Row>
                  <Form.Label className="col-4">Имя</Form.Label>
                  <input
                    className="form-control col-6"
                    name="name"
                    type="text"
                    value={this.state.owner.name}
                    onChange={this.changeOwner}
                  />
                  <Form.Label className="col-4">Отчество</Form.Label>
                  <input
                    className="form-control col-6"
                    name="patronymic"
                    type="text"
                    value={this.state.owner.patronymic}
                    onChange={this.changeOwner}
                  />
                  <Form.Label className="col-4">Фамилия</Form.Label>
                  <input
                    className="form-control col-6"
                    name="last_name"
                    type="text"
                    value={this.state.owner.last_name}
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
                      className="form-control col-2"
                      name="gender-m"
                      type="radio"
                      checked={this.state.owner.gender === 'm' ? 1 : 0}
                      onChange={this.changeOwner}
                    />
                    <Form.Label className="col-1" name="gender-f">
                      <small>Ж</small>
                    </Form.Label>
                    <input
                      className="form-control col-2"
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
                    value={this.state.owner.age}
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
                <Button variant="primary" className="col" onClick={this.saveOwner}>
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
