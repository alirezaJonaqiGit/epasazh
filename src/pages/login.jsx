import '../style/login.css'

import { useState, useContext, useEffect } from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        window.location.replace('/')
    };


  return (
    <>
        <div className='loginWrapper px-4 wx-576 mx-auto'>
            <header>
                <a href='/' className='my-2 d-block' style={{color: '#fff'}}><ArrowForwardIcon /></a>
                <div>
                    <img className="d-block login_logoImg" src="https://epasazh.com/_nuxt/img/pasazh-auth-logo.c4e6d4d.png" alt='epasazh logo' />
                </div>
            </header>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <label className='loginform_label'>
                    <input className="loginform_input" type="tel" pattern="^(0098|98|0)?9\d{9}$"  placeholder='تلفن همراه (09*********)'  {...register("exampleRequired", { required: true })} />
                    {errors.exampleRequired && <span className='input_errMsg'>تلفن همراه اجباری است!</span>}
                </label>

                <input type="submit" value="ادامه" className='loginform_submit' />
            </form>
        </div>
    </>
  );
};

export default Login;
