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
        <div className="flex flex-row justify-between bg-white w-[100%] m-auto py-3 px-4 mb-4">
            <div className="flex flex-row py-2.5 px-3 ">
                <Image src={devlink} alt="devlink" width={30} height={30} className='' />
                <p className="lg:block lg:text-3xl font-bold hidden ">devlinks</p>
            </div>
                    
            <div className="flex flex-row gap-2 py-2">
                <Link href="/homePage" className={`px-6 py-2.5 transition-colors duration-200 
                ${pathname === '/homePage' ? 'bg-[#EFEBFF] rounded-lg ' : 'bg-transparent'}`}>
                    {pathname === '/homePage' ? (
                        <Image src={linksCol} alt="links" width={23} height={23} />
                    ) : (
                        <Image src={links} alt="links" width={23} height={23} />
                    )}
                    <span className="lg:block hidden ">Links</span>
                </Link>

                <Link href="/profileDetailsPage" 
                className={`px-6 py-2.5 transition-colors duration-200 
                ${pathname === '/profileDetailsPage' ? 'bg-[#EFEBFF] rounded-lg ' : 'bg-transparent'}`}>
                    {pathname === '/profileDetailsPage' ? (
                        <Image src={profileCol} alt="profile" width={23} height={23} />
                    ) : (
                        <Image src={profile} alt="profile" width={23} height={23} />
                    )}
                    <span className="hidden lg:block">profile Details</span>
                </Link>
            </div>

            <Link href="" className="hidden lg:flex items-center gap-2 border border-[#633BFF] px-5 py-2 
                rounded-md text-[#633BFF] hover:bg-[#EFEBFF] transition">
                <Image src={eye} alt="eye" width={30} height={30} className=" " />
                <span>Preview</span>
            </Link>
            <Link href="/previewPage" className="block lg:hidden border-[#633BFF] border-[1px] h-[47px] py-2 px-3 rounded-lg mt-1.5 ">
                <Image src={eye} alt="eye" width={23} height={23} className=" " />
            </Link>            
        </div>
    )
};

export default Header;