import styled from "@emotion/styled";
import FadeTransition from "../shared/animation/FadeTransition";
import { useShowToast } from "../shared/Toast/ToastProvider";

function Animation() {
  const showToast = useShowToast();
  return (
    <section>
      <h1>트랜지션 애니메이션 페이지</h1>
      <S.FadeContainer>
        <h2>Fade Transition 컴포넌트 영역</h2>
        <FadeTransition>
          <button
            onClick={() =>
              showToast({
                mode: "SUCCESS",
                message: "토스트가 사라질 때를 보세요!😃",
              })
            }
          >
            Show Toast
          </button>
        </FadeTransition>
      </S.FadeContainer>
    </section>
  );
}

export default Animation;

const S = {
  FadeContainer: styled.div``,
};
