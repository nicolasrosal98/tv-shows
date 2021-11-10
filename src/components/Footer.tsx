function Footer(): JSX.Element {
  return (
    <div className="footer">
      <img
        src="https://i.ibb.co/m04dsj8/Free-Sample-By-Wix.jpg"
        alt="Free-Sample-By-Wix"
        className="logo"
      />
      <p>
        The <a href="https://api.tvmaze.com/shows/82/episodes">data</a> was
        collected using TVMaze's API
      </p>
    </div>
  );
}

export default Footer;
