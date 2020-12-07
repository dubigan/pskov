import React, { Component } from "react";
import axios from "axios";
import {
  Card,
  Row,
  Form,
  Button,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";
import Alerts from "./Alerts";

export default class CarDetail extends Component {
  state = {
    messages: [],
    car: {
      manufacturer: "",
      model: "",
      production: "",
      color: "",
      power: "",
      mileage: "",
      comment: "",
    },
  };

  url = "/testforjob/api/car/";
  tooltipPlace = "bottom";

  componentDidMount() {
    registerLocale("ru", ru);
    this.getCar();
  }

  digitsOnly = (e) => {
    let charCode = e.charCode;
    if (charCode < 48 || charCode > 57) {
      // digits only
      e.preventDefault();
    }
  };

  getErrors = (data) => {
    return Object.keys(data).map((key) => {
      return { type: "error", message: data[key] };
    });
  };

  changeCar = (e) => {
    const car = {
      ...this.state.car,
      [e.target.name]: e.target.value,
    };

    this.setState({ car });
  };

  changeDate = (date) => {
    //const dt = new Date(date).toLocaleDateString("ru");
    const car = {
      ...this.state.car,
      production: new Date(date).toLocaleDateString("ru"),
    };
    this.setState({ car });
  };

  saveCar = (e) => {
    axios
      .post(this.url, { car: this.state.car })
      .then((res) => {
        if (res.data.redirect) {
          window.location.href = res.data["redirect"];
        }

        this.setState({
          car: res.data,
          messages: [
            {
              type: "success",
              message: "Информация об автомобиле сохранена",
            },
          ],
        });
      })
      .catch((err) => {
        this.setState({
          messages: this.getErrors(err.response.data),
        });
      });
  };

  getCar = () => {
    axios
      .post(this.url, {})
      .then((res) => {
        this.setState({ car: res.data });
      })
      .catch((err) => {
        this.setState({
          messages: this.getErrors(err.response.data),
        });
      });
  };

  render() {
    return (
      <div>
        <Alerts messages={this.state.messages} />
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
                  {/* <OverlayTrigger
                    key={1}
                    placement={this.tooltipPlace}
                    overlay={<Tooltip id={`tooltip-1`}>Дата выпуска в формате dd.mm.yyy</Tooltip>}
                  > */}
                  <DatePicker
                    className="col-11"
                    //format="dd.MM.yyyy"
                    locale="ru"
                    name="production"
                    showYearDropdown={true}
                    onChange={this.changeDate}
                    value={this.state.car.production}
                  />
                  {/* </OverlayTrigger> */}
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
                    value={this.state.car.power ? this.state.car.power : ""}
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
                    value={this.state.car.mileage ? this.state.car.mileage : ""}
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
                <OverlayTrigger
                  key={2}
                  placement={this.tooltipPlace}
                  overlay={
                    <Tooltip id={`tooltip-2`}>
                      Сохранить информацию об автомобиле
                    </Tooltip>
                  }
                >
                  <Button
                    variant="primary"
                    className="col"
                    onClick={this.saveCar}
                  >
                    Сохранить
                  </Button>
                </OverlayTrigger>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
