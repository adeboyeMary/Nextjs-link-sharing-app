import { useState } from "react";
import Link from "next/link"
import Image from "next/image"
import devlink from "../asset/devlink.svg";
import email from "../asset/email.svg";
import password from "../asset/password.svg";

export default function CreateAccount () {
  const [enteredEmail, setEnteredEmail] = useState<string>('');
  const [enteredPassword, setEnteredPassword] = useState<string>('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>('');

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredEmail(event.target.value);
  }
  const passwordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredPassword(event.target.value);
  }
  const confirmPasswordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredConfirmPassword(event.target.value);
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
    if(enteredConfirmPassword.trim() === ''){
      setConfirmPasswordError('Please check again');
      isValid = false;
    }
    if(!isValid) return; 
    
    setEnteredEmail(''); 
    setEnteredPassword(''); 
    window.location.href = '/homePage';
  };

    return (
    <main className="bg-white h-[100vh] md:bg-[#FAFAFA] lg:bg-[#FAFAFA] text-base text-[#333333]">
      <div className="pt-[2rem] md:pt-[9rem] lg:pt-[2rem]  ">
        <div className="flex flex-row gap-2 ml-5 md:justify-center lg:justify-center">
            <Image src={devlink} alt="devlink" width={500} height={300} className="mb-[2.5rem] w-9" />
            <h1 className="font-bold text-3xl md:text-3xl lg:text-4xl md:text-center lg:text-center mb-[0.6rem] 
            md:mb-[2rem] lg:mb-[2rem] ">devlinks</h1>
        </div>

        <div className="bg-white md:w-[60%] lg:w-[50%] xl:w-[33%] text-base m-auto p-8 md:rounded-xl lg:rounded-xl 
        ">
          <div className="mb-9">
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4">Create account</h1>
            <p className="text-base text-[#737373]">Lets get you started sharing your links!</p>
          </div>
          <form onSubmit={formSubmitHandler} className="flex flex-col text-[#737373] gap-2 text-xs ">
            <>
              <label htmlFor="email" className="text-[#333333]">Email address</label>
              <div className={`flex flex-row gap-3 w-[100%] py-3.5 lg:py-3.5 rounded-lg text-sm pl-2 
                ${emailError ? 'border-[1px] border-red-500 ' : 'border-[1px] border-[#D9D9D9] '} md:text-sm lg:text-sm 
                focus-within:shadow-lg focus-within:border-[#633BFF]` }>
                <Image src={email} alt="mail" width={20} height={20} className="ml-3" />
                <input type="email" id="email" name="email" placeholder="e.g alex@email.com"  
                value={enteredEmail} onChange={emailChangeHandler} 
                className= {`focus:outline-none ${emailError ? 'w-[50%] md:w-[56%] lg:w-[61%] ' : 'w-[90%]'}`} />
                {emailError && <p className="text-red-500 text-sm hidden md:block lg:block xl:block">{emailError}</p>}
              </div>
            </>
            
            <>
              <label htmlFor="password" className="mt-3 text-[#333333] ">Create Password</label>
              <div className={`flex flex-row w-[100%] py-3.5 lg:py-3.5 gap-3 rounded-lg text-sm pl-2 md:text-sm lg:text-sm 
                focus-within:border-[#633BFF] focus-within:shadow-xl
                  ${ passwordError ? 'border-[1px] border-red-500' : 'border-[1px] border-[#D9D9D9]'}`}>
                  <Image src={password} alt="password" width={20} height={20} className="ml-3" />
                  <input type="password" id="password" name="password"
                    className={` focus:outline-none ${passwordError ? 'w-[43%] md:w-[50%] lg:w-[56%] ' : 'w-[100%]' }`} onChange={passwordChangeHandler}
                    value={enteredPassword} placeholder="At least 8 characters"  />
                    {passwordError && <p className="text-red-500 hidden md:block lg:block xl:block">{passwordError}</p>}
              </div>
            </>

            <>
              <label htmlFor="password" className="mt-3 text-[#333333]">Confirm Password</label>
              <div className={`flex flex-row w-[100%] py-3.5 lg:py-3.5 gap-3 rounded-lg text-sm pl-2 md:text-sm lg:text-sm 
                focus-within:border-[#633BFF] focus-within:shadow-xl
                  ${ confirmPasswordError ? 'border-[1px] border-red-500' : 'border-[1px] border-[#D9D9D9]'}`}>
                  <Image src={password} alt="password" width={20} height={20} className="ml-3" />
                  <input type="password" id="password" name="password"
                    className={` focus:outline-none ${confirmPasswordError ? 'w-[43%] md:w-[50%] lg:w-[56%] ' : 'w-[100%]' }`} 
                    onChange={confirmPasswordChangeHandler}
                    value={enteredConfirmPassword} placeholder="At least 8 characters"  />
                    {confirmPasswordError && <p className="text-red-500 hidden md:block lg:block xl:block">{confirmPasswordError}</p>}
              </div>
            </>
            <p className="mt-6 text-sm">Password must contain at least 8 characters</p>
            <button className="bg-[#633BFF]  active:bg-[#BEADFF] text-white my-6  py-3.5 
            lg:py-3.5 rounded-lg ">Create new account</button>
          </form>
            <p className="text-center text-[#737373]">Already have an account? 
                <Link href='/' className="text-[#633BFF] "> Login</Link></p>
        </div>
      </div>
    </main>
    )
};
