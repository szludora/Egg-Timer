import React, { useState, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import egg1 from "../assets/imgs/egg1.gif";
import egg2 from "../assets/imgs/egg2.gif";
import egg3 from "../assets/imgs/egg3.gif";
import egg4 from "../assets/imgs/egg4.gif";
import cook from "../assets/imgs/cook.png";
import friedEggs from "../assets/imgs/friedEggs.png";

export default function SelectPage({ onGoToTimerPage }) {
  const [selected, setSelected] = useState(null);
  const selector = useRef();

  const handleSelectedChange = (value) => {
    let selectorClassName = "";
    let animationClass = "";

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

    switch (selected) {
      case 0:
        if (value === 1) animationClass = "firstToSecond";
        if (value === 2) animationClass = "firstToThird";
        if (value === 3) animationClass = "firstToFourth";
        break;
      case 1:
        if (value === 0) animationClass = "secondToFirst";
        if (value === 2) animationClass = "secondToThird";
        if (value === 3) animationClass = "secondToFourth";
        break;
      case 2:
        if (value === 0) animationClass = "thirdToFirst";
        if (value === 1) animationClass = "thirdToSecond";
        if (value === 3) animationClass = "thirdToFourth";
        break;
      case 3:
        if (value === 0) animationClass = "fourthToFirst";
        if (value === 1) animationClass = "fourthToSecond";
        if (value === 2) animationClass = "fourthToThird";
        break;
      default:
        if (value === 0) animationClass = "startToFirst";
        if (value === 1) animationClass = "startToSecond";
        if (value === 2) animationClass = "startToThird";
        if (value === 3) animationClass = "startToFourth";
        break;
    }
    setSelected(value);

    if (selector.current.classList.length > 1) {
      setTimeout(() => {
        const classList = selector.current.classList;
        const classesToRemove = Array.from(classList).filter(
          (className) => className !== "eggSelector"
        );

        classesToRemove.forEach((e) => {
          selector.current.classList.remove(e);
          console.log("Removing class: " + e);
        });

        selector.current.classList.add("eggSelector");
        selector.current.classList.add(selectorClassName);
        selector.current.classList.add(animationClass);
      }, 300);
    } else {
      selector.current.classList.add("eggSelector");
      selector.current.classList.add(selectorClassName);
      selector.current.classList.add(animationClass);
    }
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
      </div>
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
