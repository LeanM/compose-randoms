// El objetivo es reemplazar esto por microservicios que oculten la fuente de datos.
const requests = [
  {
    url: "num-py.default.svc.cluster.local",
    port: 3003,
    color: "pink",
  },
  {
    url: "num-php.default.svc.cluster.local",
    port: 3002,
    color: "cyan",
  },
  {
    url: "num-ex.default.svc.cluster.local",
    port: 3001,
    color: "yellow",
  },
];

export default requests;
