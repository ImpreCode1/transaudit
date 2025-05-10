import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import classnames from "classnames";
import { Line } from "react-chartjs-2";

const Index = () => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data(index === 1 ? "data1" : "data2");
  };

  // Sample chart data
  const chartExample1 = {
    data1: {
      labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
      datasets: [
        {
          label: "Transporte",
          data: [120, 180, 150, 200, 170, 210, 190, 230, 200, 250, 220, 270],
          borderColor: "#fff",
          backgroundColor: "rgba(255,255,255,0.1)",
          pointBackgroundColor: "#fff",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "#fff",
        },
      ],
    },
    data2: {
      labels: ["Área A", "Área B", "Área C", "Área D", "Área E", "Área F"],
      datasets: [
        {
          label: "Transporte",
          data: [190, 210, 180, 250, 230, 270],
          borderColor: "#fff",
          backgroundColor: "rgba(255,255,255,0.1)",
          pointBackgroundColor: "#fff",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "#fff",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              color: "rgba(255, 255, 255, 0.1)",
              zeroLineColor: "rgba(255, 255, 255, 0.1)",
            },
            ticks: {
              fontColor: "#fff",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              display: false,
              color: "rgba(255, 255, 255, 0.1)",
            },
            ticks: {
              fontColor: "#fff",
            },
          },
        ],
      },
    },
  };

  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8 position-relative">
        {/* Elementos decorativos */}
        <div
          className="position-absolute"
          style={{ top: "50px", right: "10%", opacity: "0.2" }}
        >
          <div
            className="bg-white rounded-circle"
            style={{ width: "120px", height: "120px" }}
          ></div>
        </div>
        <div
          className="position-absolute"
          style={{ bottom: "30px", left: "5%", opacity: "0.1" }}
        >
          <div
            className="bg-white rounded"
            style={{
              width: "80px",
              height: "80px",
              transform: "rotate(45deg)",
            }}
          ></div>
        </div>

        <Container fluid>
          <div className="header-body">
            <Row className="align-items-center py-4">
              <Col lg="8" className="position-relative">
                {/* Elemento decorativo de fondo */}
                <div
                  className="position-absolute"
                  style={{
                    top: "-20px",
                    left: "-15px",
                    zIndex: 0,
                    opacity: 0.05,
                  }}
                >
                  <i
                    className="fas fa-map-marked-alt"
                    style={{ fontSize: "180px" }}
                  ></i>
                </div>

                <div className="position-relative">
                  <div className="d-flex align-items-center mb-2">
                    <div
                      className="mr-3 bg-white rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm"
                      style={{ width: "48px", height: "48px" }}
                    >
                      <i
                        className="fas fa-map text-primary"
                        style={{ fontSize: "24px" }}
                      ></i>
                    </div>
                    <h1
                      className="display-3 text-white mb-0 font-weight-bold"
                      style={{
                        letterSpacing: "-1px",
                        textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                      }}
                    >
                      Resumen General
                    </h1>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Container className="mt--7" fluid>
        {/* Nuevas tarjetas de totales */}
        <Row className="mb-4">
          <Col lg="6" xl="6">
            <Card className="card-stats mb-4 mb-xl-0 shadow">
              <CardBody>
                <Row>
                  <div className="col">
                    <h5 className="card-title text-uppercase text-muted mb-0">
                      Total de Consumo
                    </h5>
                    <span className="h2 font-weight-bold mb-0">350,897</span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                      <i className="fas fa-chart-bar"></i>
                    </div>
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-muted text-sm">
                  <span className="text-success mr-2">
                    <i className="fa fa-arrow-up"></i> 3.48%
                  </span>
                  <span className="text-nowrap">Desde el último mes</span>
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" xl="6">
            <Card className="card-stats mb-4 mb-xl-0 shadow">
              <CardBody>
                <Row>
                  <div className="col">
                    <h5 className="card-title text-uppercase text-muted mb-0">
                      Total Viajes
                    </h5>
                    <span className="h2 font-weight-bold mb-0">2,356</span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                      <i className="fas fa-car"></i>
                    </div>
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-muted text-sm">
                  <span className="text-danger mr-2">
                    <i className="fas fa-arrow-down"></i> 1.10%
                  </span>
                  <span className="text-nowrap">Desde la semana pasada</span>
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col className="mb-5 mb-xl-0" xl="12">
            {/* Título del gráfico por VP centrado */}
            <h2 className="text-center mb-4">Gráfico por VP</h2>
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Indices de transporte mensual
                    </h6>
                    <h2 className="text-white mb-0">Transporte</h2>
                  </div>
                  <div className="col">
                    <Nav className="justify-content-end" pills>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 1,
                          })}
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 1)}
                        >
                          <span className="d-none d-md-block">Mes</span>
                          <span className="d-md-none">M</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 2,
                          })}
                          data-toggle="tab"
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 2)}
                        >
                          <span className="d-none d-md-block">Área</span>
                          <span className="d-md-none">A</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart" style={{ height: "350px" }}>
                  <Line
                    data={chartExample1[chartExample1Data]}
                    options={chartExample1.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <CardBody>
          <App />
        </CardBody>
      </Container>
    </>
  );
};

// Placeholder para el componente App
const App = () => {
  return (
    <div className="text-center p-4">
      <h3>Contenido de la Aplicación</h3>
    </div>
  );
};

export default Index;
      
 