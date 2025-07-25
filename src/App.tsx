import { useSelector } from "react-redux";
import Battle from "./components/Battle/Battle";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Positions from "./components/Positions/Positions";
import { useAppDispatch } from "./hooks/storeHooks";
import { beginGameThunk, endGameThunk } from "./features/game/slice";
import { gameStatusSelector } from "./features/game";

function App() {
  const dispatch = useAppDispatch();
  const gameStatus = useSelector(gameStatusSelector);

  const handleOnClick = () => {
    if (gameStatus === "idle") {
      dispatch(beginGameThunk());
    } else if (gameStatus === "finished") {
      dispatch(endGameThunk());
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <header>
        <Header />
      </header>

      <main className="flex flex-col items-center justify-end p-16 lg:px-24 lg:py-40 h-screen w-screen bg-linear-to-b from-neutral-600 to-neutral-900">
        <div
          className={`w-full md:w-4/5 lg:w-3/5 xl:w-2/5 flex-1 flex flex-col ${
            gameStatus === "idle" ? "justify-end" : "justify-between"
          }`}
        >
          {gameStatus !== "idle" && (
            <div className="mb-8">
              <Battle />
            </div>
          )}
          <div>
            {gameStatus === "idle" && (
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
