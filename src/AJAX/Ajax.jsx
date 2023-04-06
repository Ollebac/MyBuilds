import React, { useEffect, useState } from "react";
import "./Ajax.css";

const setCountrySelector = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
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

  const [items, setItems] = useState([]);

  const CountryDetails = () => {
    return (
      <>
        <div className="sidebyside">
          <h1 className="country_name">{country.name}</h1>
          <span className="detail_container">
            <h4 className="country_detail_title">Capital: </h4>
            <p className="country_details">{country.capital}</p>
          </span>
          <span className="detail_container">
            <h4 className="country_detail_title">United Nations Member: </h4>
            <p className="country_details">{country.unMember ? "Yes" : "No"}</p>
          </span>
          <span className="detail_container">
            <h4 className="country_detail_title">Area: </h4>
            <p className="country_details">{country.area} sq. km</p>
          </span>
          <span className="detail_container">
            <h4 className="country_detail_title">Population: </h4>
            <p className="country_details">{country.population} people</p>
          </span>
          <span className="detail_container">
            <h4 className="country_detail_title">Map Location: </h4>
            <a className="country_details" href={country.map}>
              Click Here
            </a>
          </span>
        </div>
        <div className="sidebyside">
          <img
            className="country_flag"
            src={country.flagSrc}
            alt={`${country.name} flag`}
          />
        </div>
      </>
    );
  };

  useEffect(() => {
    let countryMap = [];
    setCountrySelector().then((data) => {
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
  }, []);

  useEffect(() => {
    console.log(`New country: ${country}`);
  }, [country]);

  return (
    <section className="ajax_page_container">
      <div className="header_container">
        {/* <img
          className="header_background"
          src="/Ajax/landscape.jpg"
          alt="Landscape for Tiger"
        /> */}
        <div className="header_background"></div>
        <img className="header_gif" src="/favicon.gif" alt="Running Tiger" />
      </div>
      <main className="ajax_page_content">
        <h3>
          This page is all about fetching from various APIs. Click a link on the
          left to begin.
        </h3>
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
        <div className="country_container">
          <CountryDetails />
        </div>
      </main>
    </section>
  );
};

export default Ajax;
