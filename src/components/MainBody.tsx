import Episode from "./IEpisodes";
import episodes from "../episodes.json";

function MainBody(): JSX.Element {
  return (
    <div className="body-div">
      <nav>
        <h2>Episodes</h2>
        <form>
          <select name="pets" id="pet-select">
            <option value="">Select an episode</option>
            <option value="dog">Option1</option>
            <option value="cat">Option2</option>
          </select>
          <>
            <input type="text" placeholder="Search.."></input>
            <p>Displaying 73/73 episodes</p>
          </>
        </form>
      </nav>
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
