import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import devlink from "../asset/devlink.svg";
import email from "../asset/email.svg";
import password from "../asset/password.svg";

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState<string>('');
  const [enteredPassword, setEnteredPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredEmail(event.target.value);
  }
  const passwordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredPassword(event.target.value);
  }
  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let isValid = true;

    if(enteredEmail.trim() === '') {
      setEmailError("Can't be empty");
      isValid = false;    
    }
    if(enteredPassword.trim() === ''){
      setPasswordError('Please check again');
      isValid = false;    
    } 
    if(!isValid) return; 
    
    setEmailError('');
    setPasswordError('');
    setEnteredEmail(''); 
    setEnteredPassword(''); 
    window.location.href = '/homePage';
  };


  return (
    <>
      <div className="pt-[2rem] md:pt-[11rem] lg:pt-[4rem]  ">
        <div className="flex flex-row gap-2 ml-5 lg:ml-0 md:justify-center lg:justify-center ">
            <Image src={devlink} alt="devlink" width={500} height={300} className="mb-[2.5rem] w-9" />
            <h1 className="font-bold text-3xl md:text-center lg:text-center mb-[0.6rem] 
            md:mb-[2rem] lg:mb-[1.8rem] ">devlinks</h1>
        </div>

        <div className="bg-white md:w-[60%] lg:w-[50%] xl:w-[33%] m-auto p-8 md:rounded-xl lg:rounded-xl text-sm md:text-base ">
          <div className="mb-9">
            <h1 className="font-bold text-2xl mb-4">Login</h1>
            <p className="text-base text-[#737373]">Add your details below to get back into the app</p>
          </div>

          <form onSubmit={formSubmitHandler} className="flex flex-col text-[#737373] gap-2 text-xs ">
            <>
              <label htmlFor="email" className={emailError ? 'text-red-500 ' : 'text-[#333333]' } >Email address</label>
              <div className={`flex flex-row gap-3 w-[100%] py-3.5 lg:py-3.5 rounded-lg text-sm pl-2
                ${emailError ? 'border-[1px] border-red-500 ' : 'border-[1px] border-[#D9D9D9] '} md:text-sm lg:text-sm 
                focus-within:shadow-[0_0_20px_rgba(99,59,255,0.4)] focus-within:border-[#633BFF]` }>
                <Image src={email} alt="mail" width={20} height={20} className="ml-3" />
                <input type="email" id="email" name="email" placeholder="e.g alex@email.com"  
                value={enteredEmail} onChange={emailChangeHandler} 
                className= {`focus:outline-none bg-transparent ${emailError ? ' w-[48%] md:w-[56.5%] lg:w-[60%] xl:w-[53%]' : 'w-[90%]'}`} />
                {emailError && <p className="text-red-500 hidden md:block lg:block xl:block text-sm xl:text-xs">{emailError}</p>}
              </div>
            </>
            
            <>
              <label htmlFor="password" className={`mt-5 ${passwordError ? 'text-red-500' : 'text-[#333333]'}`} >Password</label>
              <div className={`flex flex-row w-[100%] py-3.5 lg:py-3.5 gap-3 rounded-lg text-sm pl-2 md:text-sm lg:text-sm focus-within:border-[#633BFF] 
                  ${ passwordError ? 'border-[1px] border-red-500' : 'border-[1px] border-[#D9D9D9]'}
                  focus-within:shadow-[0_0_20px_rgba(99,59,255,0.4)]`}>
                  <Image src={password} alt="password" width={20} height={20} className="ml-3" />
                  <input type="password" id="password" name="password"
                    className={` focus:outline-none ${passwordError ? 'w-[41%] md:w-[49%] lg:w-[53%] xl:w-[46%] ' : 'w-[100%]' }`} 
                    onChange={passwordChangeHandler} value={enteredPassword} placeholder="Enter your password"  />
                    {passwordError && <p className="text-red-500 hidden md:block lg:block xl:block text-sm xl:text-xs">{passwordError}</p>}
              </div>
            </>
              
            <>
              <button className="bg-[#633BFF] active:bg-[#BEADFF] text-white my-4 py-3.5 w-[100%] rounded-lg ">Login</button>
            </>
          </form>
            <p className="text-center">Do not have an account? <Link href='/createAccount' 
            className="text-[#633BFF] ">Create account</Link></p>
        </div>
      </div>
    </>
  );
};

export default Login;