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

async function getNumero(micro) {
  //let r = await axios.get("http://" + url + ":" + port);
  let r = fetch("http://127.0.0.1:32470/" + micro);
  // fetchRes is the promise to resolve
  // it by using.then() method
  r.then((res) => res.json()).then((d) => {
    console.log(d);
  });

  return r.data;
}

function FeedRandoms() {
  const [numero, setNumero] = useState(0);
  let indice = Math.floor(Math.random() * requests.length);
  let microservicio = requests[indice];
  let microservice = microservicio.micro;

  const estilo = {
    color: microservicio.color,
  };

  console.log(indice);
  useInterval(() => {
    getNumero(microservice).then((response) => {
      setNumero(response);
    });
  }, 1000);

  return <div style={estilo}>{numero}</div>;
}

export default FeedRandoms;
