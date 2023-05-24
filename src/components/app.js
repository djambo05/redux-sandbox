import React from "react";
import Counter from "./counter";

const App = ({ ...args }) => {
  return <Counter {...args} />;
};

export default App;
