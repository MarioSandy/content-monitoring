import Quill from "quill";
import { ImageDrop } from "quill-image-drop-module";
import ImageResize from "quill-image-resize-module-react";

Quill.register("modules/imageDrop", ImageDrop);
Quill.register("modules/imageResize", ImageResize);

const quillConfig = {
  theme: "snow",
  modules: {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, false] }],
      [{ font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      [{ align: [] }],
      ["image", "blockquote", "code-block"],
      ["clean"],
    ],
    imageDrop: true,
    imageResize: {
      parchment: Quill.import("parchment"),
      displayStyles: {
        backgroundColor: "black",
        border: "none",
        color: "white",
      },
      toolbarStyles: {
        backgroundColor: "black",
        border: "none",
        color: "white",
      },
      modules: ["Resize", "DisplaySize", "Toolbar"],
    },
  },
};

export { quillConfig, Quill };
