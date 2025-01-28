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
      <table>
        <thead>
          <tr>
            <th>Név</th>
            <th>ID</th>
            <th>Leírás</th>
            <th>Ár (Ft)</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((data) => (
            <tr key={data.id}>
              <td>{data.nev}</td>
              <td>{data.id}</td>
              <td>{data.leiras}</td>
              <td>{data.ar}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Termekek;
