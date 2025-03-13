import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Alert,
  Progress,
} from "reactstrap";
import "./css/CargarReportes.css";

const CargarReportes = () => {
  // Estados para manejar los archivos y su carga
  const [cabifyFile, setCabifyFile] = useState(null);
  const [taxisLibresFile, setTaxisLibresFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState({
    cabify: 0,
    taxisLibres: 0,
  });
  const [uploadStatus, setUploadStatus] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  // Función para manejar la selección de archivos
  const handleFileChange = (e, fileType) => {
    const file = e.target.files[0];
    if (file) {
      if (fileType === "cabify") {
        setCabifyFile(file);
        setUploadProgress((prev) => ({ ...prev, cabify: 0 }));
      } else {
        setTaxisLibresFile(file);
        setUploadProgress((prev) => ({ ...prev, taxisLibres: 0 }));
      }
    }
  };

  // Función para simular la carga de archivos
  const handleUpload = () => {
    if (!cabifyFile || !taxisLibresFile) {
      setUploadStatus({
        type: "warning",
        message:
          "Por favor, selecciona los dos archivos Excel antes de continuar.",
      });
      return;
    }

    setIsUploading(true);
    setUploadStatus(null);

    // Simulación de carga progresiva
    const simulateUpload = (fileType) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 5;

        setUploadProgress((prev) => ({
          ...prev,
          [fileType]: progress,
        }));

        if (progress >= 100) {
          clearInterval(interval);

          // Verificar si ambos archivos están al 100%
          if (
            (fileType === "cabify" && uploadProgress.taxisLibres === 100) ||
            (fileType === "taxisLibres" && uploadProgress.cabify === 100)
          ) {
            setTimeout(() => {
              setIsUploading(false);
              setUploadStatus({
                type: "success",
                message:
                  "¡Los archivos se han cargado y procesado correctamente!",
              });
            }, 500);
          }
        }
      }, 120);
    };

    // Iniciar simulación para ambos archivos
    simulateUpload("cabify");
    setTimeout(() => simulateUpload("taxisLibres"), 300);
  };

  // Función para reiniciar el proceso
  const handleReset = () => {
    setCabifyFile(null);
    setTaxisLibresFile(null);
    setUploadProgress({ cabify: 0, taxisLibres: 0 });
    setUploadStatus(null);
    setIsUploading(false);
  };

  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8 position-relative">
        {/* Elementos decorativos */}
        <div className="animated-shapes">
          <div className="shape-circle"></div>
          <div className="shape-square"></div>
          <div className="shape-triangle"></div>
          <div className="shape-dots"></div>
        </div>

        <Container fluid>
          <div className="header-body">
            <Row className="align-items-center py-4">
              <Col lg="8" className="position-relative">
                <div className="position-relative">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="mr-3 bg-white rounded-circle p-2 d-flex align-items-center justify-content-center shadow-lg"
                      style={{ width: "48px", height: "48px" }}
                    >
                      <i
                        className="fas fa-cloud-upload-alt text-primary"
                        style={{ fontSize: "24px" }}
                      ></i>
                    </div>
                    <h1
                      className="display-3 text-white mb-0 font-weight-bold"
                      style={{
                        letterSpacing: "-1px",
                        textShadow: "0 2px 6px rgba(0,0,0,0.15)",
                      }}
                    >
                      Cargar Reportes de Viajes
                    </h1>
                  </div>
                  <p
                    className="text-white lead mt-3 mb-4 ml-2 pl-1 border-left border-white"
                    style={{
                      borderLeftWidth: "3px",
                      paddingLeft: "15px",
                      maxWidth: "600px",
                      opacity: 0.9,
                      lineHeight: "1.6",
                    }}
                  >
                    Sube los archivos Excel de Cabify y Taxis Libres para
                    procesar los datos y generar los reportes correspondientes.
                    La plataforma analizará la información y te presentará los
                    resultados de manera clara y detallada.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      {/* Sección de carga de archivos */}
      <Container className="mt-n7">
        <Row>
          <Col lg="12">
            <Card className="shadow border-0 mb-5">
              <CardBody className="px-lg-5 py-lg-5">
                {/* Mensaje de estado */}
                {uploadStatus && (
                  <Alert color={uploadStatus.type} className="mb-4 fade-in">
                    <div className="d-flex align-items-center">
                      <i
                        className={`mr-3 fa fa-${
                          uploadStatus.type === "success"
                            ? "check-circle"
                            : "exclamation-triangle"
                        }`}
                        style={{ fontSize: "24px" }}
                      ></i>
                      <span>{uploadStatus.message}</span>
                    </div>
                  </Alert>
                )}

                <div className="upload-container">
                  <Row>
                    {/* Cabify */}
                    <Col md="6" className="mb-4">
                      <div
                        className={`upload-box ${
                          cabifyFile ? "has-file" : ""
                        } ${isUploading ? "uploading" : ""}`}
                      >
                        <div className="upload-icon">
                          <i className="fas fa-file-excel text-success"></i>
                        </div>
                        <div className="upload-content">
                          <h3 className="upload-title">Archivo Cabify</h3>
                          <p className="text-muted upload-desc">
                            Selecciona o arrastra el archivo Excel de reportes
                            de Cabify
                          </p>

                          {cabifyFile ? (
                            <div className="file-info">
                              <i className="fas fa-file-excel mr-2"></i>
                              <span>{cabifyFile.name}</span>
                              {!isUploading && (
                                <Button
                                  color="link"
                                  className="p-0 ml-2"
                                  onClick={() => setCabifyFile(null)}
                                >
                                  <i className="fas fa-times-circle text-danger"></i>
                                </Button>
                              )}
                            </div>
                          ) : (
                            <div className="custom-file-upload">
                              <input
                                type="file"
                                id="cabify-file"
                                className="file-input"
                                accept=".xlsx, .xls"
                                onChange={(e) => handleFileChange(e, "cabify")}
                                disabled={isUploading}
                              />
                              <label
                                htmlFor="cabify-file"
                                className="file-label"
                              >
                                <i className="fas fa-cloud-upload-alt mr-2"></i>
                                Seleccionar archivo
                              </label>
                            </div>
                          )}

                          {uploadProgress.cabify > 0 && (
                            <div className="upload-progress mt-3">
                              <Progress
                                value={uploadProgress.cabify}
                                color="success"
                                className="progress-xs"
                                animated={isUploading}
                              />
                              <small className="text-muted text-right d-block mt-1">
                                {uploadProgress.cabify}%
                              </small>
                            </div>
                          )}
                        </div>
                      </div>
                    </Col>

                    {/* Taxis Libres */}
                    <Col md="6" className="mb-4">
                      <div
                        className={`upload-box ${
                          taxisLibresFile ? "has-file" : ""
                        } ${isUploading ? "uploading" : ""}`}
                      >
                        <div className="upload-icon">
                          <i className="fas fa-file-excel text-info"></i>
                        </div>
                        <div className="upload-content">
                          <h3 className="upload-title">Archivo Taxis Libres</h3>
                          <p className="text-muted upload-desc">
                            Selecciona o arrastra el archivo Excel de reportes
                            de Taxis Libres
                          </p>

                          {taxisLibresFile ? (
                            <div className="file-info">
                              <i className="fas fa-file-excel mr-2"></i>
                              <span>{taxisLibresFile.name}</span>
                              {!isUploading && (
                                <Button
                                  color="link"
                                  className="p-0 ml-2"
                                  onClick={() => setTaxisLibresFile(null)}
                                >
                                  <i className="fas fa-times-circle text-danger"></i>
                                </Button>
                              )}
                            </div>
                          ) : (
                            <div className="custom-file-upload">
                              <input
                                type="file"
                                id="taxis-file"
                                className="file-input"
                                accept=".xlsx, .xls"
                                onChange={(e) =>
                                  handleFileChange(e, "taxisLibres")
                                }
                                disabled={isUploading}
                              />
                              <label
                                htmlFor="taxis-file"
                                className="file-label"
                              >
                                <i className="fas fa-cloud-upload-alt mr-2"></i>
                                Seleccionar archivo
                              </label>
                            </div>
                          )}

                          {uploadProgress.taxisLibres > 0 && (
                            <div className="upload-progress mt-3">
                              <Progress
                                value={uploadProgress.taxisLibres}
                                color="info"
                                className="progress-xs"
                                animated={isUploading}
                              />
                              <small className="text-muted text-right d-block mt-1">
                                {uploadProgress.taxisLibres}%
                              </small>
                            </div>
                          )}
                        </div>
                      </div>
                    </Col>
                  </Row>

                  {/* Botones de acción */}
                  <Row className="mt-4">
                    <Col md="12" className="text-center">
                      <div className="action-buttons">
                        <Button
                          color="btn btn-outline-primary"
                          className="btn-icon btn-3 shadow-lg"
                          type="button"
                          disabled={
                            isUploading || (!cabifyFile && !taxisLibresFile)
                          }
                          onClick={handleUpload}
                        >
                          <span className="btn-inner--icon">
                            {isUploading ? (
                              <i className="fas fa-spinner fa-spin"></i>
                            ) : (
                              <i className="fas fa-cloud-upload-alt"></i>
                            )}
                          </span>
                          <span className="btn-inner--text ml-2">
                            {isUploading ? "Procesando..." : "Cargar archivos"}
                          </span>
                        </Button>

                        <Button
                          color="secondary"
                          className="btn-icon ml-3"
                          type="button"
                          onClick={handleReset}
                          disabled={
                            isUploading && !cabifyFile && !taxisLibresFile
                          }
                        >
                          <span className="btn-inner--icon">
                            <i className="fas fa-redo-alt"></i>
                          </span>
                          <span className="btn-inner--text ml-2">
                            Reiniciar
                          </span>
                        </Button>
                      </div>
                    </Col>
                  </Row>

                  {/* Información adicional y ayuda */}
                  {!uploadStatus?.type && (
                    <Row className="mt-5">
                      <Col md="12">
                        <div className="info-container p-3 bg-light rounded">
                          <h5 className="mb-3">
                            <i className="fas fa-info-circle text-primary mr-2"></i>
                            Información importante
                          </h5>
                          <ul className="file-requirements mb-0">
                            <li>
                              Los archivos deben estar en formato Excel (.xlsx o
                              .xls)
                            </li>
                            <li>
                              Verifique que ambos archivos contengan la
                              información correcta
                            </li>
                            <li>
                              El tiempo de procesamiento depende del tamaño de
                              los archivos
                            </li>
                            <li>
                              Una vez procesados, podrá ver los resultados en la
                              sección de reportes
                            </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  )}
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CargarReportes;
