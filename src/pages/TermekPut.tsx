import { useState } from "react"
import apiClient from "../apiClient/apiClient";

const TermekPut = () => {
    const [ar, setAr] = useState(0);
    const [nev, setNev] = useState("");
    const [leiras, setLeiras] = useState("");
    const [kategoriaId, setKategoriaId] = useState(0);
    
    const product = {
        ar: ar,
        nev: nev,
        leiras: leiras,
        kategoriaId: kategoriaId
    } 

    const submit = () => {
        apiClient.post(`/termekek`, product).then(response => {
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
        }).catch(error => { console.error(error) });
    }

 

    
    return (
        <>
        <h1>Termkék hozzáadása</h1>
        <input type="text" placeholder="ar:" onChange={(e) => setAr(Number(e.target.value))} /> <br />
        <input type="text" placeholder="nev:" onChange={(e) => setNev(String(e.target.value))} /> <br />
        <input type="text" placeholder="leiras:" onChange={(e) => setLeiras(String(e.target.value))}/> <br />
        <button onClick={submit}>Add hozzá!</button>

        
        </>
    )
}

export default TermekPut;