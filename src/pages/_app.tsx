import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { atom, RecoilRoot } from "recoil";
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
