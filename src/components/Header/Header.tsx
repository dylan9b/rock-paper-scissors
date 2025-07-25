import { useSelector } from "react-redux";
import { balanceSelector } from "../../features/user";

export default function Header() {
  const userBalance = useSelector(balanceSelector);

  return (
    <header>
      <div className="flex">
        <p>Balance: {userBalance}</p>
      </div>
    </header>
  );
}
