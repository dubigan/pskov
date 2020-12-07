import React, { Component } from "react";
import { Form, Button, Row, Card } from "react-bootstrap";
import Alerts from "./Alerts";

export default class Dashboard extends Component {
  state = {
    messages: [],
    uploadFile: null,
    clearDB: false,
    websocket: {
      ws: null,
      status: "disconnected",
    },
    downloadFormat: "json",
  };

  downloadUrl = "/testforjob/api/download/";
  uploadUrl = "/testforjob/ws/upload/";

  getDownloadUrl = () => {
    return `/testforjob/api/download_${this.state.downloadFormat}/`;
  };

  setWebsocketStatus = (status) => {
    const websocket = { ...this.state.websocket, status: status };
    this.setState({ websocket });
  };

  checkWebsocket = () => {
    const ws = this.state.websocket.ws;
    if (!ws || ws.readyState === WebSocket.CLOSED) this.connectWebsocket(); //check if websocket instance is closed, if so call `connect` function.
  };

  connectWebsocket = () => {
    const self = this; // cache the this
    let connectInterval;
    const ws_scheme = window.location.protocol === "https:" ? "wss" : "ws";
    const url = `${ws_scheme}://${window.location.host}${this.uploadUrl}`;
    const ws = new WebSocket(url);
    ws.onopen = () => {
      self.timeout = 250; // reset timer to 250 on open of websocket connection
      clearTimeout(connectInterval);
      //console.log(`connected to ${url}`);
      this.setWebsocketStatus(`connected to ${url}`);
    };

    ws.onmessage = (evt) => {
      // listen to data sent from the websocket server
      const data = JSON.parse(evt.data);
      this.setState({
        messages: data ? [data] : [],
      });
    };

    ws.onclose = () => {
      //console.log('disconnected');
      this.setWebsocketStatus("disconnected");
      // automatically try to reconnect on connection loss
      self.timeout = self.timeout + self.timeout; //increment retry interval
      connectInterval = setTimeout(
        this.checkWebsocket,
        Math.min(10000, self.timeout)
      ); //call check function after timeout
    };

    ws.onerror = (e) => {
      console.log("websocket error", e);
      this.setWebsocketStatus(`websocket error: ${e}`);
    };
    const websocket = { ...this.state.websocket, ws: ws };
    this.setState({ websocket });
  };

  componentDidMount() {
    this.connectWebsocket();
  }

  selectFormat = (e) => {
    this.setState({ downloadFormat: e.target.value });
  };

  selectFileToUpload = (e) => {
    const input = document.createElement("input");
    input.type = "file";

    input.onchange = (e) => {
      const file = e.target.files[0];
      this.setState({ uploadFile: file });
    };

    input.click();
  };

  sendFile = (e) => {
    const reader = new FileReader();
    reader.readAsText(this.state.uploadFile, "UTF-8");

    // here we tell the reader what to do when it's done reading...
    reader.onload = (readerEvent) => {
      const content = readerEvent.target.result; // this is the content!
      this.state.websocket.ws.send(
        JSON.stringify({ cleardb: this.state.clearDB, content: content })
      );
    };
  };

  clearDB = () => {
    this.setState({ clearDB: !this.state.clearDB });
  };

  render() {
    return (
      <div>
        <Alerts messages={this.state.messages} />
        <Card>
          <Card.Header>
            <Form.Label className="col-5">Загрузка в DB</Form.Label>
            <div className="col-12 text-left">
              Websocket status: {this.state.websocket.status}
            </div>
          </Card.Header>
          <Card.Body>
            <Row>
              <Form.Label className="col-2 text-left">Очистить DB</Form.Label>
              <Form.Check
                name="clearBD"
                value={this.state.clearDB}
                onChange={this.clearDB}
                className="ml-2"
              />
            </Row>
            <Row>
              <Form.Label className="col-2 text-left">
                Файл загрузки в DB
              </Form.Label>
              <input
                className="form-control col-3"
                name="uploadFileName"
                id="uploadFileName"
                type="text"
                value={this.state.uploadFile ? this.state.uploadFile.name : ""}
                readOnly
              />
              <Button
                variant="primary"
                className=""
                onClick={this.selectFileToUpload}
              >
                ...
              </Button>
              <Button
                variant="primary"
                className="col-1 ml-2"
                onClick={this.sendFile}
                disabled={this.state.uploadFile ? "" : "disabled"}
              >
                Старт
              </Button>
            </Row>
          </Card.Body>
        </Card>
        <hr />
        <Card>
          <Card.Header>
            <Form.Label className="col-5">Выгрузка DB</Form.Label>
          </Card.Header>
          <Card.Body>
            <Row>
              <Form.Label className="col-3 text-left">
                Выберите формат сохраняемого файла
              </Form.Label>
              <Form.Control
                as="select"
                className="col-2"
                onChange={this.selectFormat}
              >
                <option value="json">json</option>
                <option value="csv">csv</option>
                {/* <option value="text">text/plain</option> */}
              </Form.Control>
              <form action={this.getDownloadUrl()} method="post">
                <Button variant="primary" type="submit" className="col ml-4">
                  Старт
                </Button>
              </form>
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
