import React, { useCallback, useEffect, useState } from "react";
import "quill/dist/quill.snow.css";
import { Quill, quillConfig } from "../config/quillConfig";

const QuillEditor = ({ onChange, changes, value }) => {
  const [quill, setQuill] = useState();
  const [delta, setDelta] = useState();

  useEffect(() => {
    const handler = (delta, oldDelta, source) => {
      if (source === "user") {
        setDelta(delta);
      }
    };

    if (quill !== undefined) {
      quill.on("text-change", handler);
    }

    return () => {
      if (quill !== undefined) {
        quill.off("text-change", handler);
      }
    };
  }, [quill]);

  useEffect(() => {
    if (delta !== undefined) {
      onChange(delta);
    }
  }, [delta]);

  useEffect(() => {
    if (changes !== undefined && quill !== undefined) {
      quill.updateContents(changes);
    }
  }, [changes]);

  useEffect(() => {
    if (value !== undefined && quill !== undefined) {
      quill.setContents(value);
      quill.enable();
    }
  }, [value]);

  const wrapperRef = useCallback((wrapper) => {
    if (wrapper === null) return;
    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    const q = new Quill(editor, quillConfig);
    q.disable();
    q.setText("Loading...");
    setQuill(q);
  }, []);

  return <div id="container" ref={wrapperRef}></div>;
};

export default React.memo(QuillEditor);
