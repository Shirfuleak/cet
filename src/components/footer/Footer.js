import React from "react";

const Footer = () => {
  return (
    <div className="container mt-5 text-dark">
      <div className="card ">
        <h3 className="px-3 py-2">Helpdesk Information:</h3>
        <p className="px-3 font-weight-bold">
          1) Candidates have to register and complete their candidate profile
          first to raise a ticket through the Helpdesk Ticketing System.
          <br></br>2)For the candidates, who are facing any issues in
          registration and are unable to create their profile, please contact
          the below helpdesk numbers:
          <br></br> 07969134401 07969134402 18002090191<br></br>
          Helpdesk Timings: 09:00 am to 06:00 pm (All Days except Public
          Holidays)
        </p>
      </div>
      <h1 className="text-center font-weight-bold my-4">Office Address</h1>
      <p className="text-center font-weight-bold">
        8th Floor, New Excelsior Building, A. K. Nayak Marg, Fort, Mumbai 400001
      </p>
    </div>
  );
};

export default Footer;
