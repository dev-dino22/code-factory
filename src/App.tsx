import { useNavigate } from "react-router";
import { ROUTE_PATH } from "./routes/routePath";

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>체험하러 가기</h1>
      <button onClick={() => navigate(ROUTE_PATH.ANIMATION)}>
        클릭 시 트랜지션 애니메이션 체험 페이지로 이동
      </button>
    </div>
  );
}

export default App;
