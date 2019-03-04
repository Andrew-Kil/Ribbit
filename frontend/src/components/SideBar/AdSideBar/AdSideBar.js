import React from "react";

import "./AdSideBar.css";

import geico from "./geico-ad.jpg";
import snickers from "./snickers-ad.jpg";
import tobasco from "./tobasco-ad.jpg";
import starbucks from "./starbucks-ad.png";
import mcdonalds from "./mcdonalds-ad.jpg";
import coke_zero from "./coke-zero-ad.jpeg";
import adidas from "./adidas.jpg";

const ads = [geico, snickers, tobasco, starbucks, mcdonalds, coke_zero, adidas];
const randomAd = ads[Math.floor(Math.random() * ads.length)];

console.log(Math.floor(Math.random() * 2));
// # from 0-1

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
            <img src={randomAd} alt="geico ad" className="ad" />
          </div>
        </div>
      </div>
    </div>
  );
}
