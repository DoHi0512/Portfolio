import FadeIn from "react-fade-in/lib/FadeIn";
export const Detail = () => {
  return (
    <FadeIn className="flex justify-center items-center">
      <div className="mt-[1rem] w-full h-[85%] grid grid-cols-3">
        <div className="template">
          <div className="title">사용 기술</div>
          <div className="icon-box">
            <img src="/react.webp" />
            <span>React.js</span>
          </div>
          <div className="icon-box">
            <img src="/nextjs.png" />
            <span>Next.js</span>
          </div>
        </div>
        <div className="template">
          <div className="title">기여도</div>
          <span>야무지게 개발에 참여함</span>
        </div>
        <div className="template">
          <div className="title">프로젝트 상세</div>
          <span>개발 기간 : 2022.08.13 ~ 2022.10.23</span>
          <span>개발 기간 : 2022.08.13 ~ 2022.10.23</span>
          <span>개발 기간 : 2022.08.13 ~ 2022.10.23</span>
        </div>
      </div>
    </FadeIn>
  );
};
