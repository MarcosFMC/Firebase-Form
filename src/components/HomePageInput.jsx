import React from "react";
import {
  HomePageCheckboxInput,
  HomePageLabel,
  HomePageCustomInput,
  HomePageSelect,
  HomePageSubmitInput,
  HomePageValidationError,
} from "../styled-components/";

const HomePageInput = ({
  type,
  name,
  label,
  required,
  options,
  handleChange,
  handleBlur,
  errors,
  form,
}) => {
  const renderInputs = () => {
    switch (type) {
      case "select":
        return (
          <>
            <HomePageLabel>{label}</HomePageLabel>
            <HomePageSelect
              type={type}
              name={name}
              onChange={handleChange}
              onBlur={handleBlur}
              value={form[name]}
            >
              <option>-</option>
              {options.map((option, index) => (
                <option
                  key={index}
                  label={option.label}
                  value={option.value}
                  required={required}
                />
              ))}
            </HomePageSelect>
            {errors[name] && (
              <HomePageValidationError>{errors[name]}</HomePageValidationError>
            )}
          </>
        );
      case "checkbox":
        return (
          <>
            <HomePageLabel>{label}</HomePageLabel>
            <HomePageCheckboxInput
              required={required}
              type={type}
              name={name}
              onChange={handleChange}
              onBlur={handleBlur}
              checked={form[name]}
            ></HomePageCheckboxInput>
            {errors[name] && (
              <HomePageValidationError>{errors[name]}</HomePageValidationError>
            )}
          </>
        );
      case "submit":
        return (
          <HomePageSubmitInput type={type} value={label}></HomePageSubmitInput>
        );
      default:
        return (
          <>
            <HomePageLabel>{label}</HomePageLabel>
            <HomePageCustomInput
              required={required}
              type={type}
              name={name}
              onChange={handleChange}
              onBlur={handleBlur}
              value={form[name]}
            ></HomePageCustomInput>
            {errors[name] && (
              <HomePageValidationError>{errors[name]}</HomePageValidationError>
            )}
          </>
        );
    }
  };

  return <>{renderInputs()}</>;
};

export default HomePageInput;
