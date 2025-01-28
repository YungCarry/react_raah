import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import apiClient from "../apiClient/apiClient";
import { Product } from "../types/Product";

const Termek = () => {
  const {id} = useParams();
  const [data, setData] = useState<Product>();

  useEffect(() => {
    apiClient
      .get(`/termekek/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <h1>Termék</h1>
      <ul>
        
          <li key={data?.id}>
            <h2>{data?.nev}</h2>
            <p>{data?.leiras}</p>
            <p>{data?.ar} Ft</p>
          </li>
    
      </ul>
    </>
  );
};

export default Termek;
