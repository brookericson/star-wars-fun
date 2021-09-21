import Header from "../components/header"
import CharacterList from "../components/character-list";
import Character from "../components/character";
import { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [dataLoadedState , setDataLoadedState] = useState(true);

  useEffect (() => {
    const fetchCharacters =  async () => {
      const response = await fetch("https://swapi.dev/api/people");
      const json = await response.json();
      const results = json.results;
      setCharacters(results);
      setDataLoadedState(false);
    }
    fetchCharacters();
  }, []);
  

  return (
    <div className="App">
      {!dataLoadedState ? 
        <Router>
          <Header></Header>
          <Switch>
          <Route path="/character/:index">
              <Character characters={characters}></Character>
            </Route>
            <Route path="/">
              <CharacterList characters={characters}></CharacterList>
            </Route>
          </Switch>
        </Router>
        : <div>Page Loading</div>
      }
    </div>
  );
}

export default Home;
