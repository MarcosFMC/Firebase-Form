import React from "react";
import { SCHomePageInput } from "../styled-components";

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
            <label>{label}</label>
            <select
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
            </select>
            {errors[name] && <span>{errors[name]}</span>}
          </>
        );
      case "checkbox":
        return (
          <>
            <label>{label}</label>
            <input
              required={required}
              type={type}
              name={name}
              onChange={handleChange}
              onBlur={handleBlur}
              checked={form[name]}
            ></input>
            {errors[name] && <span>{errors[name]}</span>}
          </>
        );
      case "submit":
        return (
          <>
            <input type={type} value={label}></input>
          </>
        );
      default:
        return (
          <>
            <label>{label}</label>
            <input
              required={required}
              type={type}
              name={name}
              onChange={handleChange}
              onBlur={handleBlur}
              value={form[name]}
            ></input>
            {errors[name] && <span>{errors[name]}</span>}
          </>
        );
    }
  };

  return <SCHomePageInput>{renderInputs()}</SCHomePageInput>;
};

export default HomePageInput;
