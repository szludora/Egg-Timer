import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import boilingEggs from "../assets/imgs/boilingEggs.gif";
import home from "../assets/imgs/home.png";

export default function TimerPage({ onGoSelectPage, selectedEgg }) {
  const getEggName = () => {
    switch (selectedEgg) {
      case 0:
        return "Very soft-boiled";
      case 1:
        return "Soft-boiled";

      case 2:
        return "Medium-boiled";

      case 3:
        return "Hard-boiled";

      default:
        return "soft";
    }
  };

  const getCookingTimeInSeconds = () => {
    let cookingTimeInSeconds = 0;
    switch (selectedEgg) {
      case 0:
        cookingTimeInSeconds = 300;
        break;
      case 1:
        cookingTimeInSeconds = 420;
        break;
      case 2:
        cookingTimeInSeconds = 540;
        break;
      case 3:
        cookingTimeInSeconds = 720;
        break;
      default:
        cookingTimeInSeconds = 0;
        break;
    }
    return cookingTimeInSeconds;
  };

  const formatTimeToMMSS = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  const [remainingTimeInSeconds, setRemainingTimeInSeconds] = useState(
    getCookingTimeInSeconds()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTimeInSeconds((prevRemainingTimeInSeconds) => {
        if (prevRemainingTimeInSeconds > 0) {
          return prevRemainingTimeInSeconds - 1;
        } else {
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="pageBg">
        <img src={boilingEggs} className="boilingEggs" alt="boilingEggs" />
        <Row>
          <Col className="alignCenter">
            <div className="selectedEgg">
              <p>{getEggName()}</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="alignCenter">
            <div className="remainingTime">
              <p>{formatTimeToMMSS(remainingTimeInSeconds)}</p>
            </div>
          </Col>
        </Row>
      </div>
      <Row>
        <Col className="alignCenter">
          <button className="homeBtn" onClick={onGoSelectPage}>
            <img src={home} alt="home" />
          </button>
        </Col>
      </Row>
    </>
  );
}
