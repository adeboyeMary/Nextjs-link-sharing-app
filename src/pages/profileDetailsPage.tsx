import Image from "next/image";
import upload from "../asset/upload.svg";
import Button from "@/components/button";


const profileDetailsPage = () => {
    return (
        <div className="bg-white w-[92%] m-auto rounded-lg text-[#333333] ">
            <div className="p-6">
                <h1 className="text-3xl font-bold  ">Profile Details</h1>
                <p className="text-base mt-4 mb-7">Add your details to create a personal touch to your profile.</p>
            </div>
            <div className="bg-[#FAFAFA] w-[88%] m-auto rounded-lg flex flex-col text-[#737373] py-6 pl-4 text-sm mb-5 ">
                <p>Profile picture</p>
                <div className="bg-[#EFEBFF] w-[75%] p-16 rounded-lg flex flex-col gap-2 mt-4 mb-6">
                    <Image src={upload} alt='uploadImage' width={30} height={30} className="m-auto" />
                    <p className="font-bold text-[#633BFF] text-xs text-center ">+ Upload Image</p>
                </div>
                <p className="pr-2">Image must be below 1024x1024px. Use PNG or JPG format.</p>
            </div>
            <div className="bg-[#FAFAFA] p-6 mb-6 w-[88%] m-auto rounded-lg ">
                <form className="flex flex-col gap-2">
                    <>
                    <label>First name*</label>
                    <input name="" id="" type="" className="py-4 border border-[#737373] rounded-lg outline-none " />
                    </>
                    <>
                    <label>Last name*</label>
                    <input name="" id="" type="" className="py-4 border border-[#737373] rounded-lg outline-none " />
                    </>
                    <>
                    <label>Email</label>
                    <input name="" id="" type="" className="py-4 border border-[#737373] rounded-lg outline-none " />
                    </>
                </form>
            </div>

            <hr className="mb-6" />
            <div className="w-[88%] m-auto mb-6">
                <button className="bg-[#633BFF] text-white w-[100%] rounded-lg py-4 ">Save</button>
            </div>
            
        </div>
    )
};

export default profileDetailsPage;