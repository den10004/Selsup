import { useState } from "react";
import "./App.css";

interface Params {
  paramId: number;
  value: string;
}

interface Model {
  paramValues: Params[];
}

const ParamEditor: React.FC = () => {
  const [purpose, setPurpose] = useState("");
  const [length, setLength] = useState("");
  const [total, setTotal] = useState<Model>();

  const getModel = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const model: Model = {
      paramValues: [
        {
          paramId: 1,
          value: purpose,
        },
        {
          paramId: 2,
          value: length,
        },
      ],
    };

    setTotal(model);
  };

  if (total !== undefined) {
    console.log(total);
  }

  return (
    <>
      <form className="form">
        <div>
          <label>Назначение: </label>

          <input
            type="text"
            onChange={(e) => setPurpose(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Длина: </label>

          <input
            type="text"
            onChange={(e) => setLength(e.target.value)}
          ></input>
        </div>
        <button type="submit" onClick={getModel}>
          Отправить
        </button>
      </form>

      <div>
        <span>{total?.paramValues[0].value} </span>
        <br></br>
        <span>{total?.paramValues[1].value} </span>
      </div>
    </>
  );
};

export default ParamEditor;
