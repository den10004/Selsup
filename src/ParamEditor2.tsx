import React from "react";

interface model {
  params: number;
  value: string;
}

interface Params {
  id: number;
  name: string;
}

interface Props {
  params: Params[];
  model: model[];
}

class ParamEditor extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
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
    };
  }

  public getModel = (event: {
    preventDefault: () => void;
    target: { purpose: { value: string }; long: { value: string } };
  }) => {
    event.preventDefault();
    this.setState({
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
          paramId: 1,
          value: event.target.purpose.value,
        },
        {
          paramId: 2,
          value: event.target.long.value,
        },
      ],
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="">
        <section>
          <form onSubmit={this.getModel}>
            <div
              style={{
                display: "flex",
                width: "300px",
                justifyContent: "space-between",
              }}
            >
              <label>{this.state.params[0].name} &nbsp; </label>
              <input type="text" id="purpose" />
            </div>
            <div
              style={{
                display: "flex",
                width: "300px",
                justifyContent: "space-between",
              }}
            >
              <label>{this.state.params[1].name} &nbsp;</label>
              <input type="text" id="long" />
            </div>
            <button type="submit">Отправить</button>
          </form>
        </section>
      </div>
    );
  }
}

export default ParamEditor;
