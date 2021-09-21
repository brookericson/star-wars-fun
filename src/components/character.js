import {useParams} from "react-router-dom";

const Character = ({characters}) => {
    const {index} = useParams();
    console.log(characters);
    const selectedCharacter = characters[index];
    return (
        <div>{selectedCharacter.name}</div>
    )
}

export default Character;