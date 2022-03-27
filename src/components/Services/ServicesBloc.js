import React from "react";
import Service from "./Service";
import "./services_bloc.scss";
import { servicesList } from '../../data.js';

const ServicesBloc = () => {
  return (
    <div className="services-list">
      <div className="container">
        <div className="row">

          {servicesList.map(service => {
            return (
              <div className="col-lg-4 col-md-6" key={service.id}>
                <Service icon={service.icon} title={service.title}>
                  {service.desc}
                </Service>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  );
};

export default ServicesBloc;
