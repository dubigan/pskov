import React from "react";
import { Table, Button, Row, Tooltip, OverlayTrigger } from "react-bootstrap";
import Loader from "./Loader";
import ListOfItems from "./ListOfItems";
import { OwnerDeleteDialog } from "./OwnerDeleteDialog";
import Alerts from "./Alerts";

export default class Owners extends ListOfItems {
  url = "/testforjob/api/owners/";
  tooltipPlace = "bottom";
  nameOfItem = "Автовладелец";

  render() {
    return (
      <div>
        {this.state.loading && <Loader />}
        {this.state.showDeleteDialog && (
          <OwnerDeleteDialog params={this.state} itemDelete={this.itemDelete} />
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
                <th id="last_name" onClick={this.btnSortClick}>
                  <Row id="last_name">
                    {this.state.sortedBy.name === "last_name" && (
                      <div id="last_name" className="ml-2">
                        {this.arrow}
                      </div>
                    )}{" "}
                    <div id="last_name" className="ml-2">
                      Фамилия
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
                <th id="name" onClick={this.btnSortClick}>
                  <Row id="name">
                    {this.state.sortedBy.name === "name" && (
                      <div id="name" className="ml-2">
                        {this.arrow}
                      </div>
                    )}{" "}
                    <div id="name" className="ml-2">
                      Имя
                    </div>
                  </Row>
                </th>
              </OverlayTrigger>
              <th id="patronymic">Отчество</th>
              <OverlayTrigger
                key={3}
                placement={this.tooltipPlace}
                overlay={
                  <Tooltip id={`tooltip-3`}>Нажмите для сортировки</Tooltip>
                }
              >
                <th id="gender" onClick={this.btnSortClick}>
                  <Row id="gender">
                    {this.state.sortedBy.name === "gender" && (
                      <div id="gender" className="ml-2">
                        {this.arrow}
                      </div>
                    )}
                    <div id="gender" className="ml-2">
                      Пол
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
                <th id="age" onClick={this.btnSortClick}>
                  <Row id="age">
                    {this.state.sortedBy.name === "age" && (
                      <div id="age" className="ml-2">
                        {this.arrow}
                      </div>
                    )}{" "}
                    <div id="age" className="ml-2">
                      Возраст
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
                  <td>{o.last_name}</td>
                  <td>{o.name}</td>
                  <td>{o.patronymic}</td>
                  <td>{o.gender === "f" ? "Жен" : "Муж"}</td>
                  <td>{o.age}</td>
                  <td style={{ width: 100 + "px" }}>
                    <Row>
                      <OverlayTrigger
                        key={5}
                        placement={this.tooltipPlace}
                        overlay={
                          <Tooltip id={`tooltip-5`}>Редактирование</Tooltip>
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
                        key={6}
                        placement={this.tooltipPlace}
                        overlay={<Tooltip id={`tooltip-6`}>Удаление</Tooltip>}
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
        <OverlayTrigger
          key={7}
          placement={this.tooltipPlace}
          overlay={
            <Tooltip id={`tooltip-7`}>Добавление нового автовладельца</Tooltip>
          }
        >
          <Button variant="primary" className="col" onClick={this.btnAddClick}>
            +
          </Button>
        </OverlayTrigger>
      </div>
    );
  }
}
