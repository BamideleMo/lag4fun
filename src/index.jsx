/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import "./index.css";
import Home from "./pages/Home";
import Post from "./pages/for-the-ladies/Post";
import AdminPost from "./pages/admin/Post";
import Edit from "./pages/for-the-ladies/Edit";
import Faqs from "./pages/Faqs";
import Login from "./pages/for-the-ladies/Login";
import Register from "./pages/for-the-ladies/Register";
import Created from "./pages/for-the-ladies/Created";
import Validation from "./pages/for-the-ladies/Validation";
import ValidationLink from "./pages/for-the-ladies/ValidationLink";
import Success from "./pages/for-the-ladies/Success";
import Profile from "./pages/for-the-ladies/Profile";
import Tips from "./pages/for-the-ladies/Tips";
import LoginToValidate from "./pages/for-the-ladies/LoginToValidate";
import Validated from "./pages/for-the-ladies/Validated";
import Report from "./pages/Report";
import Terms from "./pages/Terms";
import Safety from "./pages/Safety";
import Privacy from "./pages/Privacy";
import Advertise from "./pages/for-the-ladies/Advertise";

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
      <Route path="/a/post" component={Post} />
      <Route path="/a/edit" component={Edit} />
      <Route path="/faqs" component={Faqs} />
      <Route path="/a/login" component={Login} />
      <Route path="/a/register" component={Register} />
      <Route path="/a/created" component={Created} />
      <Route path="/a/validation" component={Validation} />
      <Route path="/a/validation/link" component={ValidationLink} />
      <Route path="/a/login-to-validate" component={LoginToValidate} />
      <Route path="/a/validated" component={Validated} />
      <Route path="/a/success" component={Success} />
      <Route path="/a/profile" component={Profile} />
      <Route path="/a/tips" component={Tips} />
      <Route path="/a/advertise" component={Advertise} />
      <Route path="/report" component={Report} />
      <Route path="/terms" component={Terms} />
      <Route path="/safety" component={Safety} />
      <Route path="/privacy" component={Privacy} />
    </Router>
  ),
  root
);
