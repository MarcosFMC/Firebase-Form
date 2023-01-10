import { useState } from "react";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialForm);

  const handleChange = (e) => {

    const { name, value } = e.target;

      setForm({
        ...form,
        [name]: value,
      });

      if(e.target.type == "checkbox"){
        setForm({
          ...form,
          [name]: e.target.checked,
        });
      }
  };
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };
  const resetForm =(e)=>{
    setForm(initialForm);
  }

  return {
    form,
    errors,
    handleChange,
    handleBlur,
    resetForm
  };
};
