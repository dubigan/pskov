import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export default class DeleteDialog extends Component {
  handleClose = (e) => {
    if (e) this.props.itemDelete(e.target.value);
    return this.props.itemDelete(false);
  };

  nameOfItem = "";

  itemInfo = (item) => {
    return "";
  };

  getItemInfo = () => {
    if (this.props.params.itemDelete) {
      return this.itemInfo(this.props.params.itemDelete);
    }
    return "";
  };

  render() {
    return (
      <Modal
        show={this.props.params.showDeleteDialog}
        onHide={this.handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Удалить {this.nameOfItem}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.getItemInfo()}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" value={false} onClick={this.handleClose}>
            Отмена
          </Button>
          <Button variant="danger" value={true} onClick={this.handleClose}>
            Удалить
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
