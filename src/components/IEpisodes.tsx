interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

function Episode(episode: IEpisode): JSX.Element {
  let episodeNum = "";

  if (episode.number > 9) {
    episodeNum = `S0${episode.season}E0${episode.number}`;
  } else {
    episodeNum = `S0${episode.season}E${episode.number}`;
  }
  return (
    <div className="card">
      <h3>{episode.name}</h3>
      <h5>{episodeNum}</h5>
      <img src={episode.image.medium} alt={episode.name} />
      <p>{episode.summary}</p>
      <button onClick={() => window.open(episode.url)}>More Information</button>
    </div>
  );
}

export default Episode;
