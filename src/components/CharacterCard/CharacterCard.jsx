import "./CharacterCard.css";
import * as actions from "../../redux/actions/index";
import { Link } from "react-router-dom";
import React from "react";
import { useDispatch } from "react-redux";
// Importar las actions como Object Modules, sino los test no funcionarán!

//PARA QUE LOS TEST CORRAN, DEBEN HACER ESTE COMPONENTE COMO UN FUNCIONAL COMPONENT.
const CharacterCard = (props) => {
  const { id, name, faction, image } = props;
  const dispatch = useDispatch();

  return (
    <div className="card">
      <button
        onClick={() => {
          dispatch(actions.deleteCharacter(id));
        }}
      >
        X
      </button>
      <Link to={`/character/${id}`}>
        <h3>{name}</h3>
      </Link>
      <img src={image} alt={name} />
      <p>{faction}</p>
    </div>
  );
};

export default CharacterCard;
