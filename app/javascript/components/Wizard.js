import React from "react";
import ReactDOM from "react-dom";
import ReactWizard from "react-bootstrap-wizard";
import { Container, Row, Col } from "reactstrap";
import I18n from '../i18n-js/index.js'

import "react-bootstrap-wizard/dist/react-wizard.css"

class FirstStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstStep: "first step here"
    };
  }
  render() {
    return <div>Hey from First</div>;
  }
}
class SecondStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondStep: "second step here"
    };
  }
  isValidated() {
    // do some validations
    // decide if you will
    return true;
    // or you will
    // return false;
  }
  render() {
    return <div>Hey from Second</div>;
  }
}
class ThirdStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thirdStep: "third step here"
    };
  }
  render() {
    return <div>Hey from Third</div>;
  }
}

var steps = [
  // this step hasn't got a isValidated() function, so it will be considered to be true
  { stepName: "First", component: FirstStep },
  // this step will be validated to false
  { stepName: "Second", component: SecondStep },
  // this step will never be reachable because of the seconds isValidated() steps function that will always return false
  { stepName: "Third", component: ThirdStep }
];

class Wizard extends React.Component {
  finishButtonClick(allStates) {
    console.log(allStates);
  }
  render() {
    return (
      <Container fluid style={{ marginTop: "15px" }}>
        <Row>
          <Col xs={12} md={12} className="mr-auto ml-auto">
            <ReactWizard
              steps={steps}
              navSteps
              title={I18n.t('wizards.sample.title')}
              description={I18n.t('wizards.sample.description')}
              validate
              color="blue"
              finishButtonClick={this.finishButtonClick}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Wizard
