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

async function getNumero(url) {
  let r = await axios.get(url);
  return r.data;
}

function FeedRandoms() {
  const [numero, setNumero] = useState(0);
  let indice = Math.floor(Math.random() * requests.length);
  let microservicio = requests[indice];
  let url = microservicio.url;
  const estilo = {
    color: microservicio.color,
  };

  console.log(indice);
  useInterval(() => {
    getNumero(url).then((response) => {
      setNumero(response);
    });
  }, 1000);

  return <div style={estilo}>{numero}</div>;
}

export default FeedRandoms;
