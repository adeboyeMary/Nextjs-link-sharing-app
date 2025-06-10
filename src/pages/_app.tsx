import "@/styles/globals.css";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import Header from "@/components/header";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const showHeaderOn = ['/homePage', '/profileDetailsPage'];
  const shouldShowHeader = showHeaderOn.includes(router.pathname);


  return  (
    <>
      {shouldShowHeader && <Header />}
      <Component {...pageProps} />;
    </>
  )
}
