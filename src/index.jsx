/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import "./index.css";
import Home from "./pages/Home";
import Post from "./pages/for-the-ladies/Post";
import AdminPost from "./pages/admin/Post";
import Remove from "./pages/for-the-ladies/Remove";
import Edit from "./pages/for-the-ladies/Edit";
import List from "./pages/List";
import CreateGetCode from "./pages/admin/CreateGetCode";
import Faqs from "./pages/Faqs";
import HowTo from "./pages/for-the-ladies/HowTo";
import GetCode from "./pages/for-the-ladies/GetCode";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

const App = (props) => (
  <>
    <h1>Root header</h1>
    {props.children}
  </>
);

render(
  () => (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/admin/post" component={AdminPost} />
      <Route path="/admin/coder" component={CreateGetCode} />
      <Route path="/a/post" component={Post} />
      <Route path="/a/remove" component={Remove} />
      <Route path="/a/edit" component={Edit} />
      <Route path="/l" component={List} />
      <Route path="/faqs" component={Faqs} />
      <Route path="/a/how-to" component={HowTo} />
      <Route path="/a/get-code" component={GetCode} />
    </Router>
  ),
  root
);
