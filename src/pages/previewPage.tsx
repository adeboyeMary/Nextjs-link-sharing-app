import Image from "next/image";
import Link from "next/link";
import benWright from "../asset/benWright.svg";

const PreviewProfile = () => {
    return (
        <div className="bg-white py-6 text-[#333333] ">
            <div className="flex justify-evenly text-center text-sm ">
                <Link href="/profileDetailsPage" className="border border-[#633BFF] text-[#633BFF] bg-transparent rounded-lg 
                py-3 w-[38%] ">Back to Editor</Link>
                <Link href='' className="border-[#633BFF] text-white bg-[#633BFF] rounded-lg py-3 w-[40%] ">Share Link</Link>
            </div>

            <div className="flex flex-col text-center mt-20 ">
                <div className="border border-[#633BFF] rounded-full m-auto ">
                    <Image src={benWright} alt="profile" width={100} height={100} />
                </div>
                <div className="mt-5 ">
                    <h1 className="text-3xl font-bold  ">Ben Wright</h1>
                    <p className="text-[#737373] mt-3 ">ben@example.com</p>
                </div>
            </div>
        </div>
    )
};

export default PreviewProfile;