import "./Home.css";
import { Button, Col, Image, Row } from "react-bootstrap";
import img from "../img/ebook.jpg";
import Service from "../Service/Service";
import Course from "../Course/Course";

const Home = () => {
  return (
    <div className="container container-div">
      <div>
        <Row>
          <Col className="header-information">
            <small>*eBook includes iBooks, PDF & ePub versions</small>
            <h1>Solve your daily life problem in 1 minute</h1>
            <p>
              Get access to 200 high converting headline formulas. Copy the
              title that fits best, insert your details and go live. It’s that
              easy!
            </p>
            <Button variant="primary" size="sm">
              Small button
            </Button>
          </Col>
          <Col className="d-flex justify-content-center">
            <Image className="w-75" src={img} fluid />
          </Col>
        </Row>
      </div>
      <div className="Service-section">
        <Service></Service>
      </div>
      <div>
        <Course></Course>
        </div>
    </div>
  );
};

export default Home;