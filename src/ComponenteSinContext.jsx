import React, { useContext } from "react";

import { GlobalContext } from "./Context/Global/global.context";

export default function ComponenteSinContext() {
  const { handleCount } = useContext(GlobalContext);
  return (
    <div>
      <h3>Componente without Context</h3>
      <button onClick={() => handleCount("increment")}>Count</button>
      <button onClick={() => handleCount("decrement")}>-</button>
    </div>
  );
}
