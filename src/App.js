import { Fragment, useEffect } from "react";
import "./App.css";
import Entreprise from "./components/Entreprise";
import { getToken } from "../src/actions/action";

function App() {
  return (
    <Fragment>
      <Entreprise />
    </Fragment>
  );
}

export default App;
