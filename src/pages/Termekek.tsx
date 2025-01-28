import { useEffect, useState } from "react";
import apiClient from "../apiClient/apiClient";
import { Product } from "../types/Product";
const Termekek = () => {
  const [data, setData] = useState<Product[]>([]);
  useEffect(() => {
    apiClient
    .get("/termekek")
    .then((response) => {
        setData(response.data);
    })
    .catch((error) => {
        console.error(error);
    });
}, []);
  return (
    <>
        <h1>Termékek</h1>
        <ul>
            {data?.map((data) => (
            <li key={data.id}>
                <h2>{data.nev}</h2>
                <p>{data.leiras}</p>
                <p>{data.ar} Ft</p>
            </li>
            ))}
        </ul>
    </>
  );
};

export default Termekek;
