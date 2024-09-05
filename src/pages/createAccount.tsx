import Link from "next/link"
import Image from "next/image"
import devlink from "../asset/devlink.svg";

export default function CreateAccount () {
    return (
    <main className="bg-white h-[100vh] md:bg-[#FAFAFA] lg:bg-[#FAFAFA]">
      <div className="pt-[6rem] md:pt-[14rem] lg:pt-[2rem]  ">
        <div className="flex flex-row gap-2 ml-5 lg:justify-center">
            <Image src={devlink} alt="devlink" width={500} height={300} className="mb-[2.5rem] w-9" />
            <h1 className="font-bold text-3xl md:text-center lg:text-center mb-[0.6rem] 
            md:mb-[2rem] lg:mb-[2rem] ">devlinks</h1>
        </div>

        <div className="bg-white md:w-[60%] lg:w-[35%] m-auto p-8 md:rounded-xl lg:rounded-xl 
        ">
          <h1 className="font-bold text-3xl mb-2">Create Account</h1>
          <p className="mb-6">Lets get you started sharing your links!</p>
          <form className="flex flex-col text-[#737373] gap-1 ">
            <>
              <label>Email address</label>
              <input type="text"  
              className="w-[100%] py-[8px] lg:py-[7px] border-[1px] border-[#D9D9D9] pl-2
              rounded-lg text-xs focus:border-[1px] focus:border-[#633BFF] focus:shadow-lg focus:outline-none
              text-[16px] sm:text-[16px] md:text-sm lg:text-sm" 
              placeholder="e.g alex@email.com" required/>
            </>
            
            <>
              <label className="mt-3">Create Password</label>
              <input type="text"  className="w-[100%] py-[8px] lg:py-[7px] border-[1px] border-[#D9D9D9] pl-2
              rounded-lg text-xs focus:border-[1px] focus:border-[#633BFF] focus:shadow-lg focus:outline-none
              text-[16px] sm:text-[16px] md:text-sm lg:text-sm" 
              placeholder="At least 8 characters" required/>
            </>

            <>
              <label className="mt-3">Confirm Password</label>
              <input type="text"  className="w-[100%] py-[8px] lg:py-[7px] border-[1px] border-[#D9D9D9] pl-2
              rounded-lg text-xs focus:border-[1px] focus:border-[#633BFF] focus:shadow-lg focus:outline-none
              text-[16px] sm:text-[16px] md:text-sm lg:text-sm" 
              placeholder="At least 8 characters" required/>
            </>
            <p className="mt-4">Password must contain at least 8 characters</p>
            <button className="bg-[#633BFF] text-white my-4 py-[7px] rounded-lg ">Create new account</button>
          </form>
            <p className="text-center">Do not have an account? 
                <Link href='/' className="text-[#633BFF] "> Login</Link></p>
        </div>
      </div>
    </main>
    )
};
