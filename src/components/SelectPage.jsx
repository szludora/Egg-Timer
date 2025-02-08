import React, { useState, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import egg1 from "../assets/imgs/egg1.gif";
import egg2 from "../assets/imgs/egg2.gif";
import egg3 from "../assets/imgs/egg3.gif";
import egg4 from "../assets/imgs/egg4.gif";
import cook from "../assets/imgs/cook.png";
import friedEggs from "../assets/imgs/friedEggs.png";

export default function SelectPage({ onGoToTimerPage }) {
  const [selected, setSelectedEgg] = useState(null);
  const selector = useRef();

  const handleSelectedChange = (value) => {
    let selectorClassName = "";
    setSelectedEgg(value);

    switch (value) {
      case 0:
        selectorClassName = "first";
        break;
      case 1:
        selectorClassName = "second";
        break;
      case 2:
        selectorClassName = "third";
        break;
      case 3:
        selectorClassName = "fourth";
        break;
      default:
        selectorClassName = "";
        break;
    }

    let refsClassList = selector.current.classList;

    refsClassList.remove(refsClassList[1]);
    refsClassList.add(selectorClassName);
  };

  return (
    <div className="pageBg">
      <div className="eggs">
        <img
          src={friedEggs}
          ref={selector}
          className="eggSelector"
          alt="friedEggs"
        />
        <Row className="eggRows">
          <Col
            className={`eggContainer ${selected === 0 ? "selected" : ""}`}
            onClick={() => handleSelectedChange(0)}
          >
            <img src={egg1} alt="egg1" />
            <p>Very soft-boiled</p>
          </Col>
          <Col
            className={`eggContainer ${selected === 1 ? "selected" : ""}`}
            onClick={() => handleSelectedChange(1)}
          >
            <img src={egg2} alt="egg2" />
            <p>Soft-boiled</p>
          </Col>
        </Row>
        <Row className="eggRows">
          <Col
            className={`eggContainer ${selected === 2 ? "selected" : ""}`}
            onClick={() => handleSelectedChange(2)}
          >
            <img src={egg3} alt="egg3" />
            <p>Medium-boiled</p>
          </Col>
          <Col
            className={`eggContainer ${selected === 3 ? "selected" : ""}`}
            onClick={() => handleSelectedChange(3)}
          >
            <img src={egg4} alt="egg4" />
            <p>Hard-boiled</p>
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
    </div>
  );
}
