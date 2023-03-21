import * as S from "./style";
export const Detail = () => {
  return (
    <S.DetailLayout>
      <S.DetailBox>
        <S.Template>
          <S.Title>사용 기술</S.Title>
          <S.IconBox>
            <img src="/react.webp" />
            <span>React.js</span>
          </S.IconBox>
          <S.IconBox>
            <img src="/nextjs.png" />
            <span>Next.js</span>
          </S.IconBox>
        </S.Template>
        <S.Template>
          <S.Title>기여도</S.Title>
          <span>야무지게 개발에 참여함</span>
        </S.Template>
        <S.Template>
          <S.Title>프로젝트 상세</S.Title>
          <span>개발 기간 : 2022.08.13 ~ 2022.10.23</span>
        </S.Template>
      </S.DetailBox>
    </S.DetailLayout>
  );
};
