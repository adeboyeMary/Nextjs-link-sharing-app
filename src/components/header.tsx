import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import devlink from "../asset/devlink.svg";
import links from "../asset/links.svg";
import linksCol from "../asset/linksColored.svg";
import profile from "../asset/profile.svg";
import profileCol from "../asset/profileColored.svg";
import eye from "../asset/eye.svg";


const Header = () => {
    const pathname = usePathname();
    return (
        <div className="flex flex-row justify-between bg-white w-[100%] m-auto py-3 px-4 mb-4 foldOnly:gap-2">
            <div className="flex flex-row py-2.5 px-3 md:flex md:flex-row md:gap-1  ">
                <Image src={devlink} alt="devlink" width={30} height={30} className='' />
                <p className="lg:block md:block md:text-2xl lg:text-xl font-bold hidden md:pt-1.5 lg:pt ">devlinks</p>
            </div>
                    
            <div className="flex flex-row gap-2 py-2 md:text-sm lg:text-sm xl:text-xs ">
                <Link href="/homePage" className={`px-6 py-2.5 transition-colors duration-200 md:gap-1
                ${pathname === '/homePage' ? 'bg-[#EFEBFF] rounded-lg ' : 'bg-transparent'} md:flex md:flex-row `}>
                    {pathname === '/homePage' ? (
                        <Image src={linksCol} alt="links" width={22} height={22} />
                    ) : (
                        <Image src={links} alt="links" width={22} height={22} />
                    )}
                    <span className={`lg:block md:block hidden xl:mt-0.5
                    ${pathname === '/homePage' ? 'text-[#633BFF] ' : 'text-[#737373] '} `}>Links</span>
                </Link>

                <Link href="/profileDetailsPage" 
                className={`px-6 py-2.5 transition-colors duration-200 md:gap-1
                ${pathname === '/profileDetailsPage' ? 'bg-[#EFEBFF] rounded-lg ' : 'bg-transparent'} md:flex md:flex-row`}>
                    {pathname === '/profileDetailsPage' ? (
                        <Image src={profileCol} alt="profile" width={23} height={23} />
                    ) : (
                        <Image src={profile} alt="profile" width={23} height={23} />
                    )}
                    <span className={`hidden lg:block md:block xl:mt-0.5
                        ${pathname === '/profileDetailsPage' ? 'text-[#633BFF] ' : 'text-[#737373] '} `}>Profile Details</span>
                </Link>
            </div>

            <Link href="/previewPage" className=" border-[#633BFF] border-[1px] h-[43px] py-2 px-4 rounded-lg mt-1.5
            md:px-7 md:h-[43px] md:mt-2 md:text-sm lg:text-sm xl:h-[39px] xl:text-xs foldOnly:py-0.5 foldOnly:h-[36px]
            foldOnly:px-2 foldOnly:mt-2.5  ">
                <Image src={eye} alt="eye" width={23} height={23} className="block md:hidden lg:hidden foldOnly:mt-[3px] " />
                <span className="hidden md:block xl:mt-0.5 ">Preview</span>
            </Link>            
        </div>
    )
};

export default Header;