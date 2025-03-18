import React, { useState } from "react";
import { Container, Row, Col, Button, Card, CardBody } from "reactstrap";
import ViajeModal from "./components/Modals";

const RegistrarVia = () => {
  // Estado para almacenar los viajes (puedes expandirlo después)
  const [viajes, setViajes] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleModal = () => setModalOpen(!modalOpen);

  const handleDateClick = (date) => {
    // console.log("Fecha seleccionada:", date);
    setSelectedDate(date.toString());
    toggleModal();
  };

  const handleSaveViaje = (viaje) => {
    setViajes([...viajes, viaje]);
  };

  return (
    <>
      {/* Header con fondo de gradiente y formas decorativas */}
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
                        style={{ fontSize: "24 px" }}
                      ></i>
                    </div>
                    <h1
                      className="display-3 text-white mb-0 font-weight-bold"
                      style={{
                        letterSpacing: "-1px",
                        textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                      }}
                    >
                      Registro de viajes
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
                    En esta sección podrá registrar los viajes semanales que
                    realice.
                  </p>
                </div>
              </Col>

              {/* <Col lg="4" className="d-none d-lg-block text-right">
              <div className="bg-white bg-opacity-10 p-4 rounded-lg shadow-sm" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(5px)" }}>
                <div className="d-flex justify-content-between mb-3">
                  <div className="text-white">
                    <small className="text-uppercase font-weight-bold opacity-75">Total de viajes</small>
                    <h2 className="mb-0 font-weight-bold">184</h2>
                  </div>
                  <div className="text-white">
                    <small className="text-uppercase font-weight-bold opacity-75">Distancia total</small>
                    <h2 className="mb-0 font-weight-bold">8.293 km</h2>
                  </div>
                </div>
                <div className="progress" style={{ height: "8px", borderRadius: "5px", backgroundColor: "rgba(255,255,255,0.2)" }}>
                  <div className="progress-bar bg-success" style={{ width: "65%" }}></div>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <small className="text-white opacity-75">Mes actual</small>
                  <small className="text-white font-weight-bold">65% completado</small>
                </div>
              </div>
            </Col> */}
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
                          {[10, 11, 12, 13, 14, 15, 16].map((date) => (
                            <td
                              key={date}
                              className="p-2"
                              style={{ height: "120px", verticalAlign: "top" }}
                            >
                              <div className="date-cell">{date}</div>
                              <Button
                                color="primary"
                                size="sm"
                                className="mt-1"
                                block
                                onClick={() => handleDateClick(date)}
                              >
                                +
                              </Button>
                            </td>
                          ))}
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

      {/* implementacion del componenete modal  */}
      <ViajeModal
        isOpen={modalOpen}
        toggle={toggleModal}
        fechaSeleccionada={selectedDate}
        onSaveViaje={handleSaveViaje}
      />
    </>
  );
};

export default RegistrarVia;

