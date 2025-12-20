import React from "react";
import {
  RotateCcw,
  Percent,
  Divide,
  X,
  Minus,
  Plus,
  Equal,
  Sun,
  Moon,
} from "lucide-react";
import { useState } from "react";
const Calculator = () => {
  const [toggle, settoggle] = useState(false);

  function handleZeroClick() {
    alert("You clicked 0");
  }

  return (
    <>
      <div className="w-screen h-screen bg-white">
        <div className="w-full h-full small-mobile:flex justify-center items-center bg-white">
          <div className="rounded-4xl bg-white max-small-mobile:w-full max-small-mobile:h-full  max-large-mobile:w-80 max-large-mobile:h-[80%] 0 max-tablet:w-102 max-tablet:h-[80%] max-small-laptop:h-[80%] max-small-laptop:w-122  desktop:h-[80%] desktop:w-100 ">
            <div
              className={`w-full h-[40%] border-t border-l border-r rounded-tl-4xl rounded-tr-4xl ${
                toggle ? "bg-black" : "bg-white"
              }`}
            >
              <div className="w-full h-auto flex justify-center p-2">
                <div className="w-[25%] flex bg-gray-600 rounded-3xl p-1">
                  <div className="w-full ">
                    <Sun
                      className={`${toggle ? "text-gray-500" : "text-white"}`}
                      onClick={() => settoggle(false)}
                    />
                  </div>
                  <div 
                  >
                    <Moon   className={`${toggle ? "text-white" : "text-gray-500"}`}
                    onClick={() => settoggle(true)}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[60%] bg-gray-200 grid grid-cols-4 rounded-tl-3xl rounded-br-4xl rounded-bl-4xl rounded-tr-4xl">
              <div className="h-full  grid grid-rows-5 place-items-center auto-cols-fr">
                <button className=" text-3xl bg-gray-300 text-[#63BEB5] ">
                  AC
                </button>
                <button className="text-3xl">7</button>
                <button className="text-3xl">4</button>
                <button className="text-3xl">1</button>
                <button className="text-3xl">
                  <RotateCcw />
                </button>
              </div>
              <div className="h-full  grid grid-rows-5 place-items-center auto-cols-fr">
                <button className="text-3xl bg-gray-300 text-[#63BEB5]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-plus-slash-minus"
                    viewBox="0 0 16 16"
                  >
                    <path d="m1.854 14.854 13-13a.5.5 0 0 0-.708-.708l-13 13a.5.5 0 0 0 .708.708M4 1a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2A.5.5 0 0 1 4 1m5 11a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 9 12" />
                  </svg>
                </button>
                <button className="text-3xl">8</button>
                <button className="text-3xl">5</button>
                <button className="text-3xl">2</button>
                <button className="text-3xl" onClick={handleZeroClick}>
                  0
                </button>
              </div>
              <div className="h-full  grid grid-rows-5 place-items-center auto-cols-fr">
                <button className="text-3xl bg-gray-300 text-[#63BEB5]">
                  <Percent />
                </button>
                <button className="text-3xl">9</button>
                <button className="text-3xl">6</button>
                <button className="text-3xl">3</button>
                <button className="text-3xl">.</button>
              </div>
              <div className="h-full  grid grid-rows-5 place-items-center auto-rows-fr">
                <button className="text-3xl bg-gray-300 text-[#79515A]">
                  <Divide />
                </button>
                <button className="text-3xl bg-gray-300 text-[#79515A]">
                  <X />
                </button>
                <button className="text-3xl bg-gray-300 text-[#79515A]">
                  <Minus />
                </button>
                <button className="text-3xl bg-gray-300 text-[#79515A]">
                  <Plus />
                </button>
                <button className="text-xl bg-gray-300 text-[#79515A]">
                  <Equal />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

{
  /*     <div className="w-screen h-screen flex justify-center items-center bg-gray-200 small-mobile:w-screen small-mobile:h-screen small-mobile:bg-red-500">
      <div className="w-96 h-96 bg-amber-200 grid grid-cols-4">
        <div className="h-full bg-amber-700 flex flex-col items-center gap-10">
          <div className="text-3GITHUBxl">2</div>
          <div className="text-3xl">3</div>
          <div className="text-3xl">4</div>
          <div className="text-3xl">5</div>
          <div className="text-3xl">1</div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div> */
}

export default Calculator;
