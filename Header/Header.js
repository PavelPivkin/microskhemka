"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var cls_1 = require("../utlis/cls");
require("./Header.sass");
var b = cls_1.default('m-header');
function MHeader(props) {
    return (React.createElement(semantic_ui_react_1.Container, { text: true, className: b() },
        React.createElement(semantic_ui_react_1.Header, { as: 'h1', content: '\u041C\u0418\u041A\u0420\u041E\u0421\u0425\u0415\u041C\u041A\u0410', inverted: true }),
        React.createElement(semantic_ui_react_1.Header, { as: 'h2', content: '', inverted: true })));
}
exports.default = MHeader;
//# sourceMappingURL=Header.js.map