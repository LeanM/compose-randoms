// El objetivo es reemplazar esto por microservicios que oculten la fuente de datos.
const requests = [
  {
    url:
      process.env.REACT_APP_NUMPY_HOST + ":" + process.env.REACT_APP_NUMPY_PORT,
    color: "pink",
  },
  {
    url:
      process.env.REACT_APP_NUMPH_HOST + ":" + process.env.REACT_APP_NUMPH_PORT,
    color: "cyan",
  },
  {
    url:
      process.env.REACT_APP_NUMEX_HOST + ":" + process.env.REACT_APP_NUMEX_PORT,
    color: "yellow",
  },
];

export default requests;
