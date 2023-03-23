import styles from "./navbar.module.scss";

import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl disabled">
            TaskManager
          </a>
        </div>
        <div className="flex-start">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/edit">Edit Tasks</Link>
            </li>
            <li>
              <Link href="/tasks/new">Create</Link>
            </li>
            <li>
              <Link href="/tasks/completed">Completed</Link>
            </li>
            {
              /* <li tabIndex={0}>
        <a>
          Parent
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li> */
            }
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
