import React from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
const Reportes = () => {
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
                      {/* <i className="fas fa-file-alt text-primary" style={{ fontSize: "24px" }}></i> */}
                    {/* <i className="fas fa-truck text-primary" style={{ fontSize: "15px", marginLeft: "5px" }}></i */}
                    <i className="fas fa-clipboard-list text-primary" style={{ fontSize: "24px" }}></i>
                    </div>
                    <h1
                      className="display-3 text-white mb-0 font-weight-bold"
                      style={{
                        letterSpacing: "-1px",
                        textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                      }}
                    >
                      Reportes de Transporte
                    </h1>
                  </div>

                  <p
                    className="text-white lead mt-3 mb-4 ml-2 pl-1 border-left border-white"
                    style={{
                      borderLeftWidth: "3px",
                      paddingLeft: "15px",
                      maxWidth: "600px",
                      opacity: 0.9,
                    }}
                  >
                     Visualiza y analiza los datos de viajes corporativos de manera clara y detallada. Obtén estadísticas, comparativas y tendencias para optimizar la gestión de transporte de tu empresa.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Reportes;
