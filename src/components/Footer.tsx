import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="max_width">
          <ul>
            <li>Copyright 2023</li>
            <li>
              <NavLink to='/about'>
                关于我们
              </NavLink>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
