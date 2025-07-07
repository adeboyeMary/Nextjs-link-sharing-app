import Image from "next/image";
import { Platform } from "@/store/types";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";

import linkLines from "../asset/twoLinesLink.svg";
import arrowDown from "../asset/arrowDown.svg";
import arrowUp from "../asset/arrowUp.svg";
import links from "../asset/links.svg";
import { FormObject } from "@/store/types";
import devTo from "../asset/devto.svg";


type LinkFormProps = {
    link: FormObject,
    index: number, 
    onChange: (index: number, field: keyof FormObject, value: string | Platform | null) => void, 
    platforms: Platform[], 
    isOpen: boolean, 
    toggleHandler: () => void,
    error: string,
};


const AddLinkForm = ({link, index, onChange, platforms, isOpen, toggleHandler, error }: LinkFormProps) => {
    return (
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
                        onChange={(val) => onChange(index, "platform", val)} >
                        <ListboxButton onClick={toggleHandler} className="flex flex-row justify-between px-4 py-2 border 
                            border-[#D0D0D0] rounded-lg bg-white w-[100%] focus:border focus:border-[#633BFF] 
                            focus:shadow-[0_0_20px_rgba(99,59,255,0.3)] outline-none " >
                            <div className="gap-2 flex flex-row">
                                {link.platform ? (
                                    <>
                                        <link.platform.icon />
                                        <span>{link.platform.name} </span>
                                    </>
                                ) : (
                                    <span></span>
                                )}
                                
                            </div>
                            {isOpen ? (
                                <Image src={arrowUp} alt="logo" width={13} height={13} className="pt-2 "/> 
                            ) : (
                                <Image src={arrowDown} alt="logo" width={13} height={13} className="pt-2 "/> 
                            )}
                        </ListboxButton>

                        <ListboxOptions className="rounded-lg lg:w-[100%] bg-white mt-4 text-sm outline-none p-1
                          h-[20rem] overflow-y-scroll mb-8 ">
                            {platforms.map((platform) => (
                                <ListboxOption key={platform.name} value={platform} >
                                    {({active, selected}) => (
                                        <div className="flex flex-col gap-2 px-2 py-1 ">
                                            <li className={`flex flex-row list-none gap-1.5 ${active ? 
                                            "text-[#633BFF] " : '' } `}>
                                                <platform.icon className={`pt-[2px] hover:fill-[#633BFF] ${active ? 
                                                "fill-[#633BFF] " : '' } `}  />                                                
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
                    <div className={`flex flex-row gap-2 px-4 py-2 rounded-lg bg-white w-[100%] 
                    focus-within:border focus-within:shadow-[0_0_20px_rgba(99,59,255,0.3)]
                            focus-within:border-[#633BFF] 
                        ${error ? 'border border-red-500' : 'border border-[#D0D0D0]'  }`}>
                        <Image src={links} alt="link" width={20} height={20} />
                        <input type="text" id={`link-url-${index}`}
                            onChange={(e) => onChange(index, 'url', e.target.value)} 
                            className={`outline-none  ${error ? 'md:w-[73%] lg:w-[67%] xl:w-[76%] ' : 'w-[100%]' } `} />
                        {error && <p className="hidden md:block lg:block xl:block text-red-500 text-sm lg:text-xs">{error}</p>}
                    </div>
                    
                </div>
            </fieldset>
        </form>
    )
};

export default AddLinkForm;