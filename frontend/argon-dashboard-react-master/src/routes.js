import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
// import Settings from "views/examples/Settings.js";

import Index from "views/Index.js";
import RegistrarVia from "views/examples/RegistrarVia.js";
import Historial from "views/examples/Historial";
import CargarReportes from "views/examples/CargarReportes";
import Reportes from "views/examples/Reportes";
var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet text-blue",
  //   component: <Icons />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: <Maps />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: <Profile />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: <Tables />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/settings",
  //   name: "Settings",
  //   icon: "ni ni-settings-gear-65 text-info",
  //   component: <Settings />,
  //   layout: "/admin",

  // },
  {
    path: "/RegistrarVia",
    name: "Registro Viaje",
    icon: "ni ni-map-big text-primary",
    // component: Settings,
    component: <RegistrarVia/>,
    layout: "/admin",
  },
  {
    path: "/Historial",
    name: "Historial Viaje",
    icon: "ni ni-calendar-grid-58 text-warning",
    component: <Historial />,
    layout: "/admin",
  },
  {
    path: "/CargarReportes",
    name: "Cargar Reportes",
    icon: "ni ni-cloud-upload-96 text-success",
    component: <CargarReportes />,
    layout: "/admin",
  },
  {
    path: "/Reportes",
    name: "Reportes",
    icon: "ni ni-chart-bar-32 text-info",
    component: <Reportes />,
    layout: "/admin",
  }


  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "ni ni-key-25 text-info",
  //   component: <Login />,
  //   layout: "/auth",
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: <Register />,
  //   layout: "/auth",
  // },
];

export default routes ;

