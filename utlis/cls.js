"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(className) {
    var classname = className;
    return function (element, attrs) {
        var classnames = [];
        if (element) {
            classnames.push(classname + "__" + element);
            Object.keys(attrs).forEach(function (key) {
                if (Boolean(attrs[key]) === true) {
                    classnames.push(classname + "__" + element + "_" + key);
                }
                else {
                    classnames.push(classname + "__" + element + "_" + key + "_" + attrs[key]);
                }
            });
            return classnames.join('');
        }
        return classname;
    };
}
exports.default = default_1;
//# sourceMappingURL=cls.js.map