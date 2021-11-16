import React, { createContext, useState } from "react";

export const root = createContext();

function API({ children }) {
  const [cats, setcats] = useState(null);
  const SETcats = (i) => {
    setcats(i);
  };

  return (
    <div>
      <root.Provider value={{ SETcats, cats }}>{children}</root.Provider>
    </div>
  );
}

export default API;
