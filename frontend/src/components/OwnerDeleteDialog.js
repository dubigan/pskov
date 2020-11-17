import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export class OwnerDeleteDialog extends Component {
  handleClose = (e) => {
    if (e) this.props.ownerDelete(e.target.value);
    return this.props.ownerDelete(false);
  };

  getOwnerInfo = () => {
    if (this.props.params.ownerDelete) {
      //console.log(this.props.params.orderOut);
      return [
        this.props.params.ownerDelete.last_name,
        this.props.params.ownerDelete.name,
        this.props.params.ownerDelete.patronymic,
      ].join(' ');
    }
    return '';
  };

  render() {
    return (
      <Modal show={this.props.params.showDeleteDialog} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Удалить автовладельца</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.getOwnerInfo()}</Modal.Body>
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
