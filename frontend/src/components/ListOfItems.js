import React, { Component } from "react";
import axios from "axios";

export default class ListOfItems extends Component {
  state = {
    loading: false,
    messages: [],
    showDeleteDialog: false,
    itemDelete: "",
    items: [],
    sortedBy: {
      name: "",
      direction: "asc",
    },
  };

  url = "";
  //upArrow = '&#x0225C;';
  upArrow = "\u2191";
  //downArrow = '&#x0225C;';
  downArrow = "\u2193";
  nameOfItem = "";

  componentDidMount() {
    this.getItems();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.sortedBy.name !== this.state.sortedBy.name ||
      prevState.sortedBy.direction !== this.state.sortedBy.direction
    ) {
      this.getItems();
    }
  }

  get arrow() {
    //console.log('arrow', this.state.sortedBy.direction);
    return this.state.sortedBy.direction === "asc"
      ? this.upArrow
      : this.downArrow;
  }

  getErrors = (data) => {
    return Object.keys(data).map((key) => {
      return { type: "error", message: data[key] };
    });
  };

  getItems = () => {
    this.setState({ loading: true });
    //console.log('getItems props.owner', this.props.owner);
    axios
      .post(this.url, {
        sorted_by: this.state.sortedBy,
        owner: this.props.owner ? this.props.owner : -1,
      })
      .then((res) => {
        //console.log(`getItems ${this.nameOfItem}`, res.data);
        this.setState({ items: res.data });
      })
      .catch((err) => {
        //console.log("getItems", err.response.data);
        this.setState({
          messages: this.getErrors(err.response.data),
        });
      })
      .finally(() => this.setState({ loading: false }));
  };

  getItem = (id) => {
    return this.state.items.filter((item) => +item.id === +id)[0];
  };

  btnSortClick = (e) => {
    const sorted_name = e.target.id;
    //console.log('btnSortClick e', e);

    if (this.state.sortedBy.name !== sorted_name) {
      const sortedBy = {
        name: sorted_name,
        direction: "desc",
      };
      //console.log('btnSortClick sortedBy', sortedBy);
      this.setState({
        sortedBy: sortedBy,
      });
    } else {
      const direction =
        this.state.sortedBy.direction === "desc" ? "asc" : "desc";
      //console.log('btnSortClick direction', direction);

      const sortedBy = {
        ...this.state.sortedBy,
        direction: direction,
      };
      //console.log('btnSortClick', sortedBy);

      this.setState({ sortedBy: sortedBy });
    }
  };

  btnDelClick = (e) => {
    const item = this.getItem(e.target.value);
    //console.log("order out", orderOut);
    this.setState({
      showDeleteDialog: true,
      itemDelete: item,
    });
  };

  btnAddClick = (e) => {
    axios
      .post(this.url, { btn_add: "" })
      .then((res) => {
        if (res.data.redirect) {
          window.location.href = res.data["redirect"];
        }
      })
      .catch((err) => {
        //console.log("btnAddClick", err.response.data);
        this.setState({
          messages: this.getErrors(err.response.data),
        });
      });
  };

  btnEditClick = (e) => {
    axios
      .post(this.url, {
        btn_edit: "",
        item_pk: e.target.value,
        url: window.location.pathname,
      })
      .then((res) => {
        if (res.data.redirect) {
          window.location.href = res.data["redirect"];
        }
      })
      .catch((err) => {
        //console.log("btnEditClick", err.response.data);
        this.setState({
          messages: this.getErrors(err.response.data),
        });
      });
  };

  itemDelete = (confirm) => {
    this.setState({ showDeleteDialog: false });
    //console.log('itemDelete', confirm);

    if (confirm === "true") {
      this.setState({ loading: true });
      axios
        .post(this.url, {
          sorted_by: this.state.sortedBy,
          btn_del: "",
          item_pk: this.state.itemDelete.id,
          owner: this.props.owner ? this.props.owner : -1,
        })
        .then((res) => {
          //console.log("delBtnClick", res.data);
          this.setState({
            items: res.data,
            messages: [
              {
                type: "success",
                message: `${this.nameOfItem} успешно удален`,
              },
            ],
          });
        })
        .catch((err) => {
          //console.log("delBtnClick", err.response.data);
          this.setState({
            messages: this.getErrors(err.response.data),
          });
        })
        .finally(() => this.setState({ loading: false }));
    }
  };

  render() {
    return <div></div>;
  }
}
