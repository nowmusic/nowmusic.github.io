import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav class="nav">
      <ul class="list">
        <li class="item">
          <Link class="link" to="/">
            Home
          </Link>
        </li>
        <li class="item">
          <Link class="link" to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
