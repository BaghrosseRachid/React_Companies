import React, { Fragment, useEffect, useState } from "react";
import EntrepriseItem from "./EntrepriseItem";
import Pagination from "react-js-pagination";
import styled from "styled-components";
import { getToken, getCompanies } from "../actions/action";

const CustumButton = styled.button`
  height: 40px;
  width: 150px;
  font-size: 20;
  font-weight: bold;
`;
const Entreprise = () => {
  const [entreprises, setEntreprises] = useState([]);
  const [activeButton, setActiveButton] = useState(0);
  const [pagination, setPagination] = useState(1);
  const [bounds, setBounds] = useState([0, 9]);

  const handleChange = (pageNumber) => {
    setPagination(pageNumber);
    setBounds([(pageNumber - 1) * 10, pageNumber * 10 - 1]);
    window.scrollTo(0, 0);
  };

  useEffect(() => {}, [entreprises,activeButton]);

  const showParis = () => {
    getToken();
    getCompanies(48.856614, 2.3522219, 10, 75120, setEntreprises);
    setActiveButton(1);
  };
  const showMars = () => {
    getToken();
    getCompanies(43.296482, 5.36978, 10, 13206, setEntreprises);
    setActiveButton(2);
  };
  //fonction permet de récupérer la liste des entreprises et  faire changer state

  return (
    <Fragment>
      <div
        className="container"
        style={{ margin: "0 auto", textAlign: "center" }}
      >
        <h1 className="text-primary x-large">liste des entreprises</h1>
        <div>
          <CustumButton
            className={
              activeButton === 1
                ? "btn btn-primary m-1 "
                : "btn btn-light   m-1"
            }
            onClick={showParis}
          >
            Paris
          </CustumButton>
          <CustumButton
            className={
              activeButton === 2
                ? "btn btn-primary  m-1 "
                : "btn btn-light  m-1"
            }
            onClick={showMars}
          >
            Marseille
          </CustumButton>
        </div>
        <div className=" bg-dark row p-1 m-1">
          {entreprises.length > 0 ? (
            entreprises
              .slice(bounds[0], bounds[1])
              .map((entreprise) => (
                <EntrepriseItem
                  key={entreprise.siret}
                  entreprise={entreprise}
                />
              ))
          ) : (
            <h4> Veuillez choisir une ville</h4>
          )}
        </div>
        <Pagination
          activePage={pagination}
          totalItemsCount={entreprises.length > 0 ? entreprises.length : 10}
          hideDisabled={entreprises.length > 0 ? false : true}
          itemsCountPerPage={10}
          pageRangeDisplayed={entreprises.length > 0 ? 0 : 7}
          onChange={handleChange}
        />
      </div>
    </Fragment>
  );
};

export default Entreprise;
