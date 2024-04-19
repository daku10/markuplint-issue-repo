import { useState } from "react";

type Value = "value1" | "value2";
export function App() {
  const [value, setValue] = useState<Value>("value1");

  return (
    <div>
      <select
        onChange={(e) => {
          setValue(e.target.value as Value);
        }}
      >
        <option>value1</option>
        <option>value2</option>
      </select>
      <p>{value}</p>
    </div>
  );
}
