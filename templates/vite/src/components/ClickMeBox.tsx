import type { RootState } from "../lib/store";
import { useSelector, useDispatch } from "react-redux";
import { increment, reset } from "../features/counter/counterSlice";
import Card from "./Card";

type ClickMeBoxProps = {
  title: string;
};

const ClickMeBox = ({ title }: ClickMeBoxProps) => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  // Tailwind taken from SailboatUI
  return (
    <Card>
      <div
        className="p-4 hover:cursor-pointer"
        onClick={() => dispatch(increment())}
      >
        <h3 className="text-xl font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-gray-500">
          Welcome! You've clicked this <b>{count}</b> times.
        </p>
      </div>
      <div className="flex">
        <button
          type="button"
          className="rounded-md bg-teal-600 mx-4 mb-4 px-5 py-2.5 text-sm font-medium text-white shadow hover:cursor-pointer"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
        <button
          type="button"
          className="rounded-md bg-teal-600 mb-4 px-5 py-2.5 text-sm font-medium text-white shadow hover:cursor-pointer"
          onClick={async () => {
            const msg = await fetch("/api");
            msg.json().then((json) => console.log(json));
          }}
        >
          Call API (check console)
        </button>
      </div>
    </Card>
  );
};

export default ClickMeBox;
