import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import Button from "../components/Button";
import DocsTitle from "../components/DocsTitle";
import QuillEditor from "../components/Quill";
import "../css/Docs.css";

const Docs = () => {
  const [socket, setSocket] = useState();
  const [delta, setDelta] = useState();
  const [title, setTitle] = useState();
  const [quillValue, setQuillValue] = useState();
  const { id: documentId } = useParams();

  useEffect(() => {
    const s = io("http://127.0.0.1:5001");
    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, []);

  useEffect(() => {
    const deltaHandler = (delta) => {
      setDelta(delta);
    };

    const titleHandler = (title) => {
      setTitle(title);
    };

    if (socket !== undefined) {
      socket.on("receive-changes", deltaHandler);
      socket.on("receive-title-changes", titleHandler);
    }

    return () => {
      if (socket !== undefined) {
        socket.off("receive-changes", deltaHandler);
        socket.off("receive-title-changes", titleHandler);
      }
    };
  }, [socket]);

  useEffect(() => {
    if (documentId !== undefined && socket !== undefined) {
      socket.once("load-document", (document) => {
        setQuillValue(document);
      });
      socket.emit("get-document", documentId);
    }
  }, [documentId, socket]);

  const onChangeQuill = (delta) => {
    if (socket !== undefined) {
      socket.emit("send-changes", delta);
    }
  };

  const onBlurDocsTitle = (docsTitle) => {
    if (socket !== undefined) {
      socket.emit("send-title-changes", docsTitle);
    }
  };

  return (
    <div>
      <div className="flex p-3 items-center sticky top-0 z-[1] bg-white border-t-[1px] border-x-[1px] border-gray-300">
        <DocsTitle onBlur={(title) => onBlurDocsTitle(title)} value={title} />
        <Button className="ml-auto" size="sm">
          Add Collaborators
        </Button>
      </div>
      <QuillEditor
        onChange={(delta) => onChangeQuill(delta)}
        changes={delta}
        value={quillValue}
      />
    </div>
  );
};

export default Docs;
