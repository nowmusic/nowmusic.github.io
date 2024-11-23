import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="btn-wrapper">
      <Link class="btn home-btn" to="/how-are-you">
        시작하기
      </Link>
    </div>
  );
}
