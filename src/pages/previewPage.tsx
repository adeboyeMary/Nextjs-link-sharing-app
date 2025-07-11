import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import benWright from "../asset/benWright.svg";
import arrow from "../asset/arrow.svg";
import { platforms } from "@/constant/Platforms";
import { ProfileDetails, FormObject } from "../store/types";

const PreviewProfile = () => {
    const [profileDetails, setProfileDetails] = useState<ProfileDetails | null>(null);
    const [formData, setFormData] = useState<FormObject[]>([]);

    useEffect(() => {
        const formDataString = localStorage.getItem('formData');
        const data = formDataString ? JSON.parse(formDataString) : [];
        const rehydrateIcon = data.map((item:FormObject) => {
            const matchPlatformWithIcon = platforms.find(p => p.id === item.platform?.id);
            return {
                ...item,
                platform: matchPlatformWithIcon ? {icon: matchPlatformWithIcon.icon, ...item.platform, bg: matchPlatformWithIcon.bg} : item.platform
            };
        })
        setFormData(rehydrateIcon);
    }, []);

    useEffect(() => {
        const profileDetailsString = localStorage.getItem('profileDetails');
        const profile = profileDetailsString ? JSON.parse(profileDetailsString) : null;
        setProfileDetails(profile);
    }, []);
    

    return (
        <div>
            {/* header for tablet and laptop */}
            <div className="md:flex lg:flex bg-[#633BFF] pt-6 pb-64 rounded-bl-3xl rounded-br-3xl hidden ">
                <div className="flex m-auto bg-white w-[94%] py-3 px-4  rounded-lg justify-between text-center text-sm ">
                    <Link href="/profileDetailsPage" className="border border-[#633BFF] text-[#633BFF] bg-transparent rounded-lg 
                    py-2 w-[18%] lg:w-[14%] ">Back to Editor</Link>
                    <Link href='' className="border-[#633BFF] text-white bg-[#633BFF] rounded-lg py-2 w-[17%] lg:w-[13%] ">Share Link</Link>
                </div>
            </div>

            <div className="bg-#FAFAFA text-[#333333] ">
                <div className="bg-white py-6 lg:py-3 md:w-[45%] md:relative md:z-10 md:top-[-10rem] md:rounded-3xl 
                 lg:w-[35%] md:m-auto lg:m-auto lg:rounded-3xl lg:relative lg:z-10 lg:top-[-10rem] h-[100vh] md:h-full lg:h-full ">
                    {/* Header for mobile */}
                    <div className="md:hidden lg:hidden flex justify-evenly text-center text-sm ">
                        <Link href="/profileDetailsPage" className="border border-[#633BFF] text-[#633BFF] bg-transparent rounded-lg 
                        py-3 w-[38%] ">Back to Editor</Link>
                        <Link href='' className="border-[#633BFF] text-white bg-[#633BFF] rounded-lg py-3 w-[40%] ">Share Link</Link>
                    </div>

                    <div className="flex flex-col text-center mt-20 md:my-9 lg:my-10  ">
                        <div className="border border-[#633BFF] rounded-full m-auto ">
                            <Image src={benWright} alt="profile" width={120} height={120} />
                        </div>

                        {profileDetails && 
                            <div className="mt-5 ">
                                <h1 className="text-3xl font-bold  ">{profileDetails.enteredFirstName} {profileDetails.enteredLastName} </h1>
                                <p className="text-[#737373] mt-3 ">{profileDetails.enteredEmail} </p>
                            </div>
                        }

                        <ul className="flex flex-col relative z-10 w-[70%] md:w-[65%] lg:w-[57%] xl:w-[45%] 
                        gap-[1.2rem] m-auto text-white mt-11 lg:mt-12 h-[360px] overflow-y-scroll no-scrollbar ">
                        {formData.map((data, index) => (
                            data.platform && data.platform.icon ? (
                                <li key={data.platform.id ?? index} className={`flex items-center justify-between  py-2.5 
                                px-4 rounded-lg ${data.platform.bg} `} style={{ backgroundColor: data.platform.bg }}>
                                    <div className="flex flex-row gap-1.5 ">
                                        <data.platform.icon className="w-5 h-5 fill-white " />
                                        <span>{data.platform.name }</span>
                                    </div>
                                  <Image src={arrow} alt="icon" />
                                </li>
                              ) : null                          
                        ))}
                    </ul>
                    </div>
                </div>
                
            </div>
        </div>
    )
};

export default PreviewProfile;