import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="nav">
      <ul className="list">
        <li className="item">
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
