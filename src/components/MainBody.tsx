import { useState } from "react";
import Episode from "./IEpisodes";
import episodes from "../episodes.json";

function MainBody(): JSX.Element {
  const [searchValue, setSearchValue] = useState<string>("");
  const selectedEpisodes = episodes.filter(
    (episode) =>
      episode.summary.includes(searchValue) ||
      episode.name.includes(searchValue)
  );

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
            <input
              value={searchValue}
              onChange={(event) => {
                setSearchValue(event.target.value);
              }}
            />
            <p>Displaying {selectedEpisodes.length}/73 episodes</p>
          </>
        </form>
      </nav>
      <div className="grid">
        <>
          {selectedEpisodes.map((episode) => (
            <Episode
              id={episode.id}
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
