import React, { Component } from "react";
import { Alert as ReactAlert } from "react-bootstrap";

export default class Alerts extends Component {
  state = {
    showAlert: false,
    timeout: 5000,
  };

  componentDidUpdate(prevProps, prevState) {
    let showAlert = false;
    const { messages } = this.props;
    const { messages: prevMessages } = prevProps;
    // console.log("messages", messages);
    // console.log("errors", errors);
    // console.log("prevMessages", prevMessages);
    // console.log("prevErrors", prevErrors);

    if (messages && messages.length > 0 && messages !== prevMessages) {
      showAlert = true;
    }
    // console.log("Alerts componentDidUpdate showAlert", showAlert);
    // console.log(
    //   "Alerts componentDidUpdate prevSate.showAlert",
    //   prevState.showAlert
    // );
    // console.log(
    //   "Alerts componentDidUpdate this.state.showAlert",
    //   this.state.showAlert
    // );
    if (showAlert && !this.state.showAlert) {
      this.setState({
        showAlert,
      });
    }
  }

  getReactAlerts = (array) => {
    return array ? (
      array.map((e, index) => {
        const variant = e.type === "success" ? "primary" : "danger";
        return (
          <ReactAlert variant={variant} key={index}>
            {e.message}
          </ReactAlert>
        );
      })
    ) : (
      <></>
    );
  };

  delay = (wait) =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(), wait);
    });

  showAlert = () => {
    if (this.state.showAlert) {
      this.delay(
        this.props.timeout ? this.props.timeout : this.state.timeout
      ).then((res) =>
        this.setState({
          showAlert: false,
        })
      );
      return <>{this.getReactAlerts(this.props.messages)}</>;
    }
    return <div />;
  };

  render() {
    return <>{this.showAlert()}</>;
  }
}
