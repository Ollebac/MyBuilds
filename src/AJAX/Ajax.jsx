import React, { useEffect, useState, useRef } from "react";
import "./Ajax.css";

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const Ajax = () => {
  const [country, setCountry] = useState({
    name: "United States",
    capital: "Washington D.C.",
    unMember: true,
    area: 9372610,
    population: 329484123,
    map: "https://goo.gl/maps/JqiipHgFboG3rBJh9",
    flagSrc: "https://flagcdn.com/us.svg",
  });

  const [active, setActive] = useState("Intro");

  const [items, setItems] = useState([]);

  const [currentTime, setCurrentTime] = useState("loading...");
  const [currentBitcoin, setCurrentBitcoin] = useState({
    lastUpdate: "loading...",
    usdPrice: "loading...",
    gbpPrice: "loading...",
    eurPrice: "loading...",
  });

  const AjaxIntro = () => {
    return (
      <>
        <div
          className={active === "Intro" ? "ajax_intro_container" : "inactive"}
        >
          <h3>
            This page is all about fetching from various APIs. Click a link on
            the left to begin.
          </h3>

          <h4>Countries API:</h4>
          <p>Select a country to get the following info:</p>
          <ul>
            <li>Capital</li>
            <li>UN Member</li>
            <li>Area</li>
            <li>Population</li>
            <li>Location on Map</li>
            <li>Image of Flag</li>
          </ul>

          <h4>League API</h4>
        </div>
      </>
    );
  };

  const CountryDetails = () => {
    return (
      <div className={active === "Countries" ? "" : "inactive"}>
        <div className="selector_container">
          <select
            className="country_selector"
            onChange={(e) =>
              setCountry(
                items.find((c) => c.name === e.target.value.toString())
              )
            }
          >
            <option>United States</option>
            {items.map((item) => (
              <option value={item.name}>{item.name}</option>
            ))}
          </select>
        </div>
        <div className="country_content">
          <div className="split_content">
            <h1 className="country_name">{country.name}</h1>
            <span className="detail_container">
              <h4 className="detail_title">Capital: </h4>
              <p className="details">{country.capital}</p>
            </span>
            <span className="detail_container">
              <h4 className="detail_title">United Nations Member: </h4>
              <p className="details">{country.unMember ? "Yes" : "No"}</p>
            </span>
            <span className="detail_container">
              <h4 className="detail_title">Area: </h4>
              <p className="details">{country.area} sq. km</p>
            </span>
            <span className="detail_container">
              <h4 className="detail_title">Population: </h4>
              <p className="details">{country.population} people</p>
            </span>
            <span className="detail_container">
              <h4 className="detail_title">Map Location: </h4>
              <a className="details" href={country.map}>
                Click Here
              </a>
            </span>
          </div>
          <div className="split_content">
            <img
              className="country_flag"
              src={country.flagSrc}
              alt={`${country.name} flag`}
            />
          </div>
        </div>
      </div>
    );
  };

  const Bitcoin = () => {
    return (
      <div className={active === "Bitcoin" ? "bitcoin_container" : "inactive"}>
        <div className="bitcoin_title_container">
          <h1 className="bitcoin_title_text">Bitcoin Data</h1>
          <p className="bitcoin_title_text">
            {" "}
            (Data fetches performed every 5 minutes)
          </p>
          <button
            onClick={() => {
              getBitcoinData();
            }}
          >
            Update Data Now
          </button>
        </div>
        <span className="detail_container">
          <h4 className="detail_title">Current Time: </h4>
          <p className="details">{currentTime}</p>
        </span>
        <span className="detail_container">
          <h4 className="detail_title">Last Update: </h4>
          <p className="details">{currentBitcoin.lastUpdate}</p>
        </span>
        <span className="detail_container">
          <h4 className="detail_title">Price (USD):</h4>
          <p className="details">{currentBitcoin.usdPrice}</p>
        </span>
        <span className="detail_container">
          <h4 className="detail_title">Price (British Pound):</h4>
          <p className="details">{currentBitcoin.gbpPrice}</p>
        </span>
        <span className="detail_container">
          <h4 className="detail_title">Price (Euro): </h4>
          <p className="details">{currentBitcoin.eurPrice}</p>
        </span>
      </div>
    );
  };

  function getBitcoinData() {
    fetchData("https://api.coindesk.com/v1/bpi/currentprice.json").then(
      (data) => {
        setCurrentBitcoin({
          lastUpdate: data.time.updated,
          usdPrice: data.bpi.USD.rate_float.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          }),
          gbpPrice: data.bpi.GBP.rate_float.toLocaleString("en-US", {
            style: "currency",
            currency: "GBP",
          }),
          eurPrice: data.bpi.EUR.rate_float.toLocaleString("en-US", {
            style: "currency",
            currency: "EUR",
          }),
        });
      }
    );
  }

  //Country Data Setup
  useEffect(() => {
    let countryMap = [];
    fetchData("https://restcountries.com/v3.1/all").then((data) => {
      data.forEach((country) => {
        const countryData = {
          name: country.name.common,
          capital: country.capital,
          unMember: country.unMember,
          area: country.area,
          population: country.population,
          map: country.maps.googleMaps,
          flagSrc: country.flags.svg,
        };
        countryMap.push(countryData);
      });
      countryMap.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );
      setItems(countryMap);
    });

    let itemMap = [];
  }, []);

  //Bitcoin Data Setup
  useEffect(() => {
    getBitcoinData();
    setInterval(() => {
      const date = new Date();
      let hour = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      let amPm = "AM";

      if (hour >= 12) {
        hour = hour - 12;
        amPm = "PM";
      }
      if (hour === 0) {
        hour = 12;
      }

      if (minutes % 5 == 1) {
        getBitcoinData();
      }

      hour = hour < 10 ? "0" + hour : hour;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      const time = `${hour}:${minutes}:${seconds} ${amPm}`;
      setCurrentTime(time);
    }, 1000);
  }, []);

  return (
    <section className="ajax_page_container">
      <div className="header_container">
        <div className="header_background"></div>
        <img className="header_gif" src="/favicon.gif" alt="Running Tiger" />
      </div>
      <main className="ajax_page_content">
        <ul className="side_menu">
          <li
            className="menu_item"
            onClick={() => {
              setActive("Intro");
            }}
          >
            Home
          </li>
          <li
            className="menu_item"
            onClick={() => {
              setActive("Countries");
            }}
          >
            Countries API
          </li>
          <li
            className="menu_item"
            onClick={() => {
              setActive("Bitcoin");
            }}
          >
            Bitcoin
          </li>
        </ul>

        {}
        <AjaxIntro />
        <CountryDetails />
        <Bitcoin />
      </main>
    </section>
  );
};

export default Ajax;
