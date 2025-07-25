import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Positions from "./components/Positions/Positions";

function App() {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-end p-16 md:p-24 gap-16 h-screen w-screen bg-linear-to-b from-neutral-600 to-neutral-900">
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4">
          <Positions />
        </div>

        <div className="w-full md:w-40">
          <Button label="play" />
        </div>
      </div>
    </>
  );
}

export default App;
