import {
  AiOutlineUser,
  AiOutlineCalendar,
  AiOutlineMail,
} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BiPhoneCall, BiPencil } from "react-icons/bi";
export const AboutData = [
  { title: "이름", desc: "이동훈", icon: <AiOutlineUser /> },
  { title: "생일", desc: "2005.05.12", icon: <AiOutlineCalendar /> },
  { title: "주소지", desc: "광주광역시 서구", icon: <CiLocationOn /> },
  { title: "연락처", desc: "010-5773-2408", icon: <BiPhoneCall /> },
  { title: "이메일", desc: "202110309@bssm.hs.kr", icon: <AiOutlineMail /> },
  { title: "학력", desc: "부산소프트웨어마이스터고", icon: <BiPencil /> },
];
