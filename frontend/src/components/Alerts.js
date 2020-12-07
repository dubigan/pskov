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

    if (messages && messages.length > 0 && messages !== prevMessages) {
      showAlert = true;
    }
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
    new Promise((resolve) => {
      setTimeout(() => resolve(), wait);
    });

  showAlert = () => {
    if (this.state.showAlert) {
      this.delay(
        this.props.timeout ? this.props.timeout : this.state.timeout
      ).then(() =>
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
