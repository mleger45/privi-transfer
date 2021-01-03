import React, {useContext} from "react";
import { UserContext } from "../contexts/user-context";

function Dashboard() {

  const [user] = useContext(UserContext);

  return (user.userObj)? <div>Hello, {user.userObj.getName()} </div>:<div>Wrong</div>

}

export default Dashboard;
