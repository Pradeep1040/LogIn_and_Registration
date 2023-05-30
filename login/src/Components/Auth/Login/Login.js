import React from 'react'
import {useForm} from "react-hook-form";

import './Login.css'
import { Link } from 'react-router-dom';

function Login() {

//  react hook form start here 

const {register,formState:{errors}, handleSubmit,} = useForm();
//for seeing the data in the console bar
const onSubmit = (data) => console.log(data);

//  react hook form end here 





  return (
    <div >
      <div className='login template d-flex  justify-content-center align-items-center vh-100 background: #ffffff;'>
        <div className='form_container p-5 bg-white  rounded'>
        <form   onSubmit={handleSubmit(onSubmit)}>
            <h3 className='text-center mb-5'><b>Login</b></h3>
            <div className='mb-4'>
                <label htmlFor='email' className='lables'>Email</label> <br/>
                <input type="email" placeholder='Enter Email' className='form-control' {...register("email",{required:true,pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})} />
              <small>
              <error>
               {errors.email?.type === "required" && "Email is required"}
               {errors.email?.type === "pattern" && "Entered email is wrong format"}

              </error>
              </small>
            </div>

            <div className='mb-5'>
                <label htmlFor='password'>Password</label> <br/>
                <input type="password" placeholder='Enter Password' className='form-control' {...register("password",{required:true,pattern:/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{5,8}$/})} />
           
                <small>
                <error>
               {errors.password?.type === "required" && "password is required"}
               {errors.password?.type === "pattern" && "Enter password 1 lowercase,1 Uppercase,Number,Sysmbol"}

              </error>
                </small>
           
           
           
            </div>


            <div className='d-grid'>
              
              <button className='btn btn-dark'>Sign In</button>

               </div>
               

               <small>
                Don't have an account ? <Link to="/signup" className='ms-2'>Sign Up</Link>
               </small>
        </form>
        </div>


      </div>
    </div>
  )
}

export default Login



