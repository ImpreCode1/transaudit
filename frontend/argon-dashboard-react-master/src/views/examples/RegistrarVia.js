import React, { useState } from 'react';
import { 
  Container, Row, Col, Button, Card, CardBody
} from 'reactstrap';

const RegistrarVia = () => {
  // Estado para almacenar los viajes (puedes expandirlo después)
  const [viajes, setViajes] = useState([]);
  
  return (
    <>
      {/* Header con fondo de gradiente y formas decorativas */}
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
                  Registro de viajes
                </h1>
                <p className="text-white lead mt-3 mb-0">
                  En esta sección podrá registrar los viajes semanales que realice.
                </p>
                {/* <div className="mt-4">
                  <Button color="light" className="text-primary font-weight-bold px-4 rounded-pill shadow-sm mr-3">
                    Nuevo Viaje
                  </Button>
                </div> */}
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      
      {/* Contenido principal con calendario simplificado */}
      <Container className="mt--7" fluid>
        <Row>
          <Col>
            <Card className="shadow border-0">
              <CardBody className="p-4">
                <div className="calendar-container">
                  <h3 className="mb-4">Calendario de Viajes</h3>
                  
                  {/* Aquí irá el calendario después de implementarlo correctamente */}
                  {/* <div className="alert alert-info">
                    El calendario se implementará aquí. Primero debemos solucionar los problemas de compatibilidad con las bibliotecas existentes.
                  </div> */}
                  
                  {/* Botones para navegación básica */}
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <Button color="primary" outline>
                      Semana Anterior
                    </Button>
                    <h4 className="mb-0">Marzo 2025</h4>
                    <Button color="primary" outline>
                      Semana Siguiente
                    </Button>
                  </div>
                  
                  {/* Tabla básica para mostrar los días de la semana */}
                  <div className="table-responsive mt-4">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Lunes</th>
                          <th>Martes</th>
                          <th>Miércoles</th>
                          <th>Jueves</th>
                          <th>Viernes</th>
                          <th>Sábado</th>
                          <th>Domingo</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-2" style={{ height: "120px", verticalAlign: "top" }}>
                            <div className="date-cell">10</div>
                            <Button color="primary" size="sm" className="mt-1" block>+</Button>
                          </td>
                          <td className="p-2" style={{ height: "120px", verticalAlign: "top" }}>
                            <div className="date-cell">11</div>
                            <Button color="primary" size="sm" className="mt-1" block>+</Button>
                          </td>
                          <td className="p-2" style={{ height: "120px", verticalAlign: "top" }}>
                            <div className="date-cell">12</div>
                            <Button color="primary" size="sm" className="mt-1" block>+</Button>
                          </td>
                          <td className="p-2" style={{ height: "120px", verticalAlign: "top" }}>
                            <div className="date-cell">13</div>
                            <Button color="primary" size="sm" className="mt-1" block>+</Button>
                          </td>
                          <td className="p-2" style={{ height: "120px", verticalAlign: "top" }}>
                            <div className="date-cell">14</div>
                            <Button color="primary" size="sm" className="mt-1" block>+</Button>
                          </td>
                          <td className="p-2" style={{ height: "120px", verticalAlign: "top" }}>
                            <div className="date-cell">15</div>
                            <Button color="primary" size="sm" className="mt-1" block>+</Button>
                          </td>
                          <td className="p-2" style={{ height: "120px", verticalAlign: "top" }}>
                            <div className="date-cell">16</div>
                            <Button color="primary" size="sm" className="mt-1" block>+</Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RegistrarVia;