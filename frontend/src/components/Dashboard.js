import React, { Component } from 'react';
import { Form, Button, Row, Card } from 'react-bootstrap';

export default class Dashboard extends Component {
  state = {
    uploadFile: null,
    websocket: {
      ws: null,
      status: 'disconnected',
    },
    downloadFormat: 'json',
  };

  downloadUrl = '/testforjob/api/download/';
  uploadUrl = '/testforjob/ws/upload/';

  getDownloadUrl = () => {
    return `/testforjob/api/download_${this.state.downloadFormat}/`;
  };

  setWebsocketStatus = (status) => {
    const websocket = { ...this.state.websocket, status: status };
    console.log('setWebsocketStatus', websocket);
    this.setState({ websocket });
  };

  checkWebsocket = () => {
    const ws = this.state.websocket.ws;
    if (!ws || ws.readyState === WebSocket.CLOSED) this.connectWebsocket(); //check if websocket instance is closed, if so call `connect` function.
  };

  connectWebsocket = () => {
    const that = this; // cache the this
    let connectInterval;
    const ws_scheme = window.location.protocol === 'https:' ? 'wss' : 'ws';
    const url = `${ws_scheme}://${window.location.host}${this.uploadUrl}`;
    const ws = new WebSocket(url);
    ws.onopen = () => {
      that.timeout = 250; // reset timer to 250 on open of websocket connection
      clearTimeout(connectInterval);
      console.log(`connected to ${url}`);
      this.setWebsocketStatus(`connected to ${url}`);
    };

    ws.onmessage = (evt) => {
      // listen to data sent from the websocket server
      const message = JSON.parse(evt.data);
      //this.setState({dataFromServer: message})
      console.log(message);
    };

    ws.onclose = () => {
      console.log('disconnected');
      this.setWebsocketStatus('disconnected');
      // automatically try to reconnect on connection loss
      that.timeout = that.timeout + that.timeout; //increment retry interval
      connectInterval = setTimeout(this.checkWebsocket, Math.min(10000, that.timeout)); //call check function after timeout
    };

    ws.onerror = (e) => {
      console.log('websocket error', e);
      this.setWebsocketStatus(`websocket error: ${e}`);
    };
    //console.log('Dashboard componentDidMount', ws);
    const websocket = { ...this.state.websocket, ws: ws };
    //console.log('set ws', websocket);
    this.setState({ websocket });
  };

  componentDidMount() {
    this.connectWebsocket();
  }

  selectFormat = (e) => {
    //console.log('selectFormat', e.target.value);
    this.setState({ downloadFormat: e.target.value });
  };

  selectFileToUpload = (e) => {
    const input = document.createElement('input');
    input.type = 'file';

    input.onchange = (e) => {
      const file = e.target.files[0];
      //console.log('selectFileToUpload', file);
      this.setState({ uploadFile: file });
    };

    input.click();
  };

  sendFile = (e) => {
    const reader = new FileReader();
    reader.readAsText(this.state.uploadFile, 'UTF-8');

    // here we tell the reader what to do when it's done reading...
    reader.onload = (readerEvent) => {
      const content = readerEvent.target.result; // this is the content!
      console.log(content);
      this.state.websocket.ws.send(content);
    };
  };

  render() {
    return (
      <div>
        <Card>
          <Card.Header>
            <Form.Label className="col-5">Загрузка в BD</Form.Label>
          </Card.Header>

          <div className="col-12">Websocket status: {this.state.websocket.status}</div>
          <Form.Label className="col-5">Файл загрузки в BD</Form.Label>
          <Row md="auto">
            <input
              className="form-control col-6 ml-4"
              name="uploadFileName"
              id="uploadFileName"
              type="text"
              value={this.state.uploadFile ? this.state.uploadFile.name : ''}
              //onChange={this.change}
              readOnly
            />
            <Button variant="primary" className="" onClick={this.selectFileToUpload}>
              ...
            </Button>
            <Button
              variant="primary"
              className="col-1 ml-4"
              onClick={this.sendFile}
              disabled={this.state.uploadFile ? '' : 'disabled'}
            >
              Старт
            </Button>
          </Row>
        </Card>
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
