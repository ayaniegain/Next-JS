import React from "react";
import Link from "next/link";

function StudentList() {
  const studentlist=["Anil","sam","peter"]
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {
          studentlist.map((e)=>
          <li>
          <Link href={`/studentlist/${e}`}>{e}</Link>
          </li>
      )  }
      </ul>
    </div>
  );
}

export default StudentList;

       