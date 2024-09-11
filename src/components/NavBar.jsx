import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div>
      <ul className="flex gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/sign-in">SignIn</Link>
        </li>
        <li>
          <Link to="/sign-out">SignOut</Link>
        </li>
      </ul>
    </div>
  );
}
