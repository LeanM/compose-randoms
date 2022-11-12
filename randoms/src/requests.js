// El objetivo es reemplazar esto por microservicios que oculten la fuente de datos.
const requests = [
  {
    url:
      "http://" +
      process.env.REACT_APP_NUMPH_HOST +
      ":" +
      process.env.REACT_APP_NUMPH_PORT,
    color: "pink",
  },
  {
    url:
      "http://" +
      process.env.REACT_APP_NUMPH_HOST +
      ":" +
      process.env.REACT_APP_NUMPH_PORT,
    color: "cyan",
  },
  {
    url:
      "http://" +
      process.env.REACT_APP_NUMEX_HOST +
      ":" +
      process.env.REACT_APP_NUMEX_PORT,
    color: "yellow",
  },
];

export default requests;
