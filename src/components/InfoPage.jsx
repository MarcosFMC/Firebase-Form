import React, { useEffect, useState } from "react";
import { getAllFormData } from "../service";
import { SCInfoPage } from "../styled-components";
import InfoPageCard from "./InfoPageCard";
import Loading from "./Loading";

const InfoPage = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const data = await getAllFormData();
      setData([...data], data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SCInfoPage>
      <h2>Datos recibidos del formulario</h2>
      {data.length == 0 ? <Loading /> : null}
      {data.map((form, index) => (
        <InfoPageCard key={index} {...form} />
      ))}
    </SCInfoPage>
  );
};

export default InfoPage;
