"useClient"

import { useState } from "react";

import Image from "next/image";
import devlink from "../asset/devlink.svg";
import links from "../asset/links.svg";
import profile from "../asset/profile.svg";
import phone from "../asset/phone.svg";
import getStarted from "../asset/getStarted.svg";
import eye from "../asset/eye.svg";


export default function HomePage () {
    type togglePicture = {
        isActive: boolean;
    };

    const [isActive, setIsActive] = useState<togglePicture>();


    return (
        <main>
            <div className="flex flex-col text-sm">
                {/* focus:lg:gap-[15rem] */}
                <div className="flex flex-row bg-white w-[100%] lg:w-[94%] p-[1rem] m-auto mb-4 lg:my-4 rounded-xl lg:rounded-lg justify-between  ">
                    <div className="flex flex-row gap-1  ">
                        <Image src={devlink} alt="devlink" width={500} height={300} className=" w-7 lg:w-6 mb-3" />
                        <p className="text-xl font-bold hidden lg:block">devlinks</p>
                    </div>
                    <div className="flex flex-row gap-[4rem] mt-1 ">
                        <button className="flex flex-row gap-1 focus:text-[#633BFF] focus:bg-[#EFEBFF] focus:px-[1.3rem] 
                        focus:py-1 rounded-md">
                            <Image src={links} alt="links" width={500} height={300} className=" w-7 lg:w-4 mt-0.5" />
                            <p className="hidden lg:block">Links</p> 
                        </button>
                        <button className="flex flex-row gap-1 focus:text-[#633BFF] focus:bg-[#EFEBFF] focus:px-[1.3rem] 
                        focus:py-1 rounded-md">
                            <Image src={profile} alt="profile" width={500} height={300} className=" w-7 lg:w-5 focus:fill-[#633BFF] " />
                            <p className="hidden lg:block ">Profile Details</p>
                        </button>
                    </div>
                    <div>
                        <button className="border-[#633BFF] border-[1px] px-[1.3rem] py-2 rounded-md 
                        text-[#633BFF] focus:bg-[#EFEBFF] hidden lg:block ">Preview</button>
                        <Image src={eye} alt="eye" width={500} height={300} className="lg:hidden w-10
                        border-[#633BFF] border-[1px] px-[0.5rem] py-[0.5rem] rounded-md" />
                    </div>
                </div>

                <div className="w-[92%] lg:flex lg:flex-row lg:w-[94%] m-auto lg:gap-4">
                    <div className="hidden lg:block lg:w-[40%] lg:h-[45%] lg:py-[2.6rem] lg:bg-white rounded-lg ">
                        <Image src={phone} alt="phone" width={500} height={300} className="w-[200px] m-auto " />
                    </div>

                    <div className="w-[100%] lg:w-[60%] lg:h-[45%] lg:pt-[1.5rem] bg-white rounded-lg flex-col p-6 ">
                        <div className="w-[94%] m-auto ">
                            <h1 className="text-3xl font-bold mb-3 ">Customize your links</h1>
                            <p className="text-xs">Add/edit/remove links below and then share all your profiles with the world!</p>
                        </div>
                        <div className="w-[94%] m-auto mt-6 ">
                            <button className="text-[#633BFF] text-sm border-[1px] border-[#633BFF] rounded-md  
                            py-1.5 w-[100%] focus:bg-[#EFEBFF] ">+ Add new link
                            </button>
                            <div className="bg-[#FAFAFA] rounded-lg mt-4 pt-[1.3rem] ">
                                <Image src={getStarted} alt="getStarted" width={500} height={300} className="w-[200px]
                                m-auto " />
                                <div className="text-center  pb-3">
                                    <h1 className="text-2xl font-bold mb-2">Lets get you started.</h1>
                                    <p className="w-[59%] m-auto text-[10px] leading-[14px] ">Use the Add new link button to get started. Once you have more than on link, you can 
                                        reorder and edit them. We are here to help you share your profiles with everyone</p>
                                </div>
                            </div> 
                        </div>
                        <hr className="mt-5 mb-3" />
                        <button className="text-white bg-[#D8CEFF] lg:py-1.5 lg:px-4 lg:w-[10%] rounded-md float-end 
                            focus:bg-[#BEADFF]  focus:shadow-lg focus:shadow-[#d2cbec]
                            py-2 w-[100%] ">Save</button>
                    </div>
                </div>
            </div>
        </main>
    )
};