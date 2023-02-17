import { name } from "file-loader";

import * as actions from "../../redux/actions";
import React from "react";

import { useDispatch } from "react-redux";
// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen.
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const CreateCharacter = () => {
  const [inputs, setInputs] = React.useState({
    faction: "",
    name: "",
    race: "",
    role: "",
    ship: { name: "" },
  });

  const dispatch = useDispatch();

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(actions.createCharacter(inputs));
        }}
      >
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={(event) =>
            setInputs({ ...inputs, name: event.target.value })
          }
        />
        <label>Race: </label>
        <input
          type="text"
          name="race"
          value={inputs.race}
          onChange={(event) =>
            setInputs({ ...inputs, race: event.target.value })
          }
        />
        <label>Faction: </label>
        <input
          type="text"
          name="faction"
          value={inputs.faction}
          onChange={(event) =>
            setInputs({ ...inputs, faction: event.target.value })
          }
        />
        <label>Role: </label>
        <input
          type="text"
          name="role"
          value={inputs.role}
          onChange={(event) =>
            setInputs({ ...inputs, role: event.target.value })
          }
        />
        <label>Ship: </label>
        <input
          type="text"
          name="ship"
          value={inputs.ship}
          onChange={(event) =>
            setInputs({ ...inputs, ship: { name: event.target.value } })
          }
        />
        <button type="submit">Create Character</button>
      </form>
    </div>
  );
};

export default CreateCharacter;
