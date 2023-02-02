import './Homepage.css';

function Homepage() {
  return (
    <div className="homepage">
      <header className='app_header'> 
        <h2> My Mini Projects </h2>
      </header>
      <div className='row_container'>
        <a className='button' id="potions" href="/potionomics">Potionomics</a>
        <a className='button' id="search_list" href="/searchlist">Search List</a>
        <a className='button' id="my_gear" href="/mygear">My Gear</a>
        <a className='button' href="/">-</a>
      </div>
      <div className='row_container'>
        <a className='button' href="/">-</a>
        <a className='button' href="/">-</a>
        <a className='button' href="/">-</a>
        <a className='button' href="/">-</a>
      </div>
      <div className='middle_container'>
        <section className='side_section'>
          <a className='button side_button' href="/">-</a>
          <a className='button side_button' href="/">-</a>
          <a className='button side_button' href="/">-</a>
          <a className='button side_button' href="/">-</a>
          <a className='button side_button' href="/">-</a>
          <a className='button side_button' href="/">-</a>
          <a className='button side_button' href="/">-</a>
        </section>
        <section className='center_section'>
          <img src="HomepageArt.png" className="home_img" alt="logo" />
        </section>
        <section className='side_section'>
          <a className='button side_button' href="/">-</a>
          <a className='button side_button' href="/">-</a>
          <a className='button side_button' href="/">-</a>
          <a className='button side_button' href="/">-</a>
          <a className='button side_button' href="/">-</a>
          <a className='button side_button' href="/">-</a>
          <a className='button side_button' href="/">-</a>
        </section>
      </div>
      <div className='row_container'>
        <a className='button' href="/">-</a>
        <a className='button' href="/">-</a>
        <a className='button' href="/">-</a>
        <a className='button' href="/">-</a>
      </div>
      <div className='row_container'>
        <a className='button' href="/">-</a>
        <a className='button' href="/">-</a>
        <a className='button' href="/">-</a>
        <a className='button' href="/">-</a>
      </div>
    </div>
  );
}

export default Homepage;
