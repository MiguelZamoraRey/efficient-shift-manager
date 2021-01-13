import React from 'react';
import '../assets/styles/TimmerCard.css';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import play from '../assets/img/play-solid.svg';
import pause from '../assets/img/pause-solid.svg';

function TimmerCard(props) {
    return (
    <Container fluid className={props.style}>
        <Row>
            <Col className="time center">
                <span>{props.minute}:{props.second}</span>
            </Col>
        </Row>
        <Row>
            <Col className="center">
                <Image src={play} onClick={props.play}/>
            </Col>
            <Col className="center">
                <Image src={pause}  onClick={props.pause}/>
            </Col>
        </Row>
    </Container>
    )
}

export default TimmerCard;
