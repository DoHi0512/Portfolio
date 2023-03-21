import * as S from "./style";
import {
  AiOutlineUser,
  AiOutlineCalendar,
  AiOutlineMail,
} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { useRecoilState } from "recoil";
import { BiPhoneCall, BiPencil } from "react-icons/bi";
import { ScrollState } from "@/pages/_app";
import FadeIn from "react-fade-in";
import { Header } from "@/components/header";
export const AboutPage = () => {
  const [scroll, setScroll] = useRecoilState(ScrollState);
  return (
    <>
      <S.AboutLayout>
        <S.AboutBox>
          <FadeIn
            visible={scroll == 1 ? true : false}
            transitionDuration={1000}
            delay={50}
            className="w-full grid lg:grid-cols-3 gap-[2rem] gap-y-[7rem] grid-cols-2"
          >
            <S.Template>
              <S.ExpBox>
                <S.Icon>
                  <AiOutlineUser className="w-[3rem] h-[3rem]" />
                </S.Icon>
                <S.Explain>이름</S.Explain>
              </S.ExpBox>
              <S.Desc>이동훈</S.Desc>
            </S.Template>
            <S.Template>
              <S.ExpBox>
                <S.Icon>
                  <AiOutlineCalendar className="w-[3rem] h-[3rem]" />
                </S.Icon>
                <S.Explain>생일</S.Explain>
              </S.ExpBox>
              <S.Desc>2005.05.12</S.Desc>
            </S.Template>
            <S.Template>
              <S.ExpBox>
                <S.Icon>
                  <CiLocationOn className="w-[3rem] h-[3rem]" />
                </S.Icon>
                <S.Explain>주소지</S.Explain>
              </S.ExpBox>
              <S.Desc>광주광역시 서구</S.Desc>
            </S.Template>
            <S.Template>
              <S.ExpBox>
                <S.Icon>
                  <BiPhoneCall className="w-[3rem] h-[3rem]" />
                </S.Icon>
                <S.Explain>연락처</S.Explain>
              </S.ExpBox>
              <S.Desc>010-5773-2408</S.Desc>
            </S.Template>
            <S.Template>
              <S.ExpBox>
                <S.Icon>
                  <AiOutlineMail className="w-[3rem] h-[3rem]" />
                </S.Icon>
                <S.Explain>이메일</S.Explain>
              </S.ExpBox>
              <S.Desc>202110309@bssm.hs.kr</S.Desc>
            </S.Template>
            <S.Template>
              <S.ExpBox>
                <S.Icon>
                  <BiPencil className="w-[3rem] h-[3rem]" />
                </S.Icon>
                <S.Explain>학력</S.Explain>
              </S.ExpBox>
              <S.Desc>부산소프트웨어마이스터고</S.Desc>
            </S.Template>
          </FadeIn>
        </S.AboutBox>
      </S.AboutLayout>
    </>
  );
};
