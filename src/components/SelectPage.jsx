import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import egg1 from "../assets/imgs/egg1.gif";
import egg2 from "../assets/imgs/egg2.gif";
import egg3 from "../assets/imgs/egg3.gif";
import egg4 from "../assets/imgs/egg4.gif";
import cook from "../assets/imgs/cook.png";

export default function SelectPage({ onGoToTimerPage }) {
  const [selected, setSelectedEgg] = useState(null);

  return (
    <div className="pageBg">
      <Row className="eggRows">
        <Col
          className={`eggContainer ${selected === 0 ? "selected" : ""}`}
          onClick={() => setSelectedEgg(0)}
        >
          <img src={egg1} alt="egg1" />
        </Col>
        <Col
          className={`eggContainer ${selected === 1 ? "selected" : ""}`}
          onClick={() => setSelectedEgg(1)}
        >
          <img src={egg2} alt="egg2" />
        </Col>
      </Row>
      <Row className="eggRows">
        <Col
          className={`eggContainer ${selected === 2 ? "selected" : ""}`}
          onClick={() => setSelectedEgg(2)}
        >
          <img src={egg3} alt="egg3" />
        </Col>
        <Col
          className={`eggContainer ${selected === 3 ? "selected" : ""}`}
          onClick={() => setSelectedEgg(3)}
        >
          <img src={egg4} alt="egg4" />
        </Col>
      </Row>
      <Row>
        <Col className="alignCenter">
          <button
            className="cookBtn"
            onClick={() => {
              if (selected != null) {
                onGoToTimerPage(selected);
              }
            }}
          >
            <img src={cook} alt="cook" className="cookBtnImg" />
          </button>
        </Col>
      </Row>
    </div>
  );
}
