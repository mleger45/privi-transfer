import React from "react";
import { UserContext } from "../contexts/user-context";

function Dashboard() {
  return (
    <UserContext.Consumer>
      {(context) => <div>Dashboard loaded: {context} </div>}
    </UserContext.Consumer>
  );
}

export default Dashboard;
