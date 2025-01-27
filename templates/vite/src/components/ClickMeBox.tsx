import { useState } from "react";

type ClickMeBoxProps = {
  title: string;
};

const ClickMeBox = ({ title }: ClickMeBoxProps) => {
  const [count, setCount] = useState(0);

  // Tailwind taken from SailboatUI
  return (
    <div className="mx-auto max-w-md rounded-lg bg-white shadow-xl border-1 border-teal-500 hover:shadow-2xl">
      <div
        className="p-4 hover:cursor-pointer"
        onClick={() => setCount((count) => count + 1)}
      >
        <h3 className="text-xl font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-gray-500">
          Welcome! You've clicked this <b>{count}</b> times.
        </p>
      </div>
      <div className="flex gap-4">
        <button
          type="button"
          className="rounded-md bg-teal-600 mx-4 mb-4 px-5 py-2.5 text-sm font-medium text-white shadow hover:cursor-pointer"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
        <button
          type="button"
          className="rounded-md bg-teal-600 mx-4 mb-4 px-5 py-2.5 text-sm font-medium text-white shadow hover:cursor-pointer"
          onClick={async () => {
            const msg = await fetch("/api");
            msg.json().then((json) => console.log(json));
          }}
        >
          Call API (check console)
        </button>
      </div>
    </div>
  );
};

export default ClickMeBox;
