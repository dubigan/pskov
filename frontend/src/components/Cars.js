import React from "react";
import { Table, Button, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import Loader from "./Loader";
import ListOfItems from "./ListOfItems";
import { CarDeleteDialog } from "./CarDeleteDialog";
import Alerts from "./Alerts";

export default class Cars extends ListOfItems {
  url = "/testforjob/api/cars/";
  tooltipPlace = "bottom";
  nameOfItem = "Автомобиль";

  componentDidUpdate(prevProps, prevState) {
    super.componentDidUpdate(prevProps, prevState);
    if (prevProps.owner !== this.props.owner) this.getItems();
  }

  render() {
    return (
      <div>
        {this.state.loading && <Loader />}
        {this.state.showDeleteDialog && (
          <CarDeleteDialog params={this.state} itemDelete={this.itemDelete} />
        )}
        <Alerts messages={this.state.messages} />
        <Table striped bordered hover>
          <thead>
            <tr>
              <OverlayTrigger
                key={1}
                placement={this.tooltipPlace}
                overlay={
                  <Tooltip id={`tooltip-1`}>Нажмите для сортировки</Tooltip>
                }
              >
                <th id="manufacturer" onClick={this.btnSortClick}>
                  <Row id="manufacturer">
                    {this.state.sortedBy.name === "manufacturer" && (
                      <div id="manufacturer" className="ml-2">
                        {this.arrow}
                      </div>
                    )}{" "}
                    <div id="manufacturer" className="ml-2">
                      Производитель
                    </div>
                  </Row>
                </th>
              </OverlayTrigger>
              <OverlayTrigger
                key={2}
                placement={this.tooltipPlace}
                overlay={
                  <Tooltip id={`tooltip-2`}>Нажмите для сортировки</Tooltip>
                }
              >
                <th id="model" onClick={this.btnSortClick}>
                  <Row id="model">
                    {this.state.sortedBy.name === "model" && (
                      <div id="model" className="ml-2">
                        {this.arrow}
                      </div>
                    )}{" "}
                    <div id="model" className="ml-2">
                      Модель
                    </div>
                  </Row>
                </th>
              </OverlayTrigger>
              <OverlayTrigger
                key={3}
                placement={this.tooltipPlace}
                overlay={
                  <Tooltip id={`tooltip-3`}>Нажмите для сортировки</Tooltip>
                }
              >
                <th id="production" onClick={this.btnSortClick}>
                  <Row id="production">
                    {this.state.sortedBy.name === "production" && (
                      <div id="production" className="ml-2">
                        {this.arrow}
                      </div>
                    )}{" "}
                    <div id="production" className="ml-2">
                      Дата выпуска
                    </div>
                  </Row>
                </th>
              </OverlayTrigger>
              <OverlayTrigger
                key={4}
                placement={this.tooltipPlace}
                overlay={
                  <Tooltip id={`tooltip-4`}>Нажмите для сортировки</Tooltip>
                }
              >
                <th id="color" onClick={this.btnSortClick}>
                  <Row id="color">
                    {this.state.sortedBy.name === "color" && (
                      <div id="color" className="ml-2">
                        {this.arrow}
                      </div>
                    )}
                    <div id="color" className="ml-2">
                      Цвет
                    </div>
                  </Row>
                </th>
              </OverlayTrigger>
              <OverlayTrigger
                key={5}
                placement={this.tooltipPlace}
                overlay={
                  <Tooltip id={`tooltip-5`}>Нажмите для сортировки</Tooltip>
                }
              >
                <th id="power" onClick={this.btnSortClick}>
                  <Row id="power">
                    {this.state.sortedBy.name === "power" && (
                      <div id="power" className="ml-2">
                        {this.arrow}
                      </div>
                    )}{" "}
                    <div id="power" className="ml-2">
                      Мощность
                    </div>
                  </Row>
                </th>
              </OverlayTrigger>
              <OverlayTrigger
                key={6}
                placement={this.tooltipPlace}
                overlay={
                  <Tooltip id={`tooltip-6`}>Нажмите для сортировки</Tooltip>
                }
              >
                <th id="mileage" onClick={this.btnSortClick}>
                  <Row id="mileage">
                    {this.state.sortedBy.name === "mileage" && (
                      <div id="mileage" className="ml-2">
                        {this.arrow}
                      </div>
                    )}{" "}
                    <div id="mileage" className="ml-2">
                      Пробег
                    </div>
                  </Row>
                </th>
              </OverlayTrigger>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((o, index) => {
              return (
                <tr key={index}>
                  <td>{o.manufacturer}</td>
                  <td>{o.model}</td>
                  <td>{o.production}</td>
                  <td>{o.color}</td>
                  <td>{o.power}</td>
                  <td>{o.mileage}</td>
                  <td style={{ width: 100 + "px" }}>
                    <Row>
                      <OverlayTrigger
                        key={7}
                        placement={this.tooltipPlace}
                        overlay={
                          <Tooltip id={`tooltip-7`}>Редактировать</Tooltip>
                        }
                      >
                        <Button
                          value={o.id}
                          variant="primary"
                          className="ml-2"
                          onClick={this.btnEditClick}
                        >
                          {"\u27f6"}
                        </Button>
                      </OverlayTrigger>
                      <OverlayTrigger
                        key={8}
                        placement={this.tooltipPlace}
                        overlay={<Tooltip id={`tooltip-8`}>Удалить</Tooltip>}
                      >
                        <Button
                          value={o.id}
                          variant="danger"
                          className="ml-2"
                          onClick={this.btnDelClick}
                        >
                          x
                        </Button>
                      </OverlayTrigger>
                    </Row>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
