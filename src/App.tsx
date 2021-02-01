import React, { useState } from 'react'
import logo from './public/logo_sm.jpeg'
import './App.css'
import {
  Alert,
  Badge,
  Breadcrumb,
  Button,
  Col,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  Pagination,
  ProgressBar,
  Row,

} from 'react-bootstrap'

function App() {
  const [count,
    setCount] = useState(0)

  const now = 20;

  const progressInstance = <ProgressBar variant="secondary" now={now} label={`${now}%`} />;

  return (
    <div>
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="https://www.electroshield.ru/f/i/electroshield-logo.svg"
        
        height="30"
        className="d-inline-block align-top"
      />{' '}
      
    </Navbar.Brand>
  </Navbar>
      <Container fluid>

        <Pagination className="consequenced">

          <Pagination.Item>Спецификация</Pagination.Item>
          <Pagination.Item active>SLD</Pagination.Item>
          <Pagination.Next />
          <Pagination.Item disabled>Инсталляция</Pagination.Item>
          <Pagination.Item disabled>Конфигурация</Pagination.Item>
          <Pagination.Item disabled>Дополнения</Pagination.Item>
          <Pagination.Item disabled>Чертеж</Pagination.Item>
          <Pagination.Item disabled>Техническое предложение</Pagination.Item>
          <Pagination.Item disabled>BOM</Pagination.Item>
          <Pagination.Item disabled>Стоимость</Pagination.Item>
        </Pagination>

        <div className="service-caption">
          <span>Однолинейная диаграмма SLD</span>
          <span>
            <i className="fas fa-download padding-10"></i>
            <i className="fas fa-share-alt padding-10"></i>
          </span>
            
        </div>
        <Nav variant="tabs" defaultActiveKey="/home">

          <Nav.Item>
            <Nav.Link href="/home">INCOMER</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">BUS TIE</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">ФИДЕР/ACB</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">ФИДЕР/MCCB</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-4">ФИДЕР/MOTOR</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-5">ФИДЕР/VSD SS</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-6">PFC</Nav.Link>
          </Nav.Item>
        </Nav>
  {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row className="padding-10">
          <Col xs={4} md={2}>
            <div className="mb-2">
              <Button variant="light" className="add-btn" size="sm">
              <i className="far fa-plus-square"></i> ИЗ ШАБЛОНА
              </Button>{' '}
              <Button variant="light" className="add-btn" size="sm">
              <i className="far fa-plus"></i> НОВЫЙ
              </Button>
            </div>
          </Col>
          <Col xs={12} md={6}>
            xs=6 md=4
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default App
