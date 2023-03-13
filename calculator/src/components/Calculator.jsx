import React from "react";
import { useState } from "react";

const Calculator = () => {
  const [val, SetVal] = useState("");

   const backSpace=()=>{
      try{
        SetVal(val.slice(0,-1))
      }
      catch(err){
        SetVal("")
      }
    }

  const calculate=()=>{
    //console.log(eval)
     try{
        SetVal(eval(val))
     }
     catch(err){
        SetVal("Error")
     }
  }
  const handleChange = (e) => {
    SetVal(val + e.target.value);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 my-3">
            <h1 className="display-6 fw-bolder text-center text-primary ">
              CALCULATOR
            </h1>
            
          </div>
        </div>
        <div className="row justify-content-center ">
          <div className="col-md-4 ">
            <div className="card  pt-3 shadow">
              <div className="card-body text-primary">
                <input
                  type="text"
                  className="form-control form-control-lg 
                mb-4 text-center bg-light fs-5 text-primary shadow py-4"
                  value={val}
                  onChange={(e) => SetVal(e.target.value)}
                />

                
                <div className="row">
                  <div className="col-3 ">
                    <button
                      className="btn btn-light text-pimary shadow my-2 mx-2 px-4 py-2 fs-4"
                      value="1"
                      onClick={handleChange}
                    >
                      1
                    </button>
                  </div>
                  <div className="col-3 ">
                    <button
                      className="btn btn-light text-pimary shadow my-2 mx-2 px-4 py-2 fs-4"
                      value="2"
                      onClick={handleChange}
                    >
                      2
                    </button>
                  </div>
                  <div className="col-3 ">
                    <button
                      className="btn btn-light text-pimary shadow my-2 mx-2 px-4 py-2 fs-4"
                      value="3"
                      onClick={handleChange}
                    >
                      3
                    </button>
                  </div>
                  <div className="col-3 ">
                    <button
                      className="btn btn-light text-pimary shadow my-2 mx-2 px-4 py-2 fs-4"
                      value="C"
                      onClick={()=>backSpace()}
                    >
                      C
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3 ">
                    <button
                      className="btn btn-light text-pimary shadow my-2 mx-2 px-4 py-2 fs-4"
                      value="4"
                      onClick={handleChange}
                    >
                      4
                    </button>
                  </div>
                  <div className="col-3 ">
                    <button
                      className="btn btn-light text-pimary shadow my-2 mx-2 px-4 py-2 fs-4"
                      value="5"
                      onClick={handleChange}
                    >
                      5
                    </button>
                  </div>
                  <div className="col-3 ">
                    <button
                      className="btn btn-light text-pimary shadow my-2 mx-2 px-4 py-2 fs-4"
                      value="6"
                      onClick={handleChange}
                    >
                      6
                    </button>
                  </div>
                  <div className="col-3 ">
                    <button
                      className="btn btn-light text-pimary shadow my-2 mx-2 px-4 py-2 fs-4"
                      value="+"
                      onClick={handleChange}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3 ">
                    <button
                      className="btn btn-light text-pimary shadow my-2 mx-2 px-4 py-2 fs-4"
                      value="7"
                      onClick={handleChange}
                    >
                      7
                    </button>
                  </div>
                  <div className="col-3 ">
                    <button
                      className="btn btn-light text-pimary shadow my-2 mx-2 px-4 py-2 fs-4"
                      value="8"
                      onClick={handleChange}
                    >
                      8
                    </button>
                  </div>
                  <div className="col-3 ">
                    <button
                      className="btn btn-light text-pimary shadow my-2 mx-2 px-4 py-2 fs-4"
                      value="9"
                      onClick={handleChange}
                    >
                      9
                    </button>
                  </div>
                  <div className="col-3 ">
                    <button
                      className="btn btn-light text-pimary shadow my-2 mx-2 px-4 py-2 fs-4"
                      value="*"
                      onClick={handleChange}
                    >
                      *
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3 ">
                    <button
                      className="btn btn-light text-pimary shadow my-2 mx-2 px-4 py-2 fs-4"
                      value="."
                      onClick={handleChange}
                    >
                      .
                    </button>
                  </div>
                  <div className="col-3 ">
                    <button
                      className="btn btn-light text-pimary shadow my-2 mx-2 px-4 py-2 fs-4"
                      value="0"
                      onClick={handleChange}
                    >
                      0
                    </button>
                  </div>
                  <div className="col-3 ">
                    <button
                      className="btn btn-light text-pimary shadow my-2 mx-2 px-4 py-2 fs-4"
                      value="="
                      onClick={()=>calculate()}
                    >
                      =
                    </button>
                  </div>
                  <div className="col-3 ">
                    <button
                      className="btn btn-light text-pimary shadow my-2 mx-2 px-4 py-2 fs-4"
                      value="/"
                      onClick={handleChange}
                    >
                      /
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
