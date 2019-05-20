import React from 'react';
import {Count} from './Count';
import './App.css';
import Rythm from 'rythm.js'
const rythm = new Rythm();
rythm.setMusic('sandstorm.mp3');
rythm.addRythm('code', 'pulse', 0, 10)
rythm.addRythm('message', 'neon', 0, 10, {
  from: [0,0,255],
  to:[255,0,255]
})
rythm.addRythm('address', 'jump', 0, 10)

rythm.addRythm('message', 'radius', 0, 10, {
  min: 0,
  max: 30
})

rythm.start();

const COUNT_START = 9;

function App() {
  const [count, setCount] = React.useState(COUNT_START);
  const [show, setShow] = React.useState(false);
  // let interval = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
        setCount(prevCount => prevCount - 0.5)
    }, 1500);
  }, [])

  React.useEffect(() => {
    console.log(count);
    if (count < 0) {
      setShow(true);
    }
  }, [count])


  return (
    <div className="App">
      <div className="App-header">
        
        {[...Array(COUNT_START).keys()].map(number => (
          <div key={number} className="count-container">
            <Count number={number + 1} pose={count === number ? 'visible' : 'hidden'} />
          </div>
        ))}


        {show && (
          <div className="message">
            <span className="address">
              Strzegomska 202/313
            </span>
            <span className="code">Klucz + 4967</span>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
