import React from "react";
import GooglePayIcon from "../../assets/svg/google-pay.svg";
import ApplePayIcon from "../../assets/svg/apple-pay.svg";
import SEPAIcon from "../../assets/svg/sepa.svg";
import VisaIcon from "../../assets/svg/visa.svg";
import MastercardIcon from "../../assets/svg/mastercard.svg";
import EtheriumIcon from "../../assets/svg/etherium.svg";
import BitcoinIcon from "../../assets/svg/bitcoin.svg";
import TetherIcon from "../../assets/svg/tether.svg";

const companiesData = [
  {
    label: "Google Pay",
    icon: GooglePayIcon,
  },
  {
    label: "Apple Pay",
    icon: ApplePayIcon,
  },
  {
    label: "SEPA",
    icon: SEPAIcon,
  },
  {
    label: "Visa",
    icon: VisaIcon,
  },
  {
    label: "Mastercard",
    icon: MastercardIcon,
  },
  {
    label: "Etherium",
    icon: EtheriumIcon,
  },
  {
    label: "Bitcoin",
    icon: BitcoinIcon,
  },
  {
    label: "Tether",
    icon: TetherIcon,
  },
];
const Section3 = () => {
  return (
    <div className="section-3">
      <button className="deposit-button">Deposit Now</button>
      <div className="companies">
        {companiesData.map((company, i) => (
          <img
            key={i}
            className="company"
            src={company.icon}
            alt={company.label}
          />
        ))}
      </div>
    </div>
  );
};

export default Section3;
