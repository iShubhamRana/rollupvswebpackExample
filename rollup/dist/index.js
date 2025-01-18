import { g as getDefaultExportFromCjs, r as requireReact } from './react-vendor-765e502f.js';
import { r as requireReactDom } from './react-dom-vendor-71cc8716.js';

var reactExports = /*@__PURE__*/ requireReact();
var React = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

var client = {};

var hasRequiredClient;
function requireClient() {
  if (hasRequiredClient) return client;
  hasRequiredClient = 1;
  var m = /*@__PURE__*/requireReactDom();
  {
    client.createRoot = m.createRoot;
    client.hydrateRoot = m.hydrateRoot;
  }
  return client;
}

var clientExports = /*@__PURE__*/ requireClient();

var App = function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "rollup"));
};
var App$1 = App;

var container = document.getElementById("root");
var root = clientExports.createRoot(container);
root.render(/*#__PURE__*/React.createElement(App$1));
