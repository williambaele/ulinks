import React from "react";
import { Link } from "react-router-dom";

const ClientRow = ({ link }) => {
  return (
    <Link to={link.link}>
      <div className="flex items-center justify-center my-2 bg-gray-200 shadow-sm cursor-pointer h-14 rounded-2xl hover:scale-105">
        <p>{link.title}</p>
      </div>
    </Link>
  );
};

export default ClientRow;
