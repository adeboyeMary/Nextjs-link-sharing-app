import Image from "next/image";
import phone from "../asset/phone.svg";
import getStarted from "../asset/getStarted.svg";
import Button from "@/components/button";


export default function HomePage () {
    return (
        <div className="flex flex-col text-sm gap-4 text-[#333333]  ">
            <div className="w-[92%] lg:flex lg:flex-row lg:w-[94%] m-auto lg:gap-4 bg-white rounded-lg pb-8 lg:pb-0 lg:bg-transparent ">
                {/* bg-white rounded-lg pb-6 lg:bg-transparent */}
                <div className="hidden lg:block lg:w-[40%] lg:h-[45%] lg:py-[2.6rem] lg:bg-white rounded-lg ">
                    <Image src={phone} alt="phone" width={500} height={300} className="w-[200px] m-auto " />
                </div>

                <div className="w-[100%] lg:w-[60%] lg:h-[45%] lg:pt-[1.5rem]  lg:bg-white rounded-lg flex-col p-6 ">
                    <div className="w-[94%] m-auto ">
                        <h1 className="text-2xl font-bold mb-3 ">Customize your links</h1>
                        <p className="text-base text-[#737373]">Add/edit/remove links below and then share all your profiles with the world!</p>
                    </div>
                    <div className="w-[94%] m-auto mt-6 ">
                        <button className="text-[#633BFF] text-sm border-[1px] border-[#633BFF] rounded-md  
                        py-1.5 w-[100%] focus:bg-[#EFEBFF] font-bold ">+ Add new link
                        </button>
                        <div className="bg-[#FAFAFA] rounded-lg mt-5 py-[1.3rem]  ">
                            <Image src={getStarted} alt="getStarted" width={500} height={300} className="w-[200px]
                            m-auto " />
                            <div className="text-center  pb-3">
                                <h1 className="text-2xl font-bold mb-4">Lets get you started.</h1>
                                <p className="w-[82%] m-auto text-base text-[#737373] ">Use the <q>Add new link</q> button to get started. 
                                    Once you have more than on link, you can reorder and edit them. We are here to help you share 
                                    your profiles with everyone!</p>
                            </div>
                        </div> 
                    </div>
                    <hr className="mt-5 mb-3 hidden lg:block " />
                    <div className="hidden lg:block"><Button /></div>                
                </div>
                <hr className="mt- mb-5 lg:hidden" />
                <div className="lg:hidden w-[89%] m-auto "><Button /></div>
            </div>
        </div>
    )
};