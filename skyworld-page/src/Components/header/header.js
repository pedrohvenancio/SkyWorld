import logoskyworld from "./logoskyworld.png"

function Header() {
    return(
        <header className="app-header">
        <div className='center'>
          <div className='header'>
            <img src={logoskyworld} alt="Logo Sky World" className='img'></img>
          </div>
        </div>
      </header>

    );
}

export default Header;