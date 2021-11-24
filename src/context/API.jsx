import React, { createContext, useState } from "react";

export const root = createContext();

function API({ children }) {
  const [lan, setlan] = useState("AR");
  const [cats, setcats] = useState(null);

  const SETcats = (i) => {
    setcats(i);
  };
  const SETlan = (i) => {
    setlan(i);
  };

  return (
    <div>
      <root.Provider value={{ SETcats, cats, lan, SETlan }}>
        {children}
      </root.Provider>
    </div>
  );
}

export default API;
