import './Homepage.css';

function Homepage() {
  return (
    <div className="homepage">
      <header> 
        <h1> My Mini Projects </h1>
        <p> </p>
      </header>
      <div className='row_container'>
        <a className='button' id="potions" href="/potionomics">Potionomics</a>
        <a className='button' href="/"></a>
        <a className='button' href="/"></a>
        <a className='button' href="/"></a>
      </div>
      <div className='row_container'>
        <a className='button' href="/"></a>
        <a className='button' href="/"></a>
        <a className='button' href="/"></a>
        <a className='button' href="/"></a>
      </div>
      <div className='center_container'>
        <section className='side_section'>
          <a className='button side_button' href="/"></a>
          <a className='button side_button' href="/"></a>
          <a className='button side_button' href="/"></a>
          <a className='button side_button' href="/"></a>
          <a className='button side_button' href="/"></a>
          <a className='button side_button' href="/"></a>
          <a className='button side_button' href="/"></a>
        </section>
        <section className='center_section'>
          <img src="HomepageArt.png" className="home_img" alt="logo" />
        </section>
        <section className='side_section'>
          <a className='button side_button' href="/"></a>
          <a className='button side_button' href="/"></a>
          <a className='button side_button' href="/"></a>
          <a className='button side_button' href="/"></a>
          <a className='button side_button' href="/"></a>
          <a className='button side_button' href="/"></a>
          <a className='button side_button' href="/"></a>
        </section>
      </div>
      <div className='row_container'>
        <a className='button' href="/"></a>
        <a className='button' href="/"></a>
        <a className='button' href="/"></a>
        <a className='button' href="/"></a>
      </div>
      <div className='row_container'>
        <a className='button' href="/"></a>
        <a className='button' href="/"></a>
        <a className='button' href="/"></a>
        <a className='button' href="/"></a>
      </div>

      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

         
         
      </header>
    </div>
  );
}

export default Homepage;
