import games from './GameList'

export const showSingleplayer = games.map((game) => {
  if (game.type === 'Singleplayer') {
    return (
        <li className='game_container'>
          <h4 className='game_title'>{game.name}</h4>
          <a href={game.website}>
            <img className='game_image' src={game.img} alt={game.alt} />
          </a>
        </li>
    )
  }
})

export const showMultiplayer = games.map((game) => {
  if (game.type === 'Multiplayer') {
    return (
      <li className='game_container'>
      <h4 className='game_title'>{game.name}</h4>
      <a href={game.website}>
        <img className='game_image' src={game.img} alt={game.alt} />
      </a>
    </li>
    )
  }
})