import { Link } from "@remix-run/react";

export default function Navigation() {
  return (
    <div className="navigation">
      <div>
        <h1>Alpri Else</h1>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
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
    </div>
  );
}
