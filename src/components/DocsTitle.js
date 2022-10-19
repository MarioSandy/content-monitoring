import { useEffect, useState } from "react";

const DocsTitle = ({ onBlur, value }) => {
  const [title, setTitle] = useState("Untitled");

  useEffect(() => {
    if (value !== undefined) {
      setTitle(value);
    }
  }, [value]);

  return (
    <>
      <input
        className="border-none p-2 outline-none text-gray-400 focus:text-black w-48 text-ellipsis"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onBlur={(e) => onBlur(e.target.value)}
      ></input>
    </>
  );
};

export default DocsTitle;
