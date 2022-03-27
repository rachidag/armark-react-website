import React from "react";
import './service.scss';

const Service = ({ icon, title, children }) => {
  return (
    <div className="service">
      <span>{icon}</span>
      <h4>{title}</h4>
      <p>{children}</p>
    </div>
  );
};

export default Service;
