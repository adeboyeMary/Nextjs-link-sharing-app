import { useState } from "react";
import Image from "next/image";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";

import phone from "../asset/phone.svg";
import getStarted from "../asset/getStarted.svg";
import Button from "@/components/button";
import linkLines from "../asset/twoLinesLink.svg";
import arrowDown from "../asset/arrowDown.svg";
import arrowUp from "../asset/arrowUp.svg";
import { Platform, FormObject } from "@/store/types";

const platforms: Platform[] = [
  {icon: "/assets/git.svg", name: "Github"},
  {icon: "/assets/frontMentor.svg", name: "Frontend Mentor"},
  {icon: "/assets/X.svg", name: "X"},
  {icon: "/assets/linkedIn.svg", name: "LinkedIn"},
  {icon: "/assets/youtube.svg", name: "YouTube"},
  {icon: "/assets/fb.svg", name: "Facebook"},
  {icon: "/assets/twitch.svg", name: "Twitch"},
  {icon: "/assets/devto.svg", name: "Dev.to"},
  {icon: "/assets/codewars.svg", name: "Codewars"},
  {icon: "/assets/codepen.svg", name: "Codepen"},
  {icon: "/assets/fcc.svg", name: "freeCodeCamp"},
  {icon: "/assets/gitlab.svg", name: "GitLab"},
  {icon: "/assets/hashnode.svg", name: "Hashnode"},
  {icon: "/assets/stackOverflow.svg", name: "Stack Overflow"},
];

export default function HomePage () {
    const [links, setLinks] = useState<FormObject[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    const formOnChangeHandler = (index: number, field: keyof FormObject, value: string | Platform ) => {
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
                platform: {icon: "", name: ""},
                url: ""
            }
        ]);
    };
    const toggleHandler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col text-sm gap-4 text-[#333333]  ">
            <div className="w-[92%] lg:flex lg:flex-row lg:w-[94%] m-auto lg:gap-4 bg-white rounded-lg pb-8 lg:pb-0 lg:bg-transparent ">
                <div className="hidden lg:block lg:w-[40%] lg:py-[2.6rem] lg:bg-white rounded-lg ">
                    {/* <Image src={phone} alt="phone" width={500} height={300} className="w-[200px] m-auto " /> */}
                    <Image src={phone} alt="phone" width={280} height={200} className=" m-auto " />
                </div>

                <div className="w-[100%] lg:w-[60%] lg:h-[45 lg:pt-[1.5rem]  lg:bg-white rounded-lg flex-col p-6 ">
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
                                <form key={index} className="bg-[#FAFAFA] rounded-lg p-4 mt-6 text-[#737373] ">
                                    <fieldset>
                                        <div className="flex justify-between text-sm mb-2.5 ">
                                            <div className="flex flex-row gap-2 font-bold ">
                                                <Image src={linkLines} alt="logo" width={11} height={11} />
                                                <span>Link #{index + 1} </span>
                                            </div>
                                            <span>Remove</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="text-[11px] ">Platform</label>
                                            <Listbox 
                                                value={link.platform} 
                                                onChange={(val) => formOnChangeHandler(index, "platform", val)} >
                                                <ListboxButton onClick={toggleHandler} className="flex flex-row justify-between px-4 py-2 border 
                                                    border-[#D0D0D0] rounded-lg bg-white w-[100%] focus:border 
                                                    focus:border-[#633BFF] focus:shadow-[0_0_20px_rgba(99,59,255,0.3)]
                                                    outline-none " >
                                                    <div className="gap-2 flex flex-row">
                                                        <Image src={link.platform.icon} alt="logo" width={13} height={13} />
                                                        <span>{link.platform.name || "Select platform"} </span>
                                                    </div>
                                                    {isOpen ? (
                                                        <Image src={arrowUp} alt="logo" width={13} height={13} className="pt-2 "/> 
                                                    ) : (
                                                        <Image src={arrowDown} alt="logo" width={13} height={13} className="pt-2 "/> 
                                                    )}
                                                </ListboxButton>

                                                <ListboxOptions className="rounded-lg w-[100%] bg-white mt-4 text-sm outline-none ">
                                                    {platforms.map((platform) => (
                                                        <ListboxOption key={platform.name} value={platform} >
                                                            {({active, selected}) => (
                                                                <div className="flex flex-col gap-2 px-2 py-1 ">
                                                                    <li className={`flex flex-row list-none gap-1.5 ${active ? 
                                                                    "text-[#633BFF] fill-[#633BFF] " : '' } `}>
                                                                        <Image src={platform.icon} alt="logo" width={13} height={13}
                                                                        className={`pt-[2px] hover:fill-[#633BFF] ${active ? 
                                                                        "fill-[#633BFF] " : '' } `} />
                                                                        <span>{platform.name} </span>
                                                                    </li>
                                                                    <hr />
                                                                </div>
                                                            )}
                                                        </ListboxOption>
                                                    ))}
                                                </ListboxOptions>
                                            </Listbox>

                                        </div>
                                        <div className="mt-2 text-[11px] ">
                                            <label htmlFor={`link-url-${index}`}>Link</label>
                                            <input type="text" id={`link-url-${index}`}
                                            onChange={(e) => formOnChangeHandler(index, 'url', e.target.value)}
                                            className="flex flex-row px-4 py-2 border border-[#D0D0D0] rounded-lg bg-white
                                                w-[100%] outline-none focus:border focus:shadow-[0_0_20px_rgba(99,59,255,0.3)]
                                                focus:border-[#633BFF] " />
                                        </div>
                                    </fieldset>
                                </form>
                            ))
                        )}
                        
                    </div>
                    <hr className="mt-5 mb-3 hidden lg:block " />
                    <div className="hidden lg:block"><Button /></div>                
                </div>
                <hr className="mt- mb-5 lg:hidden" />
                <div className="lg:hidden md:block w-[89%] md:w-[10%] md:float-end md:mr-12 m-auto "><Button /></div>
            </div>
        </div>
    )
};