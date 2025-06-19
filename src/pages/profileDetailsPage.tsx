import { useState } from "react";

import Image from "next/image";
import upload from "../asset/upload.svg";
import phone from "../asset/phone.svg";


const ProfileDetailsPage = () => {
    const [enteredEmail, setEnteredEmail] = useState<string>('');
    const [enteredFirstName, setEnteredFirstName] = useState<string>('');
    const [enteredLastName, setEnteredLastName] = useState<string>('');
    const [error, setError] = useState<string>('');

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let isValid = true;

    if(enteredEmail.trim() === '' || enteredFirstName.trim() === '' ||enteredLastName.trim() === '') {
      setError("Can't be empty");
      isValid = false;    
    }
    if(!isValid) return; 
    
    setEnteredEmail(''); 
    setEnteredFirstName(''); 
    setEnteredLastName('');
  };


    return (
        <div className="flex flex-row bg-white lg:bg-transparent w-[92%] m-auto rounded-lg text-[#333333] pb-0.5 lg:gap-4 ">
            <div className="hidden lg:block lg:w-[40%] lg:pt-20 lg:pb-[2.6rem] lg:bg-white rounded-lg ">
                <Image src={phone} alt="phone" width={280} height={200} className=" m-auto " />
            </div>
                
            <div className="bg-white w-[100%] md:w-[100%] lg:w-[60%] rounded-lg">
            <div className="p-6">
                <h1 className="text-3xl font-bold  ">Profile Details</h1>
                <p className="text-base mt-4 mb-7">Add your details to create a personal touch to your profile.</p>
            </div>
            <div className="bg-[#FAFAFA] w-[88%] md:w-[88%] lg:w-[90%] m-auto rounded-lg flex flex-col text-[#737373] 
            py-6 pl-4 text-sm mb-5 md:flex-row md:justify-evenly md:gap-4
            lg:flex-row lg:justify-evenly lg:gap-4 ">
                <p className="md:w-[30%] lg:w-[30%] md:m-auto lg:m-auto  ">Profile picture</p>
                <div className="bg-[#EFEBFF] w-[64%] md:w-[30%] lg:w-[30%] p-16 rounded-lg flex flex-col gap-2 mt-4 mb-6">
                    <Image src={upload} alt='uploadImage' width={30} height={30} className="m-auto" />
                    <p className="font-bold text-[#633BFF] text-xs text-center w-24 ml-[-1rem] md:ml-[-1.5rem] 
                    lg:ml-[-2.2rem] xl:ml-[-1.5rem] ">+ Upload Image</p>
                </div>
                <p className="pr-2 lg:pr-0 md:w-[20rm] md:m-auto lg:w-[20rm] lg:m-auto  ">Image must be below 1024x1024px. Use PNG or JPG format.</p>
            </div>
            {/* <div > */}
                <form onSubmit={formSubmitHandler} className="">
                    <div className="flex flex-col bg-[#FAFAFA] py-4 px-6 mb-6 w-[88%] lg:w-[90%] m-auto rounded-lg gap-3 lg:gap-4 ">
                    <div className="flex flex-col md:flex-row md:justify-between lg:flex-row lg:justify-between">
                        <label className="lg:w-[35%] ">First name*</label>
                        <div className={`flex flex-row py-3 lg:py-2 md:w-[65%] lg:w-[65%] border rounded-lg pl-3 text-sm 
                        ${error ? 'border-[1px] border-red-500 ' : 'border-[#737373] ' } focus-within:shadow-[0_0_20px_rgba(99,59,255,0.3)]
                        focus-within:border-[#633BFF]`}>
                            <input name="firstName" id="firstName" type="text" placeholder="e.g John" value={enteredFirstName}
                                onChange={(e) => setEnteredFirstName(e.target.value)} 
                                className={`focus:outline-none ${error ? ' w-[48%] md:w-[56.5%] lg:w-[60%] xl:w-[73%]' : 'w-[90%]'} 
                                bg-transparent `}
                            />
                            {error && <p className="text-red-500 hidden md:block lg:block xl:block text-sm xl:text-xs">{error}</p>}
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between lg:flex-row lg:justify-between">
                        <label className="lg:w-[35%] ">Last name*</label>
                        <div className={`flex flex-row py-3 lg:py-2 md:w-[65%] lg:w-[65%] border rounded-lg pl-3 text-sm 
                        ${error ? 'border-[1px] border-red-500 ' : 'border-[#737373] ' } focus-within:shadow-[0_0_20px_rgba(99,59,255,0.4)] 
                        focus-within:border-[#633BFF] `}>
                            <input name="lName" id="lName" type="text" placeholder="e.g Appleseed" value={enteredLastName}
                                onChange={(e) => setEnteredLastName(e.target.value)} 
                                className={`outline-none ${error ? ' w-[48%] md:w-[56.5%] lg:w-[60%] xl:w-[73%]' : 'w-[90%]'}
                                bg-transparent `}
                            />
                            {error && <p className="text-red-500 hidden md:block lg:block xl:block text-sm xl:text-xs">{error}</p>}
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between lg:flex-row lg:justify-between">
                        <label className="lg:w-[35%] ">Email</label>
                        <div className={`flex flex-row py-3 lg:py-2 md:w-[65%] lg:w-[65%] border rounded-lg pl-3 text-sm 
                        ${error ? 'border-[1px] border-red-500 ' : 'border-[#737373] '} focus-within:shadow-[0_0_20px_rgba(99,59,255,0.4)]
                        focus-within:border-[#633BFF] `}>
                            <input name="email" id="email" type="email" placeholder="e.g email@example.com" value={enteredEmail}
                                onChange={(e) => setEnteredEmail(e.target.value)}
                                className={`outline-none ${error ? ' w-[48%] md:w-[56.5%] lg:w-[60%] xl:w-[73%]' : 'w-[90%]'}
                                bg-transparent `} 
                            />
                            {error && <p className="text-red-500 hidden md:block lg:block xl:block text-sm xl:text-xs">{error}</p>}
                        </div>
                    </div>
                    </div>

                    <hr className="mb-6" />
                    <div className="w-[88%] m-auto md:w-[10%] md:float-end md:mr-12 lg:w-[10%] lg:float-end xl:w-[12%] mb-6">
                        <button className="bg-[#633BFF] text-white w-[100%] rounded-lg py-4 md:py-1.5 lg:py-1.5 ">Save</button>
                    </div>

                </form>
            {/* </div> */}

            {/* <hr className="mb-6" />
            <div className="w-[88%] m-auto md:w-[10%] md:float-end md:mr-12 lg:w-[10%] lg:float-end mb-6">
                <button className="bg-[#633BFF] text-white w-[100%] rounded-lg py-4 md:py-1.5 lg:py-1.5 ">Save</button>
            </div> */}
            </div>
            
        </div>
    )
};

export default ProfileDetailsPage;