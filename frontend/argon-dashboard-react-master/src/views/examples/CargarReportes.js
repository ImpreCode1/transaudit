import React from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";

const CargarReportes = () => {
    return (
        <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8 position-relative">
                      {/* Elementos decorativos */}
                      <div className="position-absolute" style={{ top: "50px", right: "10%", opacity: "0.2" }}>
                        <div className="bg-white rounded-circle" style={{ width: "120px", height: "120px" }}></div>
                      </div>
                      <div className="position-absolute" style={{ bottom: "30px", left: "5%", opacity: "0.1" }}>
                        <div className="bg-white rounded" style={{ width: "80px", height: "80px", transform: "rotate(45deg)" }}></div>
                      </div>
                      
                      <Container fluid>
                        <div className="header-body">
                          <Row className="align-items-center">
                            <Col lg="8">
                              <h1 className="display-2 text-white mb-0 font-weight-bold" style={{ letterSpacing: "-1px" }}>
                                Bienvenidos
                              </h1>
                              <p className="text-white lead mt-3 mb-0">
                               Cargar Reportes 
                              </p>
                              <div className="mt-4">
                                <Button color="light" className="text-secundary font-weight-bold px-4 rounded-pill shadow-sm mr-3">
                                  Ver
                                </Button>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Container>
                  </div>
    </>
    );
    
   
};

export default CargarReportes;
