import { useState } from "react";
import {
  Sun,
  Moon,
  Divide,
  X,
  Minus,
  Plus,
  Equal,
  Percent,
  RotateCcw,
} from "lucide-react";

/* ----------------- SAFE MATH ENGINE ----------------- */
function calculate(expression) {
  try {
    const tokens = expression.match(/(\d+\.?\d*|\+|\-|\*|\/)/g);
    if (!tokens) return "";

    const stack = [];
    let current = Number(tokens[0]);

    for (let i = 1; i < tokens.length; i += 2) {
      const op = tokens[i];
      const next = Number(tokens[i + 1]);

      if (op === "*") current *= next;
      else if (op === "/") current /= next;
      else {
        stack.push(current);
        stack.push(op);
        current = next;
      }
    }
    stack.push(current);

    let result = stack[0];
    for (let i = 1; i < stack.length; i += 2) {
      if (stack[i] === "+") result += stack[i + 1];
      if (stack[i] === "-") result -= stack[i + 1];
    }
    return String(+result.toFixed(8));
  } catch {
    return "Error";
  }
}

/* ----------------- COMPONENT ----------------- */
export default function Calculator() {
  const [dark, setDark] = useState(true);
  const [input, setInput] = useState("");
  const [expression, setExpression] = useState("");

  const addValue = (val) => {
    setInput((p) => p + val);
  };

  const addOperator = (op) => {
    if (!input) return;
    setExpression((p) => p + input + " " + op + " ");
    setInput("");
  };

  const handleEqual = () => {
    if (!input) return;
    const full = (expression + input).replace(/×/g, "*").replace(/÷/g, "/");
    const result = calculate(full);
    setExpression("");
    setInput(result);
  };

  const handlePercent = () => {
    if (!input) return;
    setInput(String(Number(input) / 100));
  };

  const backspace = () => {
    setInput((p) => p.slice(0, -1));
  };

  const clearAll = () => {
    setInput("");
    setExpression("");
  };

  return (
    <div
      className={`w-screen h-screen flex justify-center items-center ${
        dark ? "bg-neutral-900" : "bg-gray-200"
      }`}
    >
      {/* Phone */}
      <div
        className={`w-[320px] h-[650px] rounded-[36px] shadow-2xl overflow-hidden ${
          dark ? "bg-[#1E232B] text-white" : "bg-white text-black"
        }`}
      >
        {/* Display */}
        <div className="h-[35%] px-6 pt-6 flex flex-col justify-between">
          {/* Theme toggle */}
          <div className="flex justify-center">
            <div
              className={`flex gap-3 px-4 py-2 rounded-full ${
                dark ? "bg-[#2A2F38]" : "bg-gray-100"
              }`}
            >
              <Sun
                size={18}
                onClick={() => setDark(false)}
                className={dark ? "text-gray-500" : "text-black"}
              />
              <Moon
                size={18}
                onClick={() => setDark(true)}
                className={dark ? "text-white" : "text-gray-400"}
              />
            </div>
          </div>

          {/* Expression */}
          <div className="text-center text-sm opacity-60">{expression}</div>

          {/* Result */}
          <div className="text-center text-4xl font-semibold break-all">
            {input || "0"}
          </div>
        </div>

        {/* Keypad */}
        <div
          className={`h-[65%] grid grid-cols-4 px-6 py-4 gap-y-6 ${
            dark ? "bg-[#1A1F26]" : "bg-gray-50"
          }`}
        >
          <Btn accent onClick={clearAll}>
            AC
          </Btn>
          <Btn accent onClick={backspace}>
            <RotateCcw size={18} />
          </Btn>
          <Btn accent onClick={handlePercent}>
            <Percent size={18} />
          </Btn>
          <Btn operator onClick={() => addOperator("÷")}>
            <Divide size={18} />
          </Btn>

          <Btn onClick={() => addValue("7")}>7</Btn>
          <Btn onClick={() => addValue("8")}>8</Btn>
          <Btn onClick={() => addValue("9")}>9</Btn>
          <Btn operator onClick={() => addOperator("×")}>
            <X size={18} />
          </Btn>

          <Btn onClick={() => addValue("4")}>4</Btn>
          <Btn onClick={() => addValue("5")}>5</Btn>
          <Btn onClick={() => addValue("6")}>6</Btn>
          <Btn operator onClick={() => addOperator("-")}>
            <Minus size={18} />
          </Btn>

          <Btn onClick={() => addValue("1")}>1</Btn>
          <Btn onClick={() => addValue("2")}>2</Btn>
          <Btn onClick={() => addValue("3")}>3</Btn>
          <Btn operator onClick={() => addOperator("+")}>
            <Plus size={18} />
          </Btn>

          <Btn />
          <Btn onClick={() => addValue("0")}>0</Btn>
          <Btn onClick={() => addValue(".")}>.</Btn>
          <Btn operator onClick={handleEqual}>
            <Equal size={18} />
          </Btn>
        </div>
      </div>
    </div>
  );
}

/* ----------------- BUTTON ----------------- */
function Btn({ children, operator, accent, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`h-12 rounded-xl flex items-center justify-center text-lg transition
      ${
        operator ? "text-red-400" : accent ? "text-teal-400" : ""
      } hover:opacity-80`}
    >
      {children}
    </button>
  );
}
