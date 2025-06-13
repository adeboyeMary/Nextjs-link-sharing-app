import Image from "next/image";
import upload from "../asset/upload.svg";
import phone from "../asset/phone.svg";
import Button from "@/components/button";


const profileDetailsPage = () => {
    return (
        <div className="flex flex-row bg-white lg:bg-transparent w-[92%] m-auto rounded-lg text-[#333333] pb-0.5 lg:gap-4 ">
            <div className="hidden lg:block lg:w-[40%] lg:py-[2.6rem] lg:bg-white rounded-lg ">
                {/* lg:h-[100%] xl:h-[45%] */}
                    <Image src={phone} alt="phone" width={500} height={300} className="w-[200px] m-auto " />
            </div>
                
            <div className="bg-white w-[100%] lg:w-[60%]">
            <div className="p-6">
                <h1 className="text-3xl font-bold  ">Profile Details</h1>
                <p className="text-base mt-4 mb-7">Add your details to create a personal touch to your profile.</p>
            </div>
            <div className="bg-[#FAFAFA] w-[88%] lg:w-[90%] m-auto rounded-lg flex flex-col text-[#737373] py-6 pl-4 text-sm mb-5
            lg:flex-row lg:justify-evenly lg:gap-4 ">
                <p className="lg:w-[30%] lg:m-auto  ">Profile picture</p>
                <div className="bg-[#EFEBFF] w-[75%] lg:w-[30%] p-16 rounded-lg flex flex-col gap-2 mt-4 mb-6">
                    <Image src={upload} alt='uploadImage' width={30} height={30} className="m-auto" />
                    <p className="font-bold text-[#633BFF] text-xs text-center lg:w-24 lg:ml-[-1.5rem] ">+ Upload Image</p>
                </div>
                <p className="pr-2 lg:pr-0 lg:w-[20rm] lg:m-auto  ">Image must be below 1024x1024px. Use PNG or JPG format.</p>
            </div>
            <div className="bg-[#FAFAFA] p-6 mb-6 w-[88%] lg:w-[90%] m-auto rounded-lg ">
                <form className="flex flex-col gap-2 lg:gap-4 ">
                    <div className="flex flex-col lg:flex-row lg:justify-between">
                        <label className="lg:w-[35%] ">First name*</label>
                        <input name="" id="" type="" className="py-3 lg:py-2 lg:w-[65%] border border-[#737373] rounded-lg 
                        outline-none pl-3 " placeholder="e.g John" />
                    </div>
                    <div className="flex flex-col lg:flex-row lg:justify-between">
                        <label className="lg:w-[35%] ">Last name*</label>
                        <input name="" id="" type="" className="py-3 lg:py-2 lg:w-[65%] border border-[#737373] rounded-lg 
                        outline-none pl-3 " placeholder="e.g Appleseed" />
                    </div>
                    <div className="flex flex-col lg:flex-row lg:justify-between">
                        <label className="lg:w-[35%] ">Email</label>
                        <input name="" id="" type="" className="py-3 lg:py-2 lg:w-[65%] border border-[#737373] rounded-lg 
                        outline-none pl-3 " placeholder="e.g email@example.com" />
                    </div>
                </form>
            </div>

            <hr className="mb-6" />
            <div className="w-[88%] lg:w-[10%] lg:float-end m-auto mb-6">
                <button className="bg-[#633BFF] text-white w-[100%] rounded-lg py-4 lg:py-1.5 ">Save</button>
            </div>
            </div>
            
        </div>
    )
};

export default profileDetailsPage;