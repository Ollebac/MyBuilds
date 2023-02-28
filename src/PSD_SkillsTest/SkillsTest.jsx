import "./SkillsTest.css";
import { useState } from "react";

const MountainsLogo = () => {
  return (
    <img
      className="mountain_image"
      src="skillsTest/Mountain Logo.png"
      alt="mountains_logo"
    />
  );
};

const mountainOne = () => {
  return (
    <div className="mountain_one_background">
      <div className="desktop_margins">
        <div className="mountain_schedule_container">
          <h3 className="schedule_header">SCHEDULE #1</h3>
          <table className="schedule_container">
            <tr>
              <td>25 Nov 2016</td>
              <td>Vestibulum viverra</td>
            </tr>
            <tr>
              <td>28 Nov 2016</td>
              <td>Vestibulum viverra</td>
            </tr>
            <tr>
              <td>18 Dec 2016</td>
              <td>Vestibulum viverra</td>
            </tr>
            <tr>
              <td>7 Jan 2017</td>
              <td>Vestibulum viverra</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

const mountainTwo = () => {
  return (
    <div className="mountain_two_background">
      <div className="desktop_margins">
        <div className="mountain_schedule_container">
          <h3 className="schedule_header">SCHEDULE #2</h3>
          <table className="schedule_container">
            <tr>
              <td>25 Nov 2016</td>
              <td>Vestibulum viverra</td>
            </tr>
            <tr>
              <td>28 Nov 2016</td>
              <td>Vestibulum viverra</td>
            </tr>
            <tr>
              <td>18 Dec 2016</td>
              <td>Vestibulum viverra</td>
            </tr>
            <tr>
              <td>7 Jan 2017</td>
              <td>Vestibulum viverra</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

const HistoryPage = () => {
  return (
    <div className="page1_header desktop_margins">
      <div className="page_title_container">
        <p className="page_num">01.</p>
        <p className="page_title">History</p>
      </div>
      <p className="page1_description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed arcu
        ac velit malesuada interdum. In tempor hendrerit augue quis aliquam.
        Vivamus nec risus eu ex dictum iaculis non vitae nunc. Vivamus id
        efficitur ex. Mauris vitae imperdiet lorem. Duis id venenatis urna, sit
        amet feugiat erat.
      </p>
    </div>
  );
};

const TeamPage = () => {
  return (
    <div className="page2_header desktop_margins" id="02-TEAM">
      <div className="page_title_container">
        <p className="page_num">02.</p>
        <p className="page_title">CLIMB</p>
      </div>
      <p className="page2_description">
        Nulla facilisi. Nunc aliquam sed nulla eget gravida. Aliquam auctor elit
        urna, a rutrum ex malesuada quis. Cras suscipit tristique tincidunt.{" "}
      </p>
    </div>
  );
};

function moveScreen00() {
  document.getElementById("00-HOME").scrollIntoView({ behavior: "smooth" });
}

function moveScreen01() {
  document.getElementById("01-HISTORY").scrollIntoView({ behavior: "smooth" });
}

function moveScreen02() {
  document.getElementById("02-TEAM").scrollIntoView({ behavior: "smooth" });
}

let slideIndex = 1;

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

const rightArrow = String.fromCharCode(62);
const leftArrow = String.fromCharCode(60);

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("my_slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

document.addEventListener("DOMContentLoaded", (event) => {
  let slides = document.getElementsByClassName("my_slides");
  let dots = document.getElementsByClassName("dot");
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
});

export default function SkillsTest() {
  const [currentMountain, setMountain] = useState(mountainOne);

  function setMountainOne() {
    setMountain(mountainOne);
    document.getElementById("mountain_one").style.cssText =
      "color:rgb(3, 20, 74); background-color:rgb(211, 211, 211)";
    document.getElementById("mountain_two").style.cssText =
      "color:rgb(255, 255, 255); background-color:rgb(3, 20, 74)";
  }

  function setMountainTwo() {
    setMountain(mountainTwo);
    document.getElementById("mountain_two").style.cssText =
      "color:rgb(3, 20, 74); background-color:rgb(211, 211, 211)";
    document.getElementById("mountain_one").style.cssText =
      "color:rgb(255, 255, 255); background-color:rgb(3, 20, 74)";
  }

  return (
    <div className="page_display">
      <div className="home" id="00-HOME">
        <header className="nav_bar desktop_margins">
          <div className="logo_container clickable" onClick={moveScreen00}>
            <MountainsLogo />
          </div>
          <div className="links_container">
            <p className="page_link clickable" onClick={moveScreen01}>
              01. HISTORY
            </p>
            <p className="page_link clickable" onClick={moveScreen02}>
              02. TEAM
            </p>
          </div>
        </header>
        <div className="title_container">
          <h1 className="losangeles_text mountain_title">LOSANGELES</h1>
          <h1 className="mountains_text mountain_title">MOUNTAINS</h1>
        </div>
      </div>
      <div className="nav_bar desktop_margins">
        <div className="logo_container clickable" onClick={moveScreen00}>
          <MountainsLogo />
          <div className="logo_text_container clickable">
            <p className="losangeles_text">LOSANGELES</p>
            <p className="mountains_text">MOUNTAINS</p>
          </div>
        </div>
        <div className="links_container">
          <p className="page_link clickable" onClick={moveScreen01}>
            01. HISTORY
          </p>
          <p className="page_link clickable" onClick={moveScreen02}>
            02. TEAM
          </p>
        </div>
      </div>
      <div className="slideshow_container" id="01_HISTORY">
        <div className="my_slides slide1">
          <HistoryPage />
        </div>
        <div className="my_slides slide2">
          <HistoryPage />
        </div>
        <div className="my_slides slide3">
          <HistoryPage />
        </div>
        <div className="my_slides slide4">
          <HistoryPage />
        </div>
        <a className="prev" onClick={() => plusSlides(-1)}>
          {leftArrow}
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          {rightArrow}
        </a>
      </div>
      <br />
      <div className="dots_container">
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
        <span className="dot" onClick={() => currentSlide(4)}></span>
      </div>
      <TeamPage />
      <div className="colored_background">
        <ul className="mountain_links_bar desktop_margins">
          <li
            className="mountain_link clickable"
            id="mountain_one"
            onClick={setMountainOne}
          >
            MOUNTAIN 1
          </li>
          <li
            className="mountain_link clickable"
            id="mountain_two"
            onClick={setMountainTwo}
          >
            MOUNTAIN 2
          </li>
        </ul>
      </div>
      {currentMountain}
      <footer className="colored_background" id="footer_background">
        <div className="nav_bar desktop_margins">
          <div className="logo_container clickable" onClick={moveScreen00}>
            <MountainsLogo />
            <div className="logo_text_container clickable">
              <p className="losangeles_text footer_text">LOSANGELES</p>
              <p className="mountains_text footer_text">MOUNTAINS</p>
            </div>
          </div>
          <p className="copyright footer_text">
            Copy 2016. ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </div>
  );
}
