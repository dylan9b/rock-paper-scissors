import { useSelector } from "react-redux";
import Battle from "./components/Battle/Battle";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Positions from "./components/Positions/Positions";
import { useAppDispatch } from "./hooks/storeHooks";
import {
  beginGameThunk,
  calculateWinnerThunk,
  endGameThunk,
  gameActions,
} from "./features/game/slice";
import { useEffect, useRef } from "react";
import { gameMetaSelector } from "./features/game";

function App() {
  const dispatch = useAppDispatch();
  const { status } = useSelector(gameMetaSelector);
  const timeoutRef = useRef<number | null>(null);

  const handleStart = () => {
    dispatch(beginGameThunk());
    timeoutRef.current = window.setTimeout(() => {
      dispatch(gameActions.setGame({ status: "finished" }));
      dispatch(calculateWinnerThunk());
    }, 3000);
  };

  const handleOnClick = () => {
    if (status === "idle") {
      handleStart();
    } else if (status === "finished") {
      dispatch(endGameThunk());
    }
  };

  // On component destroy, we need to clear the timeout to avoid memory leaks
  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <header>
        <Header />
      </header>

      <main className="flex flex-col items-center justify-end p-16 lg:px-24 lg:py-40 h-screen w-screen bg-linear-to-b from-neutral-600 to-neutral-900">
        <div
          className={`w-full md:w-4/5 lg:w-3/5 xl:w-2/5 flex-1 flex flex-col ${
            status === "idle" ? "justify-end" : "justify-between"
          }`}
        >
          {status !== "idle" && (
            <div className="mb-8">
              <Battle />
            </div>
          )}
          <div>
            {status === "idle" && (
              <h2 className="uppercase font-bold text-base text-custom-gold mb-8 text-center">
                Pick your positions
              </h2>
            )}
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
              <Positions />
            </div>

            <div className="flex items-center justify-center w-full">
              <Button onClick={handleOnClick} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
