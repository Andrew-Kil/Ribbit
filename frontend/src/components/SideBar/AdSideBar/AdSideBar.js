import React from "react";

import "./AdSideBar.css";

import geico from "./ads/geico-ad.jpg";
import snickers from "./ads/snickers-ad.jpg";
import tobasco from "./ads/tobasco-ad.jpg";
import starbucks from "./ads/starbucks-ad.png";
import mcdonalds from "./ads/mcdonalds-ad.jpg";
import coke_zero from "./ads/coke-zero-ad.jpeg";
import adidas from "./ads/adidas.jpg";
import tesla from "./ads/tesla.jpg";
import progressive from "./ads/progressive.png";

const ads = [
  geico,
  snickers,
  tobasco,
  starbucks,
  mcdonalds,
  coke_zero,
  adidas,
  tesla,
  progressive
];

const randomAd = ads[Math.floor(Math.random() * ads.length)];

export default function AdSideBar() {
  return (
    <div>
      <div className="ad-side-bar">
        <div className="ad-side-bar-padding">
          <div className="ad-side-bar-body">
            <span className="ad-side-bar-body-header">ADVERTISEMENT</span>
            <span className="ad-side-bar-body-text">
              (refresh to see new ad)
            </span>
            <br />
            <br />
            <img src={randomAd} alt="random ad is shown" className="ad" />
          </div>
        </div>
      </div>
    </div>
  );
}
