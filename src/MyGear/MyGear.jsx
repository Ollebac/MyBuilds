import './MyGear.css'
import { useState } from 'react'

export default function MyGear() {
  
  const [stats, setStats] = useState('Please click a button to begin.');
  const [appearance, setAppearance] = useState(
    <div className='init_content'>
      <p className='init_text'>Please click a combat style above to begin.</p>
      <img className='logo' src='../gear/osrs_img.jpg' alt='Old School Runescape logo'/>
    </div>)

  function meleeGear() {
    setAppearance(
      <>
        <img className='gear_content' src='../gear/melee_equip.png'/>
        <img className='gear_content' src='../gear/melee_stats.png'/>
      </>
    )
  }

  function rangeGear() {
    setAppearance(
      <>
        <img className='gear_content' src='../gear/range_equip.png'/>
        <img className='gear_content' src='../gear/range_stats.png'/>
      </>
    )
  }

  function magicGear() {
    setAppearance(
      <>
        <img className='gear_content' src='../gear/magic_equip.png'/>
        <img className='gear_content' src='../gear/magic_stats.png'/>
      </>
    )
  }
  
  return (
    <div className='content_container'>
      <header>
        <h1 className='title'> My Best Gear </h1>
      </header>
      <nav className='styles_container'>
        <button onClick={meleeGear} className='combat_button'><img className='button_img' src='./gear/melee_weapon.png'></img><p className='style_text'>Melee</p></button>
        <button onClick={rangeGear} className='combat_button'><img className='button_img' src='./gear/range_weapon.png'></img><p className='style_text'>Range</p></button>
        <button onClick={magicGear} className='combat_button'><img className='button_img' src='./gear/magic_weapon.png'></img><p className='style_text'>Magic</p></button>
      </nav>
      <div className='gear_container'>
        {appearance}
      </div>
      <footer>

      </footer>
    </div>
  )
}