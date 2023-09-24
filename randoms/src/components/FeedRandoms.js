import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import requests from "../requests";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const gateway_endpoint = process.env.REACT_APP_GATEWAY_ENDPOINT;
const gateway_port = process.env.REACT_APP_GATEWAY_PORT;

function FeedRandoms() {
  const [numero, setNumero] = useState(0);
  const [clusterIp, setClusterIp] = useState("");
  let indice = Math.floor(Math.random() * requests.length);
  let microservicio = requests[indice];
  let microservice = microservicio.micro;

  const estilo = {
    color: microservicio.color,
  };

  const getClusterIp = async () => {
    let r = await axios.get("http://" + gateway_endpoint + "/");

    setClusterIp(r.data);
  };

  useEffect(() => {
    console.log(gateway_endpoint);
    console.log(gateway_port);
  }, []);

  useEffect(() => {
    console.log(clusterIp);
  }, [clusterIp]);

  async function getNumero(micro) {
    let r = await axios.get(
      "http://" + gateway_endpoint + ":" + gateway_port + "/" + micro
    );
    //let r = fetch("http://192.168.49.2:32470/" + micro);
    // fetchRes is the promise to resolve
    // it by using.then() method
    //r.then((res) => res.json()).then((d) => {
    //  console.log(d);
    //});

    return r.data;
  }

  console.log(indice);
  useInterval(() => {
    getNumero(microservice).then((response) => {
      setNumero(response);
    });
  }, 1000);

  return <div style={estilo}>{numero}</div>;
}

export default FeedRandoms;
