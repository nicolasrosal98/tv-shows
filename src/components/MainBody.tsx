import Episode from "./IEpisodes";
import episodes from "../episodes.json";

function MainBody(): JSX.Element {
  return (
    <div className="body-div">
      <h2>Episodes</h2>
      <div className="grid">
        <>
          {episodes.map((episode) => (
            <Episode
              id={episode.number}
              url={episode.url}
              name={episode.name}
              season={episode.season}
              number={episode.number}
              type={episode.type}
              airdate={episode.airdate}
              airtime={episode.airtime}
              airstamp={episode.airstamp}
              runtime={episode.runtime}
              image={episode.image}
              summary={episode.summary}
              _links={episode._links}
              key={episode.id}
            />
          ))}
        </>
      </div>
    </div>
  );
}

export default MainBody;
