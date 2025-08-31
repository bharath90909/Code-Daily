import React, { useState } from "react";

function FormValidation() {
  const [input, setInput] = useState({
    name: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [allowSubmission, setAllowSubmission] = useState();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
    const error = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const validateField = (name, value) => {
    if (!value.trim() && name === "name") {
      return "Name is Required";
    } else if (value.trim().length < 6 && name === "password") {
      return "Password must have 6 chars";
    }
    return "";
  };

  function validateForm() {
    const newErrors = {};
    for (const [name, value] of Object.entries(input)) {
      newErrors[name] = validateField(name, value);
    }
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  }

  const handleSubmit = () => {
    setAllowSubmission(validateForm());
  };

  return (
    <div>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={handleInputChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>Password</label>
        <input
          type="text"
          name="password"
          value={input.password}
          onChange={handleInputChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <button onClick={handleSubmit}>Submit</button>
      {allowSubmission === false && <p>Submission Not Allowed</p>}
    </div>
  );
}

export default FormValidation;
