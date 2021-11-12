import { useState } from "react";
import Episode from "./IEpisodes";
import episodes from "../episodes.json";

function MainBody(): JSX.Element {
  const [searchValue, setSearchValue] = useState<string>("");
  const [dropDownValue, setDropDownValue] = useState<string>("");

  const selectedEpisodesDropDown = episodes.filter(
    (episode) =>
      episode.summary.includes(dropDownValue) ||
      episode.name.includes(dropDownValue)
  );

  const selectedEpisodesSearch = episodes.filter(
    (episode) =>
      episode.summary.includes(searchValue) ||
      episode.name.includes(searchValue)
  );
  const selectedDropdown = episodes.map((episode) =>
    episode.number <= 9
      ? `S0${episode.season}E0${episode.number} - ${episode.name}`
      : `S0${episode.season}E${episode.number} - ${episode.name}`
  );

  // const resetDropDown = () => {
  //   document.getElementById("episode-select").selectedValue = "";
  // };

  return (
    <div className="body-div">
      <nav>
        <h2>Episodes</h2>
        <form>
          <select
            name="episode"
            id="episode-select"
            onChange={(event) => {
              setDropDownValue(event.target.value);
              setSearchValue("");
            }}
          >
            <option value="">Select an episode</option>
            {selectedDropdown.map((episodeName) => (
              <option
                value={episodeName.split("- ")[1]}
                key={selectedDropdown.indexOf(episodeName)}
              >
                {episodeName}
              </option>
            ))}
          </select>
          <>
            <input
              value={searchValue}
              onChange={(event) => {
                setSearchValue(event.target.value);
                setDropDownValue("");
                // resetDropDown;
              }}
            />
            <p>Displaying {selectedEpisodesSearch.length}/73 episodes</p>
          </>
        </form>
      </nav>
      <div className="grid">
        <>
          {searchValue
            ? selectedEpisodesSearch.map((episode) => (
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
              ))
            : selectedEpisodesDropDown.map((episode) => (
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
