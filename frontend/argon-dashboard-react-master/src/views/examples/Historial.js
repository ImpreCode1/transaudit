import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import TablaPersonalizada from "./components/TablaPersonalizada";

const Historial = () => {
  // Datos de ejemplo para la tabla
  const [datosHistorial, setDatosHistorial] = useState([
    {
      id: 1,
      fecha: "2023-03-10",
      origen: "Madrid",
      destino: "Barcelona",
      distancia: "620 km",
      precio: "€45.00",
      estado: "Completado",
    },
    {
      id: 2,
      fecha: "2023-03-15",
      origen: "Barcelona",
      destino: "Valencia",
      distancia: "350 km",
      precio: "€30.00",
      estado: "Completado",
    },
    {
      id: 3,
      fecha: "2023-03-20",
      origen: "Valencia",
      destino: "Sevilla",
      distancia: "650 km",
      precio: "€55.00",
      estado: "En proceso",
    },
    {
      id: 3,
      fecha: "2023-03-20",
      origen: "Valencia",
      destino: "Sevilla",
      distancia: "650 km",
      precio: "€55.00",
      estado: "En proceso",
    },
    {
      id: 3,
      fecha: "2023-03-20",
      origen: "Valencia",
      destino: "Sevilla",
      distancia: "650 km",
      precio: "€55.00",
      estado: "En proceso",
    },
    {
      id: 3,
      fecha: "2023-03-20",
      origen: "Valencia",
      destino: "Sevilla",
      distancia: "650 km",
      precio: "€55.00",
      estado: "En proceso",
    },
    {
      id: 3,
      fecha: "2023-03-20",
      origen: "Valencia",
      destino: "Sevilla",
      distancia: "650 km",
      precio: "€55.00",
      estado: "En proceso",
    },
    {
      id: 3,
      fecha: "2023-03-20",
      origen: "Valencia",
      destino: "Sevilla",
      distancia: "650 km",
      precio: "€55.00",
      estado: "En proceso",
    },
    {
      id: 3,
      fecha: "2023-03-20",
      origen: "Valencia",
      destino: "Sevilla",
      distancia: "650 km",
      precio: "€55.00",
      estado: "En proceso",
    },
    {
      id: 3,
      fecha: "2023-03-20",
      origen: "Valencia",
      destino: "Sevilla",
      distancia: "650 km",
      precio: "€55.00",
      estado: "En proceso",
    },
    {
      id: 3,
      fecha: "2023-03-20",
      origen: "Valencia",
      destino: "Sevilla",
      distancia: "650 km",
      precio: "€55.00",
      estado: "En proceso",
    },
    {
      id: 3,
      fecha: "2023-03-20",
      origen: "Valencia",
      destino: "Sevilla",
      distancia: "650 km",
      precio: "€55.00",
      estado: "En proceso",
    },
    {
      id: 3,
      fecha: "2023-03-20",
      origen: "Valencia",
      destino: "Sevilla",
      distancia: "650 km",
      precio: "€55.00",
      estado: "En proceso",
    },
    {
      id: 3,
      fecha: "2023-03-20",
      origen: "Valencia",
      destino: "Sevilla",
      distancia: "650 km",
      precio: "€55.00",
      estado: "En proceso",
    },
    {
      id: 3,
      fecha: "2023-03-20",
      origen: "Valencia",
      destino: "Sevilla",
      distancia: "650 km",
      precio: "€55.00",
      estado: "En proceso",
    },
    {
      id: 3,
      fecha: "2023-03-20",
      origen: "Valencia",
      destino: "Sevilla",
      distancia: "650 km",
      precio: "€55.00",
      estado: "En proceso",
    },
    {
      id: 3,
      fecha: "2023-03-20",
      origen: "Valencia",
      destino: "Sevilla",
      distancia: "650 km",
      precio: "€55.00",
      estado: "En proceso",
    },
    {
      id: 3,
      fecha: "2023-03-20",
      origen: "Valencia",
      destino: "Sevilla",
      distancia: "650 km",
      precio: "€55.00",
      estado: "En proceso",
    },
    {
      id: 3,
      fecha: "2023-03-20",
      origen: "Valencia",
      destino: "Sevilla",
      distancia: "650 km",
      precio: "€55.00",
      estado: "En proceso",
    },
    {
      id: 3,
      fecha: "2023-03-20",
      origen: "Valencia",
      destino: "Sevilla",
      distancia: "650 km",
      precio: "€55.00",
      estado: "En proceso",
    },
    {
      id: 3,
      fecha: "2023-03-20",
      origen: "Valencia",
      destino: "Sevilla",
      distancia: "650 km",
      precio: "€55.00",
      estado: "En proceso",
    },
    {
      id: 3,
      fecha: "2023-03-20",
      origen: "Valencia",
      destino: "Sevilla",
      distancia: "650 km",
      precio: "€55.00",
      estado: "En proceso",
    },
    {
      id: 3,
      fecha: "2023-03-20",
      origen: "Valencia",
      destino: "Sevilla",
      distancia: "650 km",
      precio: "€55.00",
      estado: "En proceso",
    },
    {
      id: 3,
      fecha: "2023-03-20",
      origen: "Valencia",
      destino: "Sevilla",
      distancia: "650 km",
      precio: "€55.00",
      estado: "En proceso",
    },
    {
      id: 3,
      fecha: "2023-03-20",
      origen: "Valencia",
      destino: "Sevilla",
      distancia: "650 km",
      precio: "€55.00",
      estado: "En proceso",
    },
    {
      id: 3,
      fecha: "2023-03-20",
      origen: "Valencia",
      destino: "Sevilla",
      distancia: "650 km",
      precio: "€55.00",
      estado: "En proceso",
    },
    {
      id: 3,
      fecha: "2023-03-20",
      origen: "Valencia",
      destino: "Sevilla",
      distancia: "650 km",
      precio: "€55.00",
      estado: "En proceso",
    },
    {
      id: 3,
      fecha: "2023-03-20",
      origen: "Valencia",
      destino: "Sevilla",
      distancia: "650 km",
      precio: "€55.00",
      estado: "En proceso",
    },
    {
      id: 3,
      fecha: "2023-03-20",
      origen: "Valencia",
      destino: "Sevilla",
      distancia: "650 km",
      precio: "€55.00",
      estado: "En proceso",
    },
    {
      id: 3,
      fecha: "2023-03-20",
      origen: "Valencia",
      destino: "Sevilla",
      distancia: "650 km",
      precio: "€55.00",
      estado: "En proceso",
    },
    {
      id: 3,
      fecha: "2023-03-20",
      origen: "Valencia",
      destino: "Sevilla",
      distancia: "650 km",
      precio: "€55.00",
      estado: "En proceso",
    },
    {
      id: 3,
      fecha: "2023-03-20",
      origen: "Valencia",
      destino: "Sevilla",
      distancia: "650 km",
      precio: "€55.00",
      estado: "En proceso",
    },
    {
      id: 3,
      fecha: "2023-03-20",
      origen: "Valencia",
      destino: "Sevilla",
      distancia: "650 km",
      precio: "€55.00",
      estado: "En proceso",
    },
    {
      id: 3,
      fecha: "2023-03-20",
      origen: "Valencia",
      destino: "Sevilla",
      distancia: "650 km",
      precio: "€55.00",
      estado: "En proceso",
    },
    {
      id: 3,
      fecha: "2023-03-20",
      origen: "Valencia",
      destino: "Sevilla",
      distancia: "650 km",
      precio: "€55.00",
      estado: "En proceso",
    },
    {
      id: 3,
      fecha: "2023-03-20",
      origen: "Bogota",
      destino: "Sevilla",
      distancia: "650 km",
      precio: "€55.00",
      estado: "En proceso",
    },

    // Puedes agregar más datos de ejemplo aquí
  ]);

  // Definición de columnas para la tabla
  const columnas = [
    { key: "id", header: "#" },
    { key: "fecha", header: "Fecha" },
    { key: "origen", header: "Origen" },
    { key: "destino", header: "Destino" },
    { key: "distancia", header: "Distancia" },
    { key: "precio", header: "Precio" },
    {
      key: "estado",
      header: "Estado",
      render: (item) => (
        <span
          className={`badge badge-${
            item.estado === "Completado" ? "success" : "warning"
          }`}
        >
          {item.estado}
        </span>
      ),
    },
    {
      key: "acciones",
      header: "Acciones",
      render: (item) => (
        <div>
          <Button color="info" size="sm" className="mr-1">
            <i className="fas fa-eye"></i>
          </Button>
          {/* <Button color="warning" size="sm" className="mr-1">
            <i className="fas fa-edit"></i>
          </Button>
          <Button color="danger" size="sm">
            <i className="fas fa-trash"></i>
          </Button> */}
        </div>
      ),
    },
  ];

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
                        className="fas fa-route text-primary"
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
                      Historial de Viajes
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
                    Consulta y gestiona todos los viajes registrados en el
                    sistema de forma sencilla y organizada.
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

      {/* Contenedor principal para la tabla */}
      <Container className="mt--7" fluid>
        <Row>
          <Col>
            <TablaPersonalizada
              data={datosHistorial}
              columnas={columnas}
              titulo="Historial de Viajes"
              itemsPorPagina={5}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Historial;
