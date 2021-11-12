export interface IEpisode {
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
    medium: string | null | undefined;
    original: string | null | undefined;
  };
  summary: string;
  _links: { self: { href: string } };
}

function Episode(episode: IEpisode): JSX.Element {
  let episodeNum = "";
  episode.number <= 9
    ? (episodeNum = `S0${episode.season}E0${episode.number}`)
    : (episodeNum = `S0${episode.season}E${episode.number}`);

  let episodeSum = episode.summary;
  episodeSum = episodeSum.replace(/<\/?[^>]+(>|$)/g, "");

  const imgFallback =
    "	https://static.tvmaze.com/uploads/images/original_untouched/198/495237.jpg";

  return (
    <div className="card">
      <h3>{episode.name}</h3>
      <h5>{episodeNum}</h5>
      <img
        src={
          episode.image.medium
            ? episode.image.medium
            : episode.image.original
            ? episode.image.original
            : imgFallback
        }
        alt={episode.name}
      />
      <p>{episodeSum}</p>
      <button onClick={() => window.open(episode.url)}>More Information</button>
    </div>
  );
}

export default Episode;
