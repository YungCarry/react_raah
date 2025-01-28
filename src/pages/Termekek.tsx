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
            <th>Leírás</th>
            <th>Ár (Ft)</th>
            <th>Törlés</th>
            <th>Modósítás</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((data) => (
            <tr key={data.id}>
              <td>{data.nev}</td>
              <td>{data.leiras}</td>
              <td>{data.ar}</td>
              <td>
                <button>Törlés</button>
              </td>
              <td>
                <button>Modósítás</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Termekek;
