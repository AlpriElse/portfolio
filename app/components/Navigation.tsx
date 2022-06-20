import { Link } from "@remix-run/react";

import useDevice, { DeviceType } from "../hooks/useDevice";

export default function Navigation() {
  const { deviceType } = useDevice();

  const navigation = (
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
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );

  if (deviceType == DeviceType.MOBILE) {
    //  TODO: Implement collapsable menu
    return null;
  }

  return navigation;
}
