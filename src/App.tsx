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

interface IFeeder {
  id: number;
  feederImage: string;
  feederParams: {}
  feederType: "INCOMER" | "ACB" | "BUS TIE" | "MCCB" | "MOTOR" | "VSD SS" | "PFC";
}

const feedersCollection: Array<IFeeder> = [
  {
    id: 1,
    feederImage: "feederImage",
    feederParams: {
      'maxCurrent': 100,
      'feederName': "QF",
      poles: 3

    },
    feederType: "INCOMER",
  },
  {
    id: 2,
    feederImage: "feederImage",
    feederParams: {
      'maxCurrent': 200,
      'feederName': "QF",
      poles: 3

    },
    feederType: "ACB",
  },
  {
    id: 3,
    feederImage: "feederImage",
    feederParams: {
      'maxCurrent': 100,
      'feederName': "QF",
      poles: 3

    },
    feederType: "ACB",
  },
  {
    id: 4,
    feederImage: "feederImage",
    feederParams: {
      'maxCurrent': 100,
      'feederName': "QF",
      poles: 3

    },
    feederType: "BUS TIE",
  },
  {
    id: 5,
    feederImage: "feederImage",
    feederParams: {
      'maxCurrent': 63,
      'feederName': "QF",
      poles: 3
    },
    feederType: "PFC",
  },
  {
    id: 6,
    feederImage: "feederImage",
    feederParams: {
      'maxCurrent': 100,
      'feederName': "QF",
      poles: 3

    },
    feederType: "INCOMER",
  },
  {
    id: 7,
    feederImage: "feederImage",
    feederParams: {
      'maxCurrent': 200,
      'feederName': "QF",
      poles: 3

    },
    feederType: "ACB",
  },
  {
    id: 8,
    feederImage: "feederImage",
    feederParams: {
      'maxCurrent': 100,
      'feederName': "QF",
      poles: 3

    },
    feederType: "ACB",
  },
  {
    id: 9,
    feederImage: "feederImage",
    feederParams: {
      'maxCurrent': 100,
      'feederName': "QF",
      poles: 3

    },
    feederType: "BUS TIE",
  },
  {
    id: 10,
    feederImage: "feederImage",
    feederParams: {
      'maxCurrent': 63,
      'feederName': "QF",
      poles: 3
    },
    feederType: "PFC",
  },
  {
    id: 11,
    feederImage: "feederImage",
    feederParams: {
      'maxCurrent': 100,
      'feederName': "QF",
      poles: 3

    },
    feederType: "INCOMER",
  },
  {
    id: 12,
    feederImage: "feederImage",
    feederParams: {
      'maxCurrent': 200,
      'feederName': "QF",
      poles: 3

    },
    feederType: "ACB",
  },
  {
    id: 13,
    feederImage: "feederImage",
    feederParams: {
      'maxCurrent': 100,
      'feederName': "QF",
      poles: 3

    },
    feederType: "ACB",
  },
  {
    id: 14,
    feederImage: "feederImage",
    feederParams: {
      'maxCurrent': 100,
      'feederName': "QF",
      poles: 3

    },
    feederType: "BUS TIE",
  },
  {
    id: 15,
    feederImage: "feederImage",
    feederParams: {
      'maxCurrent': 63,
      'feederName': "QF",
      poles: 3
    },
    feederType: "PFC",
  },
  {
    id: 16,
    feederImage: "feederImage",
    feederParams: {
      'maxCurrent': 100,
      'feederName': "QF",
      poles: 3

    },
    feederType: "INCOMER",
  },
  {
    id: 17,
    feederImage: "feederImage",
    feederParams: {
      'maxCurrent': 200,
      'feederName': "QF",
      poles: 3

    },
    feederType: "ACB",
  },
  {
    id: 18,
    feederImage: "feederImage",
    feederParams: {
      'maxCurrent': 100,
      'feederName': "QF",
      poles: 3

    },
    feederType: "ACB",
  },
  {
    id: 19,
    feederImage: "feederImage",
    feederParams: {
      'maxCurrent': 100,
      'feederName': "QF",
      poles: 3

    },
    feederType: "BUS TIE",
  },
  {
    id: 20,
    feederImage: "feederImage",
    feederParams: {
      'maxCurrent': 63,
      'feederName': "QF",
      poles: 3
    },
    feederType: "PFC",
  },

]

const [selectedFeeders, setSelectedFeeders] = useState<IFeeder[] | null> (null)


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
            <Nav.Link href="/home">ВСЕ</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-0">INCOMER</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">BUS TIE</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">ФИДЕР/ACB</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">ФИДЕР/MCCB</Nav.Link>
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
        <div>
          <div className="chosenFeeders"></div>

          <div className="horizontalWrapper">

            {
              feedersCollection.map(feeder => {
                return <div className="box">{feeder.feederImage}</div>
              })
            }
          </div>

        </div>


      </Container>
      <Container fluid className="feedersDropZone {
">


      </Container>

    </div>
  )
}

export default App
