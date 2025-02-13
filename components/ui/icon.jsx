"use client";
const Icon = ({ name, className = "", onClick = () => {} }) => {
  return <i className={`icon-${name} ${className}`} onClick={onClick} />;
};

export default Icon;
