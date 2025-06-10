import { Inter } from "next/font/google";
import Login from "./login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={` bg-white w-full h-screen md:bg-[#FAFAFA] lg:bg-[#FAFAFA] ${inter.className} text-[#333333]`}>
      <Login />
    </main>
  );
}
