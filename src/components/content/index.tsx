import { PageState } from "@/pages/_app";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { Detail } from "../detail";
import { Explain } from "../explain";
interface ContentProps {
  title: string;
  img: string;
  sentence: string;
  desc: string;
  homepage?: string;
  github?: string;
  youtube?: string;
}
export const Content = (data: ContentProps) => {
  const [page, setPage] = useRecoilState(PageState);

  return <>{page ? <Detail /> : <Explain {...data} />}</>;
};
