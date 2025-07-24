import Position from "./components/Position/Position";
import type { PositionOption } from "./components/Position/Position-option";

const positionOptions: PositionOption[] = ["rock", "paper", "scissors"];

function App() {
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(ItemActions.add({ id: 1, name: "Learn Redux Toolkit" }));
  // }, [dispatch]);

  return (
    <div className="w-1/2">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        {positionOptions.map((option) => (
          <Position key={option} variant={option} />
        ))}
      </div>
    </div>
  );
}

export default App;
