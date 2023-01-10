import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../hooks";
import data from "../localData/db.json";
import { createFormData } from "../service";
import { SCHomePageForm } from "../styled-components";
import { validationForm } from "../utils";
import HomePageInput from "./HomePageInput";
import Loading from "./Loading";
import Snackbar from "./Snackbar";

let initialForm = {
  full_name: "",
  email: "",
  birth_date: "",
  country_of_origin: "",
  terms_and_conditions: false,
};

const HomePageForm = () => {
  const { form, errors, handleChange, handleBlur, resetForm } = useForm(
    initialForm,
    validationForm
  );

  const [submitBool, setSubmitBool] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await createFormData(form);
    setSubmitBool(true);
    setLoading(false);
    resetForm();
  };
  return (
    <SCHomePageForm onSubmit={handleSubmit}>
      {loading && <Loading />}
      {data.items.map((input, index) => (
        <HomePageInput
          key={index}
          {...input}
          errors={errors}
          handleChange={handleChange}
          handleBlur={handleBlur}
          form={form}
        />
      ))}
      {submitBool && (
        <Snackbar message="Formulario enviado con exito!">
          <Link className="router-link" to="/info">
            Click para ver datos
          </Link>
        </Snackbar>
      )}
    </SCHomePageForm>
  );
};

export default HomePageForm;
