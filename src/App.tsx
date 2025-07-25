import { useSelector } from "react-redux";
import Battle from "./components/Battle/Battle";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Positions from "./components/Positions/Positions";
import {
  ComputerActions,
  selectedComputerOptionSelector,
} from "./features/computer";
import { useAppDispatch } from "./hooks/storeHooks";
import { calculateWinnerThunk } from "./features/game/slice";

function App() {
  const dispatch = useAppDispatch();
  const computerSelection = useSelector(selectedComputerOptionSelector);

  const handleOnPlayClick = () => {
    dispatch(ComputerActions.selectRandomOption());

    setTimeout(() => {
      dispatch(calculateWinnerThunk());
    }, 3000);
  };

  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-end p-16 md:p-24 h-screen w-screen bg-linear-to-b from-neutral-600 to-neutral-900">
        {computerSelection && (
          <div className="mb-8">
            <Battle />
          </div>
        )}
        <h2 className="uppercase font-bold text-base text-custom-gold mb-8">
          Pick your positions
        </h2>
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
          <Positions />
        </div>

        <div
          className="flex items-center justify-center w-full"
          onClick={handleOnPlayClick}
        >
          <Button label="play" />
        </div>
      </div>
    </>
  );
}

export default App;
