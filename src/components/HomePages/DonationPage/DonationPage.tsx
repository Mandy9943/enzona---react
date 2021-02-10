import React from "react";
import ListDonations from "./ListDonatios/ListDonations";
import "./DonationPage.css";
import HeaderBar from "../../HeaderBar/HeaderBar";
const DonationPage = () => {
  return (
    <div className="donation-page">
      <HeaderBar backPath="/home" />
      <div
        className="donation-image"
        style={{
          backgroundImage: "url(/dist/images/donation.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <ListDonations />
    </div>
  );
};

export default DonationPage;
