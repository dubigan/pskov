import React, { Component } from 'react';
import { Form, Button, Row, Card } from 'react-bootstrap';
import axios from 'axios';

export default class Dashboard extends Component {
  state = {
    uploadFileName: '',
    downloadFormat: 'json',
  };

  downloadUrl = '/testforjob/api/download/';
  getDownloadUrl = () => {
    return '/testforjob/api/download_' + this.state.downloadFormat + '/';
  };

  change = (e) => {};

  selectFormat = (e) => {
    //console.log('selectFormat', e.target.value);
    this.setState({ downloadFormat: e.target.value });
  };

  render() {
    return (
      <div>
        <Form.Label className="col-5">Файл загрузки в BD</Form.Label>
        <Row md="auto">
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
        <hr />
        <Card>
          <Card.Header>
            <Form.Label className="col-5">Выгрузка BD</Form.Label>
          </Card.Header>
          <Row>
            <Form.Label className="col-3 ml-4">Выберите формат сохраняемого файла</Form.Label>
            <Form.Control as="select" className="col-2" onChange={this.selectFormat}>
              <option value="json">json</option>
              <option value="csv">csv</option>
              <option value="text">text/plain</option>
            </Form.Control>
            <form action={this.getDownloadUrl()} method="post">
              <Button variant="primary" type="submit" className="col ml-4">
                Старт
              </Button>
            </form>
          </Row>
        </Card>
      </div>
    );
  }
}
