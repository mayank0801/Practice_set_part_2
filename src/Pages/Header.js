import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h1>TODO</h1>
      <NavLink to="/">Home</NavLink> ||
      <NavLink to="/open">Open Todo</NavLink> ||
      <NavLink to="/done">Done Todo</NavLink>
    </div>
  );
}
