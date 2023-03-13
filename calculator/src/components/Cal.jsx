import React from "react";
import { useState } from "react";
let bottons = [
  {
    id: 1,
    btn: [{ name: "1" }, { name: "2" }, { name: "3" }, { name: "C" }],
  },
  {
    id: 2,
    btn: [{ name: "4" }, { name: "5" }, { name: "6" }, { name: "+" }],
  },
  {
    id: 3,
    btn: [{ name: "7" }, { name: "8" }, { name: "9" }, { name: "*" }],
  },
  {
    id: 4,
    btn: [{ name: "." }, { name: "0" }, { name: "=" }, { name: "/" }],
  },
];

const Calculator = () => {
  const [val, SetVal] = useState("");
  
//  const backSpace=(e)=>{
//     if(e.target.value==="C"){
//         console.log('backspace');
//     }
//   }
  const handleChange=(e)=>{
    SetVal(val + e.target.value)
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 fw-bolder text-center text-primary ">
              CALCULATOR
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card border-primary mb-3">
              <div className="card-body text-primary">
                <input
                  type="text"
                  className="form-control form-control-lg 
                mb-4 text-center bg-light fs-4 text-primary shadow"
                  value={val}
                  onChange={(e) => SetVal(e.target.value)}
                />
                {bottons.map((el) => (
                  <div className="row" key={el.id}>
                    {el.btn.map((p) => (
                      <div className="col-3" key={p.name}>
                        <button
                          className="btn btn-light text-pimary shadow my-2 mx-2 px-4 py-2 fs-4"
                          value={p.name}
                          onClick={handleChange}
                        >
                          {p.name}
                        </button>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
