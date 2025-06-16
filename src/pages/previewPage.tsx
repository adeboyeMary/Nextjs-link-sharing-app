import Image from "next/image";
import Link from "next/link";
import benWright from "../asset/benWright.svg";
import arrow from "../asset/arrow.svg";

const PreviewProfile = () => {
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

                        <div className="mt-5 ">
                            <h1 className="text-3xl font-bold  ">Ben Wright</h1>
                            <p className="text-[#737373] mt-3 ">ben@example.com</p>
                        </div>

                        <div className="flex flex-col gap-5 text-white text-center m-auto w-[65%] mt-11 lg:mt-12 ">
                            <div className="flex flex-row justify-between bg-black lg-[18%] py-3.5 rounded-lg px-4 ">
                                <span>Github</span>
                                <Image src={arrow} alt="icon" />
                                
                            </div>
                            <div className="flex flex-row justify-between bg-[#EE3939] lg-[18%] py-3.5 rounded-lg px-4 ">
                                <span>YouTube</span>
                                <Image src={arrow} alt="icon" />
                                
                            </div>
                            <div className="flex flex-row justify-between bg-[#2D68FF] lg-[38%] py-3.5 rounded-lg px-4 ">
                                <span>LinkedIn</span>
                                <Image src={arrow} alt="icon" />
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
};

export default PreviewProfile;