"use client";
import React from "react";
import Link from "next/link";
import "./login.css";
import { usePathname } from "next/navigation";

function layout({ children }) {
  const pathName = usePathname();
  return (
    <>
      <ul className="login-menu">
        {pathName !== "/login/TeacherLogin" &&
        pathName !== "/login/StudentLogin" ? (
          <>
            <li>
              <Link href="/login/">Login </Link>
            </li>
            <li>
              <Link href="/login/StudentLogin"> StudentLogin</Link>
            </li>

            <li>
              <Link href="/login/TeacherLogin">Teacher login main</Link>
            </li>
          </>
        ) : (
          <li>
            <Link href="/login/">Login </Link>
          </li>
        )}
      </ul>
      {children}
    </>
  );
}

export default layout;
