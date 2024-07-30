import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import devlink from "../asset/devlink.svg";
import email from "../asset/email.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={` bg-white w-full h-screen md:bg-[#FAFAFA] lg:bg-[#FAFAFA] ${inter.className} text-black`}>
      <div className="pt-[6rem] md:pt-[14rem] lg:pt-[4rem]  ">
        <div className="flex flex-row gap-2 ml-5 md:justify-center lg:justify-center ">
            <Image src={devlink} alt="devlink" width={500} height={300} className="mb-[2.5rem] w-9" />
            <h1 className="font-bold text-3xl md:text-center lg:text-center mb-[0.6rem] 
            md:mb-[2rem] lg:mb-[1.8rem] ">devlinks</h1>
        </div>

        <div className="bg-white md:w-[60%] lg:w-[35%] m-auto p-8 md:rounded-xl lg:rounded-xl text-sm md:text-base ">
          <h1 className="font-bold text-3xl mb-2">Login</h1>
          <p className="mb-5">Add your details below to get back into the app</p>
          <form className="flex flex-col text-[#737373] gap-2 ">
            <>
              <label>Email address</label>
              <input className="w-[100%] py-[8px] lg:py-[7px] border-[1px] border-[#D9D9D9] rounded-lg text-sm pl-2
              focus:border-[1px] focus:border-[#633BFF] focus:shadow-lg focus:outline-none " 
              placeholder="e.g alex@email.com"  required />
            </>
            
            <>
              <label className="mt-3">Password</label>
              <input className="w-[100%] py-[8px] lg:py-[7px] border-[1px] border-[#D9D9D9] rounded-lg text-sm pl-2
              focus:border-[1px] focus:border-[#633BFF] focus:shadow-lg focus:outline-none"
              placeholder="Enter your password" required />
            </>
            <Link href="/homePage">
              <button className="bg-[#633BFF] text-white my-4 py-[7px] rounded-lg ">Login</button>
            </Link>
          </form>
            <p className="text-center">Do not have an account? <Link href='/createAccount' className="text-[#633BFF] ">Create account</Link></p>
        </div>
      </div>
    </main>
  );
}
