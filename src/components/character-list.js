import {Link} from "react-router-dom";

const CharacterList = ({characters}) => {
    return (
        <ul>
            {characters.map((c, index) => (
                <li key={c.name}>
                    <Link to={`/character/${index}`}>{c.name}</Link>
                </li>
            ))}
        </ul>
    )
}

export default CharacterList;