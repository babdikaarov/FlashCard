import { NavLink } from "react-router-dom";

import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/topics">Topics</NavLink>
          </li>
          <li>
            <NavLink to="/quizzes">Quizzes</NavLink>
          </li>
          <li>
            <NavLink to="/quizzes/new">New Quiz</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
