import React, { useState } from "react";
import SelectPage from "./components/SelectPage";
import TimerPage from "./components/TimerPage";
import { Row, Col } from "react-bootstrap";
import chicken from "./assets/imgs/chicken.png";
import title from "./assets/imgs/title.png";
import boiledEggs from "./assets/imgs/boiledEggs.png";

function App() {
  const [isTimerPageVisible, setIsTimerPageVisible] = useState(false);
  const [selectedEgg, setSelectedEgg] = useState(null);
  const handleGoToTimerPage = (egg) => {
    setSelectedEgg(egg);
    setIsTimerPageVisible(true);
  };
  const onGoSelectPage = () => {
    setIsTimerPageVisible(false);
  };

  return (
    <div className="bg">
      <Row className="header">
        <Col>
          <img className="chicken" src={chicken} alt="chicken" />
        </Col>
        <Col>
          <img className="title" src={title} alt="title" />
        </Col>
        <Col>
          <img className="boiledEggs" src={boiledEggs} alt="boiledEggs" />
        </Col>
      </Row>
      {isTimerPageVisible ? (
        <TimerPage onGoSelectPage={onGoSelectPage} selectedEgg={selectedEgg} />
      ) : (
        <SelectPage
          onGoToTimerPage={handleGoToTimerPage}
          selectedEgg={selectedEgg}
        />
      )}
    </div>
  );
}

export default App;
