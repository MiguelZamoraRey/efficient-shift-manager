import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/styles/App.css';
import Header from '../components/Header';
import TimmerCard from '../components/TimmerCard';
import TimmerCreator from '../components/TimmerCreator';

function App() {
  const [second, setSecond] = useState('00');
  const [minute, setMinute] = useState('00');
  const [counter, setCounter] = useState(0);
  const [wminute, setWMinute] = useState(0);
  const [rminute, setRMinute] = useState(0);
  const [cicle, setCicle] = useState(0);
  const [isWork, setIsWork] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [style, setStyle] = useState('timmer-card');

  useEffect(() => {
    let intervalId;

    if (isActive && counter>0) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
        const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter(counter => counter - 1);
      }, 1000)
    }else if(isActive && counter === 0 && cicle > 0){
        setCicle(cicles => cicles -1);
        if(!isWork){
          setStyle('timmer-card green');
          setIsWork(true)
          setCounter(wminute);
        } else {
          setStyle('timmer-card red');
          setIsWork(false)
          setCounter(rminute);
        }
    }else{
      setIsActive(false);
      setStyle('timmer-card');
      setIsWork(true);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter, wminute, rminute, isWork, cicle])

  function saveTime(wminutes, rminutes, cicles) {
    setWMinute(wminutes * 60);
    setRMinute(rminutes * 60);
    setCicle(cicles * 2);
    setCounter(wminutes * 60);
    setStyle('timmer-card red');
    setIsWork(true);
    setIsActive(true);
  }

  return(
    <div className="App">
      <Header/>
      <Container fluid>
        <Row>
          <Col xs={12} md={8}>
            <TimmerCard style={style} minute={minute} second={second} isActive={isActive} pause={()=>setIsActive(false)} play={()=>setIsActive(true)}/>
          </Col>
          <Col xs={12} md={4}>
            <TimmerCreator saveTime={saveTime}/>
          </Col>
        </Row>
      </Container>
    </div>
    );
}

export default App;
