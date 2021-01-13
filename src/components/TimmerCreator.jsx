import React, {useState} from 'react';
import '../assets/styles/TimmerCreator.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';

function TimmerCreator(props) {
    const [wminute, setWMinute] = useState('00');
    const [rminutes, setRMinute] = useState('00');
    const [cicles, setCicles] = useState(0);

    return(
        <Container className="timmer-creator">
            <Row>
                <Col xs={1}></Col>
                <Col xs={10}>
                    <Form>
                        <Form.Group controlId="formWorkingMinutes">
                            <Form.Label>Timmer working minutes</Form.Label>
                            <Form.Control type="number" min={1} placeholder="Enter a number of minutes" onChange={(e)=>{setWMinute(e.target.value)}} />
                        </Form.Group>

                        <Form.Group controlId="formRestMinutes">
                            <Form.Label>Timmer rest minutes</Form.Label>
                            <Form.Control type="number" min={1} placeholder="Enter a number of minutes" onChange={(e)=>{setRMinute(e.target.value)}} />
                        </Form.Group>

                        <Form.Group controlId="formBlocks">
                            <Form.Label>Blocks of work</Form.Label>
                            <Form.Control type="number" min={1} placeholder="Enter a number of blocks" onChange={(e)=>{setCicles(e.target.value)}}  />
                        </Form.Group>

                        <Button variant="primary" onClick={()=>props.saveTime(wminute, rminutes, cicles)}>
                            Create
                        </Button>
                    </Form>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </Container>
    )
}

export default TimmerCreator;
