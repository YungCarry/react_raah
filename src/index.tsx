import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Termek from "./pages/Termek";
import Termekek from "./pages/Termekek";
import TermekPost from "./pages/TermekPost";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<React.StrictMode>
<BrowserRouter>
<Routes>
  <Route path="termek/:id" element={<Termek />} />
  <Route path="termekek" element={<Termekek/>}></Route>
  <Route path="*" element={<h1>404, Not Found</h1>}></Route>
  <Route path="termekpost" element={<TermekPost/>}></Route>

</Routes>
</BrowserRouter>


</React.StrictMode>);


reportWebVitals();
