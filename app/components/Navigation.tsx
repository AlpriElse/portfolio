import { Link } from "remix";

export default function Navigation() {
  return (
    <div className="navigation">
      <ul>
        <li>
          <Link to="/#about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/writing">Writing</Link>
        </li>
      </ul>
    </div>
  );
}
