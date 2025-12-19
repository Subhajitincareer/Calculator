import React from "react";
import image from "./assets/Calculator.jpg";
const App = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-200 small-mobile:w-screen small-mobile:h-screen small-mobile:bg-red-500">
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
    </div>
  );
};

export default App;
