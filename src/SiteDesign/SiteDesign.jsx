import './SiteDesign.css'
import { showSingleplayer, showMultiplayer } from './ShowGames'

// const buttonRight = document.getElementById('slideRight');
// const buttonLeft = document.getElementById('slideLeft');

// buttonRight.onclick = function () {
//   document.getElementById('container').scrollLeft += 20;
// };
// buttonLeft.onclick = function () {
//   document.getElementById('container').scrollLeft -= 20;
// };


export default function SiteDesign() {
  return(
    <div id='sitedesign_page'>
      <main id='page_content'>
        <nav className='side_nav'>
          <ul className='nav_list'>
            <li className='nav_item'>I'm</li>
            <li className='nav_item'>just</li>
            <li className='nav_item'>a</li>
            <li className='nav_item'>nav</li>
            <li className='nav_item'>bar</li>
            <li className='nav_item'>made</li>
            <li className='nav_item'>up</li>
            <li className='nav_item'>of</li>
            <li className='nav_item'>list</li>
            <li className='nav_item'>items</li>
            <li className='nav_item'>but</li>
            <li className='nav_item'>I</li>
            <li className='nav_item'>could</li>
            <li className='nav_item'>be</li>
            <li className='nav_item'>links</li>
            <li className='nav_item'>if</li>
            <li className='nav_item'>I</li>
            <li className='nav_item'>wanted</li>
            <li className='nav_item'>to</li>
            <br />
            <li className='nav_item'>:p</li>
          </ul>
        </nav>
        <div className='all_games_container'>
          <div>
            <h2 className='genre_header'>Singleplayer Games</h2>
          </div>
          <ul className='game_row_container'>
            {showSingleplayer}
          </ul>
          <h2 className='genre_header'>Multiplayer Games</h2>
          <ul className='game_row_container'>
            {showMultiplayer}
          </ul>
        </div>
      </main>

    </div>
)}