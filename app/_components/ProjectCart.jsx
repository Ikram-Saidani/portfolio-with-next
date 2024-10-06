import Link from "next/link";
import React from "react";

function ProjectCart({ item }) {
  return (
    <div>
      <img src={item.image} alt=".." />
      
        <h2>{item.title}</h2>
        <Link href={item.githubUrl}>{item.githubUrl}</Link>
      
    </div>
  );
}

export default ProjectCart;
