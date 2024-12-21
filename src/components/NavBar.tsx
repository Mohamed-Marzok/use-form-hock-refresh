import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex gap-4 p-4 bg-gray-100 w-full border">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-lg font-medium ${
            isActive
              ? "text-blue-600 font-bold border-b-2 border-blue-600"
              : "text-blue-500 hover:text-blue-600"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/sign"
        className={({ isActive }) =>
          `text-lg font-medium ${
            isActive
              ? "text-blue-600 font-bold border-b-2 border-blue-600"
              : "text-blue-500 hover:text-blue-600"
          }`
        }
      >
        Sign
      </NavLink>
    </div>
  );
}
