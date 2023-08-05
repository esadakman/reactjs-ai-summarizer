import { useContext } from "react";
import Suggestions from "./suggestions";
import User from "./user";
import useUser from "../../hooks/use-user";
// import Suggestions from './suggestions';
// import LoggedInUserContext from '../../context/logged-in-user';

export default function Sidebar() {
  const {
    user: { fullName, username, userId },
  } = useUser();

  return (
    <div className="p-4">
      <User />
      <Suggestions />
    </div>
  );
}
