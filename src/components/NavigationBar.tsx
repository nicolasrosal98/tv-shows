function NavigationBar(): JSX.Element {
  return (
    <div className="navigation">
      <nav>
        <img
          src="https://i.ibb.co/m04dsj8/Free-Sample-By-Wix.jpg"
          alt="Free-Sample-By-Wix"
          className="logo"
        />
        <ul>
          <li>
            <a href="https://ew.com/tv/game-of-thrones-seasons-ranked/?slide=5734735#5734735">
              Seasons
            </a>
          </li>
          <li>
            <a href="https://www.looper.com/652349/game-of-thrones-main-characters-ranked/">
              Main Characters
            </a>
          </li>
          <li>
            <a href="https://www.mentalfloss.com/article/578572/game-of-thrones-facts">
              Fun Facts
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;
