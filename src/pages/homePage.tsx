import { useState, useEffect } from "react";
import Image from "next/image";

import phone from "../asset/phone.svg";
import getStarted from "../asset/getStarted.svg";
import Button from "@/components/button";
import { platforms } from "@/constant/Platforms";
import { Platform, FormObject } from "@/store/types";
import AddLinkForm from "@/components/AddLinkForm";

export default function HomePage () {
    const [links, setLinks] = useState<FormObject[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [formData, setFormData] = useState<any>(null);

    useEffect(() => {
        const formDataString = localStorage.getItem('formData');
        const data = formDataString ? JSON.parse(formDataString) : [];
        setFormData(data);
    }, []);

    const formOnChangeHandler = (index: number, field: keyof FormObject, value: string | Platform | null ) => {
        setLinks((prevLinks) => {
            const updatedLinks = [...prevLinks];
            updatedLinks[index] = { ...updatedLinks[index], [field]: value};
            return updatedLinks;
        });
    };
    const handleAddLink = () => {
        setLinks((prevLinks) => [
            ...prevLinks, 
            {
                platform: null,
                url: ""
            }
        ]);
    };
    const toggleHandler = () => {
        setIsOpen(!isOpen);
    };

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let isValid = true;
        if(links[0].url.trim() === '') {
            setError('Can not be empty');
            isValid = false;
        }
        if (!isValid) return;
        setLinks([]);
        setError('');
        localStorage.setItem('formPlatform', JSON.stringify(links[0].platform?.name));
        localStorage.setItem('formUrl', JSON.stringify(links[0].url));
        const formData = localStorage.getItem('formPlatform');
        const formUrl =localStorage.getItem('formUrl');
        console.log(formData, formUrl, '...............');
    };

    return (
        <div className="flex flex-col text-sm gap-4 text-[#333333]  ">
            <div className="w-[92%] lg:flex lg:flex-row lg:w-[94%] m-auto lg:gap-4 bg-white rounded-lg pb-8 lg:pb-0 lg:bg-transparent ">
                <div className="hidden lg:block lg:w-[40%] lg:py-[2.6rem] lg:bg-white rounded-lg ">
                    {/* <Image src={phone} alt="phone" width={500} height={300} className="w-[200px] m-auto " /> */}
                    <Image src={phone} alt="phone" width={280} height={200} className=" m-auto " />
                    <ul>
                    {/* {formData.map((data) => (
                         <li key={data.name}>
                         <span>{data.name}</span> 
                         <span>{data.url} </span>
                         </li>
                    ))} */}
                    </ul>
                </div>

                <div className="w-[100%] lg:w-[60%] lg:pt-[1.5rem]  lg:bg-white rounded-lg flex-col p-6 ">
                    <div className="w-[94%] m-auto ">
                        <h1 className="text-2xl font-bold mb-3 ">Customize your links</h1>
                        <p className="text-base text-[#737373]">Add/edit/remove links below and then share all your profiles with the world!</p>
                    </div>
                    <div className="w-[94%] m-auto mt-6 ">
                        <button onClick={handleAddLink} className="text-[#633BFF] text-sm border-[1px] border-[#633BFF] rounded-md  
                        py-1.5 w-[100%] focus:bg-[#EFEBFF] font-bold ">+ Add new link
                        </button>

                        {links.length === 0 ? (
                            <div className="bg-[#FAFAFA] rounded-lg mt-5 py-[1.3rem]  ">
                                <Image src={getStarted} alt="getStarted" width={500} height={300} className="w-[200px]
                                m-auto " />
                                <div className="text-center  pb-3">
                                    <h1 className="text-2xl font-bold mb-4">Lets get you started.</h1>
                                    <p className="w-[82%] m-auto text-base text-[#737373] ">Use the <q>Add new link</q> button 
                                    to get started. Once you have more than on link, you can reorder and edit them. 
                                    We are here to help you share your profiles with everyone!</p>
                                </div>
                            </div> 
                        ) : (
                            links.map((link, index) => (
                                <AddLinkForm 
                                    key={index} link={link} 
                                    index={index} onChange={formOnChangeHandler} 
                                    platforms={platforms} isOpen={isOpen} 
                                    toggleHandler={toggleHandler} error={error}
                                />
                            ))
                        )}
                        
                    </div>
                    <hr className="mt-5 mb-3 hidden lg:block " />
                    <div className="hidden lg:block"><Button onClick={onClickHandler} /></div>                
                </div>
                <hr className="mt- mb-5 lg:hidden" />
                <div className="lg:hidden md:block w-[89%] md:w-[10%] md:float-end md:mr-12 m-auto ">
                    <Button onClick={onClickHandler} /></div>
            </div>
        </div>
    )
};