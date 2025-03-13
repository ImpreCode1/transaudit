import React, { useState, useEffect } from "react";
import { 
  Table, 
  Input, 
  Button, 
  Row, 
  Col, 
  Card, 
  CardHeader, 
  CardBody,
  Pagination, 
  PaginationItem, 
  PaginationLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const TablaPersonalizada = ({ 
  data = [], 
  columnas = [], 
  titulo = "Tabla de datos", 
  itemsPorPagina = 10,
  cargando = false,
  acciones = true
}) => {
  // Estados para manejar la tabla
  const [datosActuales, setDatosActuales] = useState([]);
  const [datosFiltrados, setDatosFiltrados] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [filtro, setFiltro] = useState("");
  const [ordenColumna, setOrdenColumna] = useState(null);
  const [ordenDireccion, setOrdenDireccion] = useState("asc");
  
  // Actualizar datos filtrados cuando cambia el filtro o los datos originales
  useEffect(() => {
    let resultado = [...data];
    
    // Aplicar filtro
    if (filtro !== "") {
      resultado = resultado.filter(item => {
        return Object.keys(item).some(key => {
          return String(item[key]).toLowerCase().includes(filtro.toLowerCase());
        });
      });
    }
    
    // Aplicar ordenamiento
    if (ordenColumna) {
      resultado.sort((a, b) => {
        const valorA = a[ordenColumna];
        const valorB = b[ordenColumna];
        
        if (typeof valorA === 'string' && typeof valorB === 'string') {
          if (ordenDireccion === 'asc') {
            return valorA.localeCompare(valorB);
          } else {
            return valorB.localeCompare(valorA);
          }
        } else {
          if (ordenDireccion === 'asc') {
            return valorA - valorB;
          } else {
            return valorB - valorA;
          }
        }
      });
    }
    
    setDatosFiltrados(resultado);
    setPaginaActual(1);
  }, [data, filtro, ordenColumna, ordenDireccion]);
  
  // Actualizar datos actuales cuando cambia la página o los datos filtrados
  useEffect(() => {
    const indexUltimo = paginaActual * itemsPorPagina;
    const indexPrimero = indexUltimo - itemsPorPagina;
    setDatosActuales(datosFiltrados.slice(indexPrimero, indexUltimo));
  }, [datosFiltrados, paginaActual, itemsPorPagina]);
  
  // Manejar ordenamiento
  const manejarOrden = (columna) => {
    if (ordenColumna === columna) {
      setOrdenDireccion(ordenDireccion === 'asc' ? 'desc' : 'asc');
    } else {
      setOrdenColumna(columna);
      setOrdenDireccion('asc');
    }
  };
  
  // Renderizar ícono de ordenamiento
  const renderIconoOrden = (columna) => {
    if (ordenColumna !== columna) {
      return <i className="fas fa-sort text-muted ml-1"></i>;
    }
    
    return ordenDireccion === 'asc' 
      ? <i className="fas fa-sort-up ml-1"></i> 
      : <i className="fas fa-sort-down ml-1"></i>;
  };
  
  // Calcular número total de páginas
  const totalPaginas = Math.ceil(datosFiltrados.length / itemsPorPagina);
  
  // Manejar cambio de página
  const cambiarPagina = (numeroPagina) => {
    if (numeroPagina > 0 && numeroPagina <= totalPaginas) {
      setPaginaActual(numeroPagina);
    }
  };
  
  // Renderizar los controles de paginación
  const renderPaginacion = () => {
    // Si hay demasiadas páginas, mostrar versión compacta
    if (totalPaginas > 7) {
      const items = [];
      
      // Mostrar primera página
      items.push(
        <PaginationItem key={1} active={paginaActual === 1}>
          <PaginationLink onClick={() => cambiarPagina(1)}>1</PaginationLink>
        </PaginationItem>
      );
      
      // Mostrar puntos suspensivos si estamos lejos del inicio
      if (paginaActual > 3) {
        items.push(
          <PaginationItem key="dots1" disabled>
            <PaginationLink>...</PaginationLink>
          </PaginationItem>
        );
      }
      
      // Páginas alrededor de la actual
      const paginaInicio = Math.max(2, paginaActual - 1);
      const paginaFin = Math.min(totalPaginas - 1, paginaActual + 1);
      
      for (let i = paginaInicio; i <= paginaFin; i++) {
        items.push(
          <PaginationItem key={i} active={paginaActual === i}>
            <PaginationLink onClick={() => cambiarPagina(i)}>{i}</PaginationLink>
          </PaginationItem>
        );
      }
      
      // Mostrar puntos suspensivos si estamos lejos del final
      if (paginaActual < totalPaginas - 2) {
        items.push(
          <PaginationItem key="dots2" disabled>
            <PaginationLink>...</PaginationLink>
          </PaginationItem>
        );
      }
      
      // Mostrar última página
      items.push(
        <PaginationItem key={totalPaginas} active={paginaActual === totalPaginas}>
          <PaginationLink onClick={() => cambiarPagina(totalPaginas)}>
            {totalPaginas}
          </PaginationLink>
        </PaginationItem>
      );
      
      return (
        <Pagination className="d-flex justify-content-center mt-4">
          <PaginationItem disabled={paginaActual === 1}>
            <PaginationLink previous onClick={() => cambiarPagina(paginaActual - 1)} />
          </PaginationItem>
          {items}
          <PaginationItem disabled={paginaActual === totalPaginas}>
            <PaginationLink next onClick={() => cambiarPagina(paginaActual + 1)} />
          </PaginationItem>
        </Pagination>
      );
    } else {
      // Versión estándar para pocas páginas
      const items = [];
      for (let i = 1; i <= totalPaginas; i++) {
        items.push(
          <PaginationItem key={i} active={paginaActual === i}>
            <PaginationLink onClick={() => cambiarPagina(i)}>
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
      
      return (
        <Pagination className="d-flex justify-content-center mt-4">
          <PaginationItem disabled={paginaActual === 1}>
            <PaginationLink previous onClick={() => cambiarPagina(paginaActual - 1)} />
          </PaginationItem>
          {items}
          <PaginationItem disabled={paginaActual === totalPaginas}>
            <PaginationLink next onClick={() => cambiarPagina(paginaActual + 1)} />
          </PaginationItem>
        </Pagination>
      );
    }
  };
  
  // Renderizar selector de items por página
  const renderSelectorItemsPorPagina = () => {
    const opciones = [5, 10, 25, 50, 100];
    
    return (
      <UncontrolledDropdown>
        <DropdownToggle caret color="primary" size="sm">
          {itemsPorPagina} por página
        </DropdownToggle>
        {/* <DropdownMenu>
          {opciones.map(opcion => (
            <DropdownItem key={opcion} onClick={() => setItemsPorPagina(opcion)}>
              {opcion} por página
            </DropdownItem>
          ))}
        </DropdownMenu> */}
      </UncontrolledDropdown>
    );
  };
  
  return (
    <Card className="shadow">
      <CardHeader className="bg-white border-0">
        <Row className="align-items-center">
          <Col xs="12" md="6">
            <h3 className="mb-0">{titulo}</h3>
          </Col>
          <Col xs="12" md="6" className="text-right d-flex justify-content-end align-items-center mt-3 mt-md-0">
            <Input
              type="text"
              placeholder="Buscar..."
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
              className="form-control-sm mr-2"
              style={{ maxWidth: "200px" }}
            />
            {acciones && (
              <Button color="primary" size="sm" className="ml-2">
                <i className="fas fa-download mr-1"></i> Exportar
              </Button>
            )}
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <div className="table-responsive">
          <Table className="align-items-center table-flush">
            <thead className="thead-light">
              <tr>
                {columnas.map((columna, index) => (
                  <th 
                    key={index} 
                    scope="col" 
                    className={columna.key !== 'acciones' ? "cursor-pointer" : ""}
                    onClick={() => columna.key !== 'acciones' && manejarOrden(columna.key)}
                  >
                    {columna.header}
                    {columna.key !== 'acciones' && renderIconoOrden(columna.key)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cargando ? (
                <tr>
                  <td colSpan={columnas.length} className="text-center py-4">
                    <div className="spinner-border text-primary" role="status">
                      <span className="sr-only">Cargando...</span>
                    </div>
                  </td>
                </tr>
              ) : datosActuales.length > 0 ? (
                datosActuales.map((item, index) => (
                  <tr key={index}>
                    {columnas.map((columna, colIndex) => (
                      <td key={colIndex}>
                        {columna.render ? columna.render(item) : item[columna.key]}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={columnas.length} className="text-center py-4">
                    No hay datos disponibles
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
        
        <Row className="mt-4 align-items-center">
          <Col xs="12" md="6" className="mb-3 mb-md-0">
            Mostrando {datosFiltrados.length > 0 ? (paginaActual - 1) * itemsPorPagina + 1 : 0} a {Math.min(paginaActual * itemsPorPagina, datosFiltrados.length)} de {datosFiltrados.length} registros
          </Col>
          <Col xs="12" md="6" className="d-flex justify-content-md-end justify-content-center">
            {renderSelectorItemsPorPagina()}
          </Col>
        </Row>
        
        {totalPaginas > 1 && renderPaginacion()}
      </CardBody>
    </Card>
  );
};

export default TablaPersonalizada;