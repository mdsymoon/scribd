import './Service.css';
import React from "react";
import serviceData from "../../data/data";
const Service = () => {
  return (
    <main >
      <div className="container">
        <h1 className="text-center my-5">All in one simple subscription</h1>
        <div className="row text-center mt-5">
        {
            serviceData.map((item) => {
                return <div className="col-sm-6 col-md-4 col-lg-2" >
                    {item.icon}
                    <p className="fs-5">{item.title}</p>
                 </div>
            })
        }
        </div>
      </div>
      <div className="py-5 mt-5 text-center" style={{backgroundColor: "#FAFBFD"}}>
          <h3>Scribd is overall the best ans most convenient deal for <br/> online reading.</h3>
          <p className="mt-3 fs-5">Business Insider</p>
      </div>
    </main>
  );
};

export default Service;
