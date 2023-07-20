import React from "react";

function Student() {
  return <div>Student page</div>;
}

export default Student;

export function generateMetadata() {
  return {
    title: "student data",
    description: "student page"
  };
}
