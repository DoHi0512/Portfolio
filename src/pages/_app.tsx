import { Header } from "@/components/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { atom, RecoilRoot } from "recoil";
export const ScrollState = atom({
  key: "scroll",
  default: 0,
});
export const PageState = atom({
  key: "page",
  default: 0,
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
//
