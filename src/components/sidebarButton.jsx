import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function sidebarButton({type,page,clicked,tag,icon}) {
    const navigate= useNavigate();
  return type ? (
    <button
      className={` w-32 p-2 flex items-center ${
        {clicked} ? " bg-blue-600 border rounded-md" : " hover:bg-slate-600"
      }`}
      onClick={()=>navigate(`/${page}`)}
    >
      <span>{tag}</span>
    </button>
  ) : (
    <button
      className={`flex space-x-0.5 p-2 ${
        {clicked} ? " bg-blue-600 border rounded-md" : " hover:bg-slate-600"
      }`}
      onClick={() => navigate(`/${page}`)}
    >
      {icon}
      <span>{tag}</span>
    </button>
  );
}

