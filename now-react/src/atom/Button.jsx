import { Link } from "react-router-dom";
export default function Button({ path, message }) {
  return (
    <Link class="btn" to={path}>
      {message}
    </Link>
  );
}
