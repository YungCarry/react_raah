import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import apiClient from "../apiClient/apiClient";
import { Product } from "../types/Product";

const Termek = () => {
  const { id } = useParams();
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

  const deleteProduct = () => {
    apiClient
      .delete(`/termekek/${id}`)
      .then((response) => {
        switch (response.status) {
          case 204:
            console.log("User deleted successfully");
            break;
          case 400:
            console.error("Bad request");
            break;
          default:
            console.error("An error occurred");
            window.location.reload();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [ar, setAr] = useState(0);
  const [nev, setNev] = useState(data?.nev);
  const [leiras, setLeiras] = useState(data?.leiras);
  const [kategoriaId, setKategoriaId] = useState(data?.kategoriaId);
  const [keszlet, setKeszlet] = useState(data?.keszlet);

  const product = {
    ar: ar,
    nev: nev,
    leiras: leiras,
    kategoriaId: kategoriaId,
    keszlet: keszlet,
    kepUrl:
      "https://tenor.com/hu/view/joker-batman-the-joker-why-so-serious-gif-14263650074740919861",
  };

  const putProduct = () => {
    apiClient
      .put(`/termekek/${id}`, product)
      .then((response) => {
        switch (response.status) {
          case 200:
            alert("Sikeres hozzáadás!");
            break;
          case 400:
            alert("Bad Request");
            break;
          default:
            alert("Error");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    window.location.reload();
  };

  return (
    <>
      <h1>Termék</h1>
      <table>
        <thead>
          <tr>
            <th>Név</th>
            <th>Leírás</th>
            <th>Ár (Ft)</th>
            <th>Törlés</th>
          </tr>
        </thead>
        <tbody>
          <tr key={data?.id}>
            <td>{data?.nev}</td>
            <td>{data?.leiras}</td>
            <td>{data?.ar}</td>
            <td>
              <button onClick={deleteProduct}>Törlés</button>
            </td>
          </tr>
        </tbody>
      </table>

      <>
        <h1>Termkék modosítása</h1>
        <input
          type="text"
          placeholder="ar:"
          onChange={(e) => setAr(Number(e.target.value))}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="nev:"
          onChange={(e) => setNev(String(e.target.value))}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="leiras:"
          onChange={(e) => setLeiras(String(e.target.value))}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="kategoriaId:"
          onChange={(e) => setKategoriaId(Number(e.target.value))}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="keszlet:"
          onChange={(e) => setKeszlet(Number(e.target.value))}
        />{" "}
        <br />
        <button onClick={putProduct}>Modosítás</button>
      </>
    </>
  );
};

export default Termek;
