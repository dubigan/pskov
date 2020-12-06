import React, { Component } from "react";
import { Alert } from "react-bootstrap";

export default class Alerts extends Component {
  state = {
    showAlert: false,
    timeout: 5000,
  };

  componentDidUpdate(prevProps, prevState) {
    let showAlert = false;
    const { messages, errors } = this.props;
    const { messages: prevMessages, errors: prevErrors } = prevProps;
    // console.log("messages", messages);
    // console.log("errors", errors);
    // console.log("prevMessages", prevMessages);
    // console.log("prevErrors", prevErrors);

    if (errors && errors.length > 0 && errors !== prevErrors) {
      showAlert = true;
    }
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

  showAlert = () => {
    if (this.state.showAlert) {
      setTimeout(
        () =>
          this.setState({
            showAlert: false,
          }),
        this.props.timeout ? this.props.timeout : this.state.timeout
      );
      return (
        <>
          {this.props.errors ? (
            this.props.errors.map((e) => (
              <Alert variant="danger" key={Date.now()}>
                {e}
              </Alert>
            ))
          ) : (
            <></>
          )}
          {this.props.messages ? (
            this.props.messages.map((m) => (
              <Alert variant="primary" key={Date.now()}>
                {m}
              </Alert>
            ))
          ) : (
            <></>
          )}
        </>
      );
    }
    return <div />;
  };

  render() {
    return <>{this.showAlert()}</>;
  }
}
