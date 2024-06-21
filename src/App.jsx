import React, { useState } from "react";
import AppRouter from "./router";
import { UserContext } from "./hooks/user";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter />
    </UserContext.Provider>
  );
};

export default App;
