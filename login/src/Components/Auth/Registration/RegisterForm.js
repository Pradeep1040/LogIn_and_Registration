import React from 'react'
import './Registration.css'
import {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';

function RegisterForm() {

  // reacthook form start here
  const {register,formState:{errors}, handleSubmit,} = useForm();
 //for seeing the data in the console bar
   const onSubmit = (data) => console.log(data);
   // reacthook form end here





  return (
    <div>
      <div className='signup template d-flex  justify-content-center align-items-center vh-80 background: #ffffff;'>
        <div className='form_container p-5  bg-white rounded'>
        <form  onSubmit={handleSubmit(onSubmit)}>
            <h3 className='text-center mt-0 mb-4'><b>Sign Up</b></h3>
            <div className='mb-3'>
                <label htmlFor='name'>Name</label> <br/>
                <input type="text" placeholder='Abcd' className='form-control' {...register("name",{required:true,pattern:/[A-Za-z]/})}/>
           <small>
           <error>
            {errors.name?.type === "required" && "name is required"}
            {errors.pattern?.type === "required" && "Enter the valid name"}
           </error>
           </small>
           
           
            </div>

            <div className='mb-3'>
                <label htmlFor='name'>Email</label> <br/>
                <input type="text" placeholder='Abcd' className='form-control' {...register("email",{required:true,pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})} />
                <small>
              <error>
               {errors.email?.type === "required" && "Email is required"}
               {errors.email?.type === "pattern" && "Entered email is wrong format"}

              </error>
              </small>
           
           
            </div>

            <div className='mb-3'>
                <label htmlFor='password'>Password</label> <br/>
                <input type="password" placeholder='********' className='form-control' {...register("password",{required:true,pattern:/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{5,8}$/})} />
           
                <small>
                <error>
               {errors.password?.type === "required" && "password is required"}
               {errors.password?.type === "pattern" && "Enter password 1 lowercase,1 Uppercase,Number,Sysmbol"}

              </error>
                </small>
           
            </div>

            <div className='mb-3'>
                <label htmlFor='confirmpassword'>Confirm Password</label> <br/>
                <input type="password" placeholder='********' className='form-control' {...register("confirm_password",{required:true,pattern:/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{5,8}$/})}/>
            
                <small>
                <error>
               {errors.confirm_password?.type === "required" && "confirm-password is required"}
               {errors.confirm_password?.type === "pattern" && "Enter password 1 lowercase,1 Uppercase,Number,Sysmbol"}

              </error>
                </small>
            
            
            </div>

            <div className='mb-3'>
                <label htmlFor='dob'>Date of birth</label> <br/>
                <input type="text" placeholder='11/2/1999' className='form-control'  {...register("dob",{required:true,pattern:/^([0-2^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/})} />
            
                <small>
                <error>
               {errors.dob?.type === "required" && "Dob is required"}
               {errors.dob?.type === "pattern" && "Enter valid dob"}

              </error>
                </small>
            
            
            
            </div>

            <div className='mb-4 '>
                <label htmlFor='dob'>Phone</label> <br/>
                <input type="text" placeholder='1234567890' className='form-control'{...register("phone",{required: true,minLength:10,maxLength:12})} />
           <small>
                <error>

               {errors.phone?.type === "required" && "phoneNo is required"}
               {errors.phone?.type === "minLength" && "Entered number is less than 10 digits"}
               {errors.phone?.type === "maxLength" && "Entered number is more than 12 digits"}

              </error>
              </small>
           
           
            </div>


            <div className='d-grid'>
              
              <button className='btn btn-dark'>Sign Up</button>

               </div>

               <small>
                Already have an account ? <Link to="/" className='ms-2'>Sign In</Link>
               </small>
        </form>
        </div>


      </div>
    </div>
  )
}

export default RegisterForm
