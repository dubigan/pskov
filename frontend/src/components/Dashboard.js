import React, { Component } from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import axios from 'axios';

export default class Dashboard extends Component {
  state = {
    uploadFileName: '',
  };

  downloadUrl = '/testforjob/api/download/';

  change = (e) => {};

  render() {
    return (
      <div>
        <Form.Label className="col-5">Файл загрузки в BD</Form.Label>
        <Row>
          <input
            className="form-control col-6 ml-4"
            name="uploadFileName"
            id="uploadFileName"
            type="text"
            value={this.state.uploadFileName}
            onChange={this.change}
          />
          <Button variant="primary" className="" onClick={this.selectFile}>
            ...
          </Button>
          <Button
            variant="primary"
            className="col-1 ml-4"
            onClick={this.selectFile}
            disabled={this.state.downloadFileName === '' ? 'disabled' : ''}
          >
            Старт
          </Button>
        </Row>
        <Form.Label className="col-5">Выгрузка BD</Form.Label>
        <Row>
          <form action="/testforjob/api/download/" method="post">
            <Button variant="primary" type="submit" className="col ml-4">
              Старт
            </Button>
          </form>
        </Row>
      </div>
    );
  }
}
