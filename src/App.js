import React from "react";
import "./App.css";
import arrow from "./assets/arow.svg";
import plus from "./assets/plus.svg";
import grid from "./assets/grid.svg";
import volume from "./assets/volume.svg";
import TinyLineChart from "./components/linegph";

function App() {

// below data will be obtained from an API. Taking static values for the screen development

  const [price] = React.useState('63,179.71');
  const [currency] = React.useState("USD");
  const [percentage] = React.useState("+ 2,161.42 (3.54%)");
  const [position, setPosition] = React.useState(150)

  const roots = ["Summary", "Chart", "Statistics", "Analysis", "Settings"];
  const time = ["1d", "3d", "1w", "1m", "6m", "1y", "max"];


  React.useEffect(() => {
    let number = parseFloat(price.replace(/,/g, ''));
    setPosition(Math.floor(number/420))
    console.log(position)
  }, [price,position])
  

  return (
    <div className="App">
      <div className="box1">
        <div className="priceBox">
          <div className="stockPrice">{price}</div>
          <div className="country">{currency}</div>
        </div>
        <div className="netChange">{percentage}</div>
      </div>
      <div className="box2">
        {roots.map((item, index) => (
          <div key={index} className="section">
            {item}
          </div>
        ))}
      </div>
      <div className="actions">
        <div className="actOne">
          <div className="flscreen">
            <img src={arrow} alt="full-screen-icon" width="24" height="24" />
            <div className="section">Fullscreen</div>
          </div>
          <div className="flscreen">
            <img src={plus} alt="full-screen-icon" width="24" height="24" />
            <div className="section">Compare</div>
          </div>
        </div>
        <div className="actTwo">
          {time.map((item, index) => (
            <div key={index} className="block">
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="graph">
        <img src={grid} alt="back-grid" />
        <img className="volume" src={volume} alt="back-bar-lines"/>
        <div className="lines">
          <TinyLineChart demo="yolo"/>
        </div>
        <div className="move" style={{top:`${position}px`}}>{price}</div>
      </div>
    </div>
  );
}

export default App;
