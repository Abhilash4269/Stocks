import React from "react";
import "./App.css";
import arrow from "./assets/arow.svg";
import plus from "./assets/plus.svg";
import grid from "./assets/grid.svg";
import volume from "./assets/volume.svg";
import TinyLineChart from "./components/linegph";

import {
  pData1,
  pData2,
  pData3,
  pData4,
  pData5,
  pData6,
  pData7,
} from "./assets/arr";

function App() {
  // below data will be obtained from an API. Taking static values for the screen development

  const [price, setPrice] = React.useState(
    pData5[pData5.length - 1].toLocaleString()
  );
  const [currency] = React.useState("USD");
  const [percentage] = React.useState("+ 2,161.42 (3.54%)");
  const [position, setPosition] = React.useState(150);

  const roots = ["Summary", "Chart", "Statistics", "Analysis", "Settings"];
  const time = ["1d", "3d", "1w", "1m", "6m", "1y", "max"];

  const [pData, setPData] = React.useState(pData5);

  function showGraph(x) {
    console.log(x);

    if (x === 0) {
      setPData(pData1);
      setPrice(pData1[pData1.length - 1].toLocaleString());
    }
    if (x === 1) {
      setPData(pData2);
      setPrice(pData2[pData2.length - 1].toLocaleString());
    }
    if (x === 2) {
      setPData(pData3);
      setPrice(pData3[pData3.length - 1].toLocaleString());
    }
    if (x === 3) {
      setPData(pData4);
      setPrice(pData4[pData4.length - 1].toLocaleString());
    }
    if (x === 4) {
      setPData(pData5);
      setPrice(pData5[pData5.length - 1].toLocaleString());
    }
    if (x === 5) {
      setPData(pData6);
      setPrice(pData6[pData6.length - 1].toLocaleString());
    }
    if (x === 6) {
      setPData(pData7);
      setPrice(pData7[pData7.length - 1].toLocaleString());
    }
  }

  React.useEffect(() => {
    let number = parseFloat(price.replace(/,/g, ""));
    setPosition(Math.floor(number / 420));
    console.log(position);
  }, [price, position]);

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
            <div key={index} className="block" onClick={() => showGraph(index)}>
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="graph">
        <img src={grid} alt="back-grid" />
        <img className="volume" src={volume} alt="back-bar-lines" />
        <div className="lines">
          <TinyLineChart data={pData} />
        </div>
      </div>
    </div>
  );
}

export default App;
