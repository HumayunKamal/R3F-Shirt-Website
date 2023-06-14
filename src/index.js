import ReactDom from "react-dom/client";
import "./index.css";
import { App as Canvas } from "./Canvas";
import { Overlay } from "./Overlay";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <>
    <Canvas />
    <Overlay />
  </>
);
