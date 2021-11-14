import React, { useEffect, useState, usePrevious } from "react";
// import { Link } from "react-router-dom";
import "../assets/styles/home.css";
import Payment from "./Payment";

const url = "https://restcountries.com/v3.1/all";

const Home = () => {
  const [data, setdata] = useState([]);
  // const [select, setselect] = useState(false);
  // const prevsel = usePrevious(select)


  // const check = (selected) => {
  //   setselect(true);
  //   if(prevsel == 'false' && select=='true')
  // }

  const fetchurl = async () => {
    const resp = await fetch(url);
    const countries = await resp.json();
    setdata(countries);
  };
  
  const searchcountry = (e) => {
    const { value } = e.target;
    const name = document.querySelectorAll(".name");
    const cont = document.querySelectorAll(".cont");
    console.log(cont);

    name.forEach((name) => {
      if (name.innerText.toLowerCase().includes(value.toLowerCase())) {
        name.parentElement.parentElement.parentElement.style.display = "block";
      } else {
        name.parentElement.parentElement.parentElement.style.display = "none";
      }
    });
  };

  useEffect(() => {
    fetchurl();
  }, []);

  return (
    <div className="home_body">
      <h1 className="main_heading">Where in the world?</h1>
      <form>
        <input
          type="text"
          className="home_input"
          placeholder="Search for a country"
          id="search"
          onChange={searchcountry}
        />
      </form>
      <div className="home_maincont">
        {data.map((country) => {
          const { name, population, region, capital, flags } = country;

          return (
            <div className="home_cont">
              <img src={flags.png}></img>
              <div className="content_cont">
                <Payment
                  name={name}
                  population={population}
                  region={region}
                  capital={capital}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
