import React from "react";
import { useState, useEffect } from "react";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import Alert from "../components/Alert";
import { useAppContext } from "../context/appContext";

const initialState = {
  name: "",
  email: "",
  password: "",
  showAlert: true,
  isMember: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const { isLoading, showAlert, displayAlert } = useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    console.log('xxxx')
    e.preventDefault();
    console.log('xxxx')
    const { name, email, password, isMember } = values;
    if (!email || !password )  {
      displayAlert();
      return
    }
    
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>

         <Alert />
        
        {/*  email*/}
        <FormRow
          type="text"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/*  pass*/}
        <FormRow
           type='password'
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" onClick={onSubmit}>
          Submit
        </button>
        
      </form>
    </Wrapper>
  );
};

export default Register;
