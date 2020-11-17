import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export class CarDeleteDialog extends Component {
  handleClose = (e) => {
    if (e) this.props.carDelete(e.target.value);
    return this.props.carDelete(false);
  };

  getCarInfo = () => {
    if (this.props.params.carDelete) {
      //console.log(this.props.params.orderOut);
      return [this.props.params.carDelete.manufacturer, this.props.params.carDelete.model].join(
        ' '
      );
    }
    return '';
  };

  render() {
    return (
      <Modal show={this.props.params.showDeleteDialog} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Удалить автомобиль</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.getCarInfo()}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" value={false} onClick={this.handleClose}>
            Отмена
          </Button>
          <Button
            variant="danger"
            value={true}
            onClick={this.handleClose}
            // disabled={this.props.params.orderOut.id && "disable"}
          >
            Удалить
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
