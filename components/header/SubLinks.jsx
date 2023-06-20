import React from "react";

const SubLinks = ({linkTitle}) => {
  return (
    <div className='p-3 px-6 hover:text-transparent hover:border-green-500/[0.7] hover:translate-y-[-3px] rounded-lg border-b border-green-500/[0.4] cursor-pointer transition-all bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-500  to-green-600'>{linkTitle}</div>
  );
};

export default SubLinks;
