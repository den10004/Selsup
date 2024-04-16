import React, { useState } from "react";
import "./App.css";

interface Params {
  id: number;
  name: string;
}

interface model {
  params: number;
  value: string;
}

interface Props {
  params: Params[];
  model: model[];
}
const ParamEditor: React.FC = () => {
  const [purpose, setPurpose] = useState("");
  const [long, setLong] = useState("");
  const [total, setTotal] = useState({
    params: [
      {
        id: 1,
        name: "Назначение",
      },
      {
        id: 2,
        name: "Длина",
      },
    ],
  });

  const getModel = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const model: Props = {
      params: [
        {
          id: 1,
          name: "Назначение",
        },
        {
          id: 2,
          name: "Длина",
        },
      ],

      model: [
        {
          params: 1,
          value: purpose,
        },
        {
          params: 2,
          value: long,
        },
      ],
    };

    setTotal(model);
  };

  console.log(total);

  return (
    <>
      <form onSubmit={getModel}>
        <div
          style={{
            display: "flex",
            width: "300px",
            justifyContent: "space-between",
          }}
        >
          <label>{total?.params[0].name}</label>

          <input
            type="text"
            onChange={(e: { target: { value: string } }) =>
              setPurpose(e.target.value)
            }
          ></input>
        </div>
        <div
          style={{
            display: "flex",
            width: "300px",
            justifyContent: "space-between",
          }}
        >
          <label>{total?.params[1].name}</label>

          <input
            type="text"
            onChange={(e: { target: { value: string } }) =>
              setLong(e.target.value)
            }
          ></input>
        </div>
        <button type="submit">Отправить</button>
      </form>

      {/*
      <div>
        <span>{total?.paramValues[0].value} </span>
        <br></br>
        <span>{total?.paramValues[1].value} </span>
      </div>*/}
    </>
  );
};

export default ParamEditor;
