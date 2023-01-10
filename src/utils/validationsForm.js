export const validationForm = (form) => {

    const errors = {};

    let regExpEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    let regExpString = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  
    if (!form.full_name.trim()) {
      errors.full_name = "El campo 'Nombre completo' es requerido";
    } else if (!regExpString.test(form.full_name.trim())) {
      errors.full_name = "El campo 'Nombre completo' solo acepta letras";
    }
  
    if (!form.email.trim()) {
      errors.email = "El campo 'Correo electronico' es requerido";
    } else if (!regExpEmail.test(form.email.trim())) {
      errors.email = "El campo 'Correo electronico' requiere un email valido";
    }
  
    if (!form.birth_date.trim()) {
      errors.birth_date = "El campo 'Fecha de nacimiento' es requerido";
    }
  
    if (!form.country_of_origin.trim()) {
      errors.country_of_origin = "El campo 'Pais de origen' es requerido";
    }
  
    if (form.terms_and_conditions == false) {
      errors.terms_and_conditions = "El campo 'Terminos y servicios' es requerido";
    }
  
    return errors;
  };