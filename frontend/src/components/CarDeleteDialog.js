// import React, { Component } from 'react';
// import { Modal, Button } from 'react-bootstrap';
import DeleteDialog from "./DeleteDialog";

export class CarDeleteDialog extends DeleteDialog {
  nameOfItem = "автомобиль";

  itemInfo = (item) => {
    return [item.manufacturer, item.model].join(" ");
  };
}
