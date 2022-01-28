import React from 'react';
import {Row, Col} from 'react-bootstrap';

const ResultListGroup = () => (
    <div>
        <Row className="">
            <Col xs lg="2">
            1 of 3
            </Col>
            <Col md="auto">Variable width content</Col>
            <Col xs lg="2">
            3 of 3
            </Col>
        </Row>
        <Row>
            <Col>1 of 3</Col>
            <Col md="auto">Variable width content</Col>
            <Col xs lg="2">
            3 of 3
            </Col>
        </Row>
    </div>
)

export default ResultListGroup ;