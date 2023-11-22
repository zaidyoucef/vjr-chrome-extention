console.log("hello world");
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const app = document.createElement("div");
app.id = "my-extension-root";
document.querySelector("#ID").appendChild(app);
ReactDOM.createRoot(app).render(<App />);
