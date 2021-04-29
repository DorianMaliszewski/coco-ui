import * as React from 'react';
import React__default from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var injectClassNames = function (as) {
    if (as === void 0) { as = 'div'; }
    return function (strings) {
        var Element = function (_a) {
            var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
            return React__default.createElement(as, __assign({ className: "" + (className !== null && className !== void 0 ? className : '') + (strings ? " " + strings : "") }, props), children);
        };
        Element.displayName = "" + as;
        return Element;
    };
};

var variants$3 = {
    primary: 'bg-primary-500 text-background hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-300',
    outline: 'border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-background focus:outline-none focus:ring-2 focus:ring-primary-300',
    'no-border': "text-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-300",
};
var StyledButton = injectClassNames('button')(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["flex p-3 rounded items-center justify-center"], ["flex p-3 rounded items-center justify-center"])));
var StyledButtonContent = injectClassNames('div')(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["shadow z-10 bg-background absolute left-0 w-full top-full mt-1"], ["shadow z-10 bg-background absolute left-0 w-full top-full mt-1"])));
var ActionButton = function (_a) {
    var children = _a.children, className = _a.className, variant = _a.variant, props = __rest(_a, ["children", "className", "variant"]);
    var _b = React__default.useState(false), showActions = _b[0], setShowActions = _b[1];
    var listRef = React__default.useRef(null);
    var content = [];
    var actions = [];
    var handleActionClick = function (childOnClick) { return function (event) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, childOnClick(event)];
                case 1:
                    _a.sent();
                    setShowActions(false);
                    return [2 /*return*/];
            }
        });
    }); }; };
    React__default.useEffect(function () {
        var clickHandler = function (event) {
            if ((listRef === null || listRef === void 0 ? void 0 : listRef.current) && listRef.current.contains(event.target)) {
                event.stopPropagation();
            }
            else {
                setShowActions(false);
            }
        };
        document.addEventListener('click', clickHandler);
        return function () {
            document.removeEventListener('click', clickHandler);
        };
    }, []);
    React__default.Children.forEach(children, function (child, index) {
        if (!React__default.isValidElement(child)) {
            return child;
        }
        var elementChild = child;
        if (elementChild.type === ActionButton.Action) {
            actions.push(React__default.cloneElement(child, {
                key: child.key || index,
                onClick: child.props.onClick
                    ? handleActionClick(child.props.onClick)
                    : function () {
                        setShowActions(false);
                    },
            }));
        }
        else {
            content.push(child);
        }
    });
    return (React__default.createElement("div", { ref: listRef, className: "relative" },
        React__default.createElement(StyledButton, __assign({ onClick: function () { return setShowActions(!showActions); }, className: (className !== null && className !== void 0 ? className : '') + " " + variants$3[variant] }, props), content),
        React__default.createElement(StyledButtonContent, { className: showActions ? 'block' : 'sr-only' }, actions)));
};
ActionButton.defaultProps = {
    variant: 'primary',
};
var Action = function (props) {
    return (React__default.createElement("div", { className: "p-2 hover:bg-primary-100 cursor-pointer", onClick: props.onClick }, props.children));
};
Action.displayName = 'ActionButton.Action';
var Content = function (props) {
    return React__default.createElement(React__default.Fragment, null, props.children);
};
Content.displayName = 'ActionButton.Content';
ActionButton.Content = Content;
ActionButton.Action = Action;
var templateObject_1$4, templateObject_2$1;

var getStringFromAlt = function (altStr) {
    if (!altStr)
        return '';
    var array = altStr.split(' ');
    if (array.length > 1) {
        return ("" + (array[0].substr(0, 1) + array[1].substr(0, 1))).toUpperCase();
    }
    return array.length ? ("" + array[0].substr(0, 1)).toUpperCase() : '';
};
var StyledImg = injectClassNames('img')(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["rounded-full bg-gray-300 flex justify-center items-center"], ["rounded-full bg-gray-300 flex justify-center items-center"])));
var StyledDiv = injectClassNames('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["rounded-full bg-gray-300 flex justify-center items-center p-4"], ["rounded-full bg-gray-300 flex justify-center items-center p-4"])));
var Avatar = function (_a) {
    var size = _a.size, src = _a.src, alt = _a.alt, className = _a.className, props = __rest(_a, ["size", "src", "alt", "className"]);
    return src ? (React__default.createElement(StyledImg, __assign({ src: src, alt: alt, className: className, style: { width: size, height: size } }, props))) : (React__default.createElement(StyledDiv, __assign({ className: className, style: { width: size, height: size } }, props), getStringFromAlt(alt)));
};
Avatar.defaultProps = {
    size: 24,
};
var templateObject_1$3, templateObject_2;

var variants$2 = {
    basic: "bg-primary-500 text-white",
    outline: "border border-primary-500 text-primary-500",
    'no-border': "text-primary-500",
};
var StyledBadge = injectClassNames('div')(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["flex rounded items-center justify-center"], ["flex rounded items-center justify-center"])));
var Badge = function (_a) {
    var variant = _a.variant, children = _a.children, className = _a.className, props = __rest(_a, ["variant", "children", "className"]);
    return (React__default.createElement(StyledBadge, __assign({ className: variants$2[variant] + " " + className }, props), children));
};
Badge.defaultProps = {
    className: 'px-2 py-1',
    color: 'primary',
    variant: 'basic',
};
var templateObject_1$2;

var StyledBox = injectClassNames('div')(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["shadow dark:shadow-dark rounded text-foreground dark:text-background"], ["shadow dark:shadow-dark rounded text-foreground dark:text-background"])));
var Box = function (_a) {
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    return (React__default.createElement(StyledBox, __assign({ className: className }, props), children));
};
Box.defaultProps = {
    className: 'p-2',
};
var templateObject_1$1;

var baseClassName$1 = 'focus:outline-none hover:shadow my-1 flex p-3 rounded items-center justify-center';
var variants$1 = {
    primary: baseClassName$1 + " bg-primary-600 text-white hover:bg-primary-700 focus:ring focus:ring-offset-1 focus:ring-primary-300",
    default: baseClassName$1 + " bg-white text-foreground shadow focus:ring focus:ring-offset-1 focus:ring-foreground",
    success: baseClassName$1 + " bg-success-600 text-white hover:bg-success-700 focus:ring focus:ring-offset-1 focus:ring-success-300",
    error: baseClassName$1 + " bg-error-600 text-white hover:bg-error-700 focus:ring focus:ring-offset-1 focus:ring-error-300",
    warning: baseClassName$1 + " bg-warning-400 text-white hover:bg-warning-500 focus:ring focus:ring-offset-1 focus:ring-warning-200",
    info: baseClassName$1 + " bg-info-600 text-white hover:bg-info-700 focus:ring focus:ring-offset-1 focus:ring-info-300",
    transparent: baseClassName$1 + " bg-transparent",
    link: "bg-transparent underline font-bold",
};
var Button = function (_a) {
    var children = _a.children, tabIndex = _a.tabIndex, className = _a.className, variant = _a.variant, props = __rest(_a, ["children", "tabIndex", "className", "variant"]);
    return (React__default.createElement("button", __assign({ tabIndex: tabIndex, className: variants$1[variant] + " " + (className || '') }, props), children));
};
Button.defaultProps = {
    variant: 'primary',
    tabIndex: -1,
};

function CheckIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

function ChevronDownIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

function XIcon$1(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

var variants = {
    basic: {
        label: function (checked) {
            return "flex items-center justify-center appearance-none w-4 h-4 rounded relative " + (checked ? 'bg-primary-500' : 'border border-gray-300');
        },
        check: function (checked) {
            return "" + (checked ? 'fill-current text-background' : 'hidden');
        },
    },
};
var Checkbox = React__default.forwardRef(function (_a, ref) {
    var _b, _c, _d, _e;
    var id = _a.id, label = _a.label, _f = _a.labelPosition, labelPosition = _f === void 0 ? 'right' : _f, name = _a.name, ariaChecked = _a["aria-checked"], ariaLabel = _a["aria-label"], ariaLabelledBy = _a["aria-labelledby"], value = _a.value, checked = _a.checked, defaultChecked = _a.defaultChecked, onChange = _a.onChange, _g = _a.variant, variant = _g === void 0 ? 'basic' : _g;
    var inputRef = React__default.useRef(null);
    React__default.useImperativeHandle(ref, function () { return inputRef.current; });
    return !label ? (React__default.createElement("label", { "aria-checked": ariaChecked || checked, className: "" + ((_b = variants[variant]) === null || _b === void 0 ? void 0 : _b.label(!!checked)) },
        React__default.createElement(CheckIcon, { className: (_c = variants[variant]) === null || _c === void 0 ? void 0 : _c.check(!!checked) }),
        React__default.createElement("input", { id: id, className: "appearance-none", ref: inputRef, type: "checkbox", name: name, checked: checked, defaultChecked: defaultChecked, value: value, "aria-labelledby": ariaLabelledBy, "aria-label": ariaLabel, onChange: onChange }))) : (React__default.createElement("label", { className: "flex items-center", "aria-checked": ariaChecked || checked },
        labelPosition === 'left' && React__default.createElement("span", { className: "mr-1" }, label),
        React__default.createElement("div", { className: (_d = variants[variant]) === null || _d === void 0 ? void 0 : _d.label(!!checked) },
            React__default.createElement(CheckIcon, { className: (_e = variants[variant]) === null || _e === void 0 ? void 0 : _e.check(!!checked) }),
            React__default.createElement("input", { id: id, className: "appearance-none", ref: inputRef, type: "checkbox", name: name, checked: checked, defaultChecked: defaultChecked, value: value, "aria-labelledby": ariaLabelledBy, "aria-label": ariaLabel, onChange: onChange })),
        labelPosition === 'right' && React__default.createElement("span", { className: "ml-1" }, label)));
});
Checkbox.displayName = 'Checkbox';

var positions = {
    top: {
        container: '-top-80 left-0 w-full h-64',
        closeButton: "absolute -bottom-10 right-2",
    },
    right: {
        container: '-right-80 top-0 w-64 h-full',
        closeButton: "absolute top-2 -left-10",
    },
    bottom: {
        container: '-bottom-80 left-0 w-full h-64',
        closeButton: "absolute right-2 -top-10",
    },
    left: {
        container: '-left-80 top-0 w-64 h-full',
        closeButton: "absolute top-2 -right-10",
    },
};
var animations$2 = {
    slide: function (open, position) {
        if (open === void 0) { open = false; }
        if (position === void 0) { position = 'left'; }
        switch (position) {
            case 'top':
                return "transition-transform duration-300 transform " + (open ? 'translate-y-80' : '-translate-y-80');
            case 'right':
                return "transition-transform duration-300 transform " + (open ? '-translate-x-80' : 'translate-x-80');
            case 'bottom':
                return "transition-transform duration-300 transform " + (open ? '-translate-y-80' : 'translate-y-80');
            case 'left':
                return "transition-transform duration-300 transform " + (open ? 'translate-x-80' : '-translate-x-80');
        }
    },
};
var Drawer = function (_a) {
    var _b, _c, _d, _e;
    var children = _a.children, open = _a.open, hasBackdrop = _a.hasBackdrop, hasCloseButton = _a.hasCloseButton, position = _a.position, onClose = _a.onClose;
    var _f = React__default.useState(open), isVisible = _f[0], setIsVisible = _f[1];
    React__default.useEffect(function () {
        var handler = setTimeout(function () {
            setIsVisible(open);
        }, open ? 0 : 500);
        return function () { return clearTimeout(handler); };
    }, [open]);
    return hasBackdrop ? (React__default.createElement("div", { onDoubleClick: onClose, className: isVisible
            ? "z-10 fixed left-O top-0 bg-opacity-20 bg-foreground w-full h-full"
            : "sr-only" },
        React__default.createElement("div", { onDoubleClick: function (e) { return e.stopPropagation(); }, className: "bg-background fixed " + ((_b = positions[position]) === null || _b === void 0 ? void 0 : _b.container) + " p-2 shadow " + animations$2.slide(open, position) }, isVisible ? (React__default.createElement(React__default.Fragment, null,
            hasCloseButton && (React__default.createElement(XIcon$1, { className: ((_c = positions[position]) === null || _c === void 0 ? void 0 : _c.closeButton) + " stroke-current fill-current text-foreground stroke-0 p-2 w-8 h-8 bg-background shadow-xl overflow-hidden rounded-full", onClick: onClose, role: "button" })),
            children)) : null))) : (React__default.createElement("div", { className: "z-10 bg-background fixed " + ((_d = positions[position]) === null || _d === void 0 ? void 0 : _d.container) + " p-2 shadow " + animations$2.slide(open, position) }, isVisible ? (React__default.createElement(React__default.Fragment, null,
        hasCloseButton && (React__default.createElement(XIcon$1, { className: ((_e = positions[position]) === null || _e === void 0 ? void 0 : _e.closeButton) + " stroke-current fill-current text-foreground stroke-0 p-2 w-8 h-8 bg-background shadow-xl overflow-hidden rounded-full", onClick: onClose, role: "button" })),
        children)) : null));
};
Drawer.defaultProps = {
    open: false,
    position: 'right',
    hasBackdrop: false,
    hasCloseButton: true,
};

var GridItem = function (_a) {
    var children = _a.children, colSpan = _a.colSpan, rowSpan = _a.rowSpan, colStart = _a.colStart, rowStart = _a.rowStart, colEnd = _a.colEnd, rowEnd = _a.rowEnd;
    var itemClassNames = '';
    if (colSpan) {
        itemClassNames += " col-span-" + colSpan;
    }
    if (rowSpan) {
        itemClassNames += " row-span-" + rowSpan;
    }
    if (colStart) {
        itemClassNames += " col-start-" + colStart;
    }
    if (rowStart) {
        itemClassNames += " row-start-" + rowStart;
    }
    if (colEnd) {
        itemClassNames += " col-end-" + colEnd;
    }
    if (rowEnd) {
        itemClassNames += " row-end-" + rowEnd;
    }
    return React__default.createElement("div", { className: itemClassNames }, children);
};

var Grid = function (_a) {
    var cols = _a.cols, rows = _a.rows, gap = _a.gap, flow = _a.flow, autoCols = _a.autoCols, autoRows = _a.autoRows, children = _a.children;
    var gridClassNames = 'grid';
    if (autoRows) {
        gridClassNames += " auto-rows-" + autoRows;
    }
    if (autoCols) {
        gridClassNames += " auto-cols-" + autoCols;
    }
    if (flow) {
        gridClassNames += " grid-flow-" + flow;
    }
    if (cols) {
        gridClassNames += " grid-cols-" + cols;
    }
    if (rows) {
        gridClassNames += " grid-rows-" + rows;
    }
    if (gap) {
        gridClassNames += " gap-" + gap;
    }
    return React__default.createElement("div", { className: gridClassNames }, children);
};
Grid.Item = GridItem;

var Link = function (_a) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (React__default.createElement("button", __assign({ role: "link", className: 'text-primary-600 font-bold underline ' + className }, props), children));
};
Link.defaultProps = {
    className: '',
};

function XIcon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M6 18L18 6M6 6l12 12"
  }));
}

var useModalTransition = function (_a) {
    var _b = _a.defaultOpen, defaultOpen = _b === void 0 ? false : _b, _c = _a.onOpenDuration, onOpenDuration = _c === void 0 ? 0 : _c, onCloseDuration = _a.onCloseDuration, callbacks = _a.callbacks;
    var _d = React__default.useState('closed'), state = _d[0], setState = _d[1];
    var open = React__default.useCallback(function () {
        var _a;
        setState('opening');
        (_a = callbacks.opening) === null || _a === void 0 ? void 0 : _a.call(callbacks);
        setTimeout(function () {
            var _a;
            setState('opened');
            (_a = callbacks.opened) === null || _a === void 0 ? void 0 : _a.call(callbacks);
        }, onOpenDuration);
    }, [onOpenDuration, callbacks]);
    var close = React__default.useCallback(function () {
        var _a;
        setState('closing');
        (_a = callbacks.closing) === null || _a === void 0 ? void 0 : _a.call(callbacks);
        setTimeout(function () {
            var _a;
            setState('closed');
            (_a = callbacks.closed) === null || _a === void 0 ? void 0 : _a.call(callbacks);
        }, onCloseDuration !== null && onCloseDuration !== void 0 ? onCloseDuration : onOpenDuration);
    }, [onCloseDuration, onOpenDuration, callbacks]);
    React__default.useEffect(function () {
        if (defaultOpen) {
            setState('opened');
        }
        else {
            setState('closed');
        }
    }, [defaultOpen]);
    return {
        state: state,
        open: open,
        close: close,
        isOpen: ['opening', 'opened'].includes(state),
        isClose: ['closing', 'closed'].includes(state),
    };
};

var sizes = {
    xs: 'w-1/6',
    sm: 'w-2/6',
    md: 'w-3/6',
    lg: 'w-4/6',
    xl: 'w-5/6',
    full: 'w-full',
};
var fades = {
    fade: {
        in: 'translate-y-0 sm:scale-100',
        out: 'translate-y-4 sm:translate-y-0 sm:scale-95',
    },
    fadeTop: { in: '-translate-y-0', out: '-translate-y-20' },
    fadeRight: { in: '-translate-x-0', out: 'translate-x-20' },
    fadeBottom: { in: '-translate-y-0', out: 'translate-y-20' },
    fadeLeft: { in: '-translate-x-0', out: '-translate-x-20' },
};
var generateFadeAnimations = function () {
    return Object.entries(fades).reduce(function (acc, fadeEntry) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[fadeEntry[0]] = {
            container: {
                in: 'fixed inset-0 z-10 overflow-y-auto',
                out: 'sr-only',
            },
            background: {
                out: 'ease-in duration-300 opacity-0',
                in: 'ease-out duration-300 opacity-100',
            },
            modal: {
                out: "ease-in duration-200 opacity-0 " + fadeEntry[1].out,
                in: "ease-out duration-300 opacity-100 " + fadeEntry[1].in,
            },
        }, _a)));
    }, {});
};
var animations$1 = __assign({}, generateFadeAnimations());
var getContainerClassNames = function (animation, state) {
    var _a, _b;
    switch (state) {
        case 'closed':
            return (_a = animations$1[animation]) === null || _a === void 0 ? void 0 : _a.container.out;
        case 'closing':
        case 'opened':
        case 'opening':
            return (_b = animations$1[animation]) === null || _b === void 0 ? void 0 : _b.container.in;
        default:
            return '';
    }
};
var getBackgroundClassNames = function (animation, state) {
    var _a, _b, _c;
    var base = 'fixed flex inset-0 bg-gray-500 bg-opacity-75 transition-opacity';
    switch (state) {
        case 'closed':
            return base + " " + ((_a = animations$1[animation]) === null || _a === void 0 ? void 0 : _a.background.out);
        case 'closing':
            return base + " " + ((_b = animations$1[animation]) === null || _b === void 0 ? void 0 : _b.background.out);
        case 'opened':
        case 'opening':
            return base + " " + ((_c = animations$1[animation]) === null || _c === void 0 ? void 0 : _c.background.in);
        default:
            return '';
    }
};
var getModalDialodClassNames = function (animation, state, size) {
    var _a, _b;
    var base = sizes[size] + " text-foreground flex align-bottom bg-white rounded-lg text-left overflow-visible shadow-xl transform transition-all sm:my-4 sm:align-middle sm:max-w-full p-2";
    switch (state) {
        case 'closed':
        case 'closing':
            return base + " " + ((_a = animations$1[animation]) === null || _a === void 0 ? void 0 : _a.modal.out);
        case 'opened':
        case 'opening':
            return base + " " + ((_b = animations$1[animation]) === null || _b === void 0 ? void 0 : _b.modal.in);
        default:
            return '';
    }
};
var getModalContainerlClassNames = function (position) {
    var base = 'flex min-h-screen pt-4 px-4 pb-20 text-center sm:p-0';
    switch (position) {
        case 'top':
            return base + " items-start justify-center";
        case 'right':
            return base + " items-center justify-end";
        case 'bottom':
            return base + " items-end justify-center ";
        case 'left':
            return base + " items-center";
        case 'center':
        default:
            return base + " items-center justify-center";
    }
};
var getCloseButtonClassNames = function (position, size) {
    var base = 'absolute bg-background rounded-full w-6 h-6 p-1 flex items-center justify-center';
    if (size === 'full' || position === 'right') {
        return base + " top-1 right-2";
    }
    return base + " -right-8 top-0";
};
var getModalClassNames = function (animation, state, position, size) {
    var classNames = {};
    classNames.container = getContainerClassNames(animation, state);
    classNames.background = getBackgroundClassNames(animation, state);
    classNames.modal = getModalDialodClassNames(animation, state, size);
    classNames.modalContainer = getModalContainerlClassNames(position);
    classNames.closeButton = getCloseButtonClassNames(position, size);
    return classNames;
};

var Modal = function (_a) {
    var _b = _a.animation, animation = _b === void 0 ? 'fade' : _b, open = _a.open, onClose = _a.onClose, children = _a.children, _c = _a.size, size = _c === void 0 ? 'md' : _c, _d = _a.position, position = _d === void 0 ? 'center' : _d, _e = _a.closeOnOverlayDoubleClick, closeOnOverlayDoubleClick = _e === void 0 ? true : _e, ariaLabelledBy = _a["aria-labelledby"];
    var modalState = useModalTransition({
        defaultOpen: open,
        onOpenDuration: 300,
        onCloseDuration: 300,
        callbacks: {
            closed: onClose,
        },
    });
    var onClickOutside = function (event) {
        event.stopPropagation();
        if (closeOnOverlayDoubleClick)
            modalState.close();
    };
    var classes = React__default.useMemo(function () { return getModalClassNames(animation, modalState.state, position, size); }, [modalState.state, position, size, animation]);
    return (React__default.createElement("div", { className: "" + classes.container, "aria-labelledby": ariaLabelledBy, role: "dialog", "aria-modal": "true" },
        React__default.createElement("div", { onDoubleClick: onClickOutside, className: "" + classes.background, "aria-hidden": "true" }),
        React__default.createElement("div", { className: "" + classes.modalContainer },
            React__default.createElement("div", { onDoubleClick: function (event) { return event.stopPropagation(); }, className: "" + classes.modal },
                React__default.createElement(XIcon, { role: "button", className: classes.closeButton, onClick: modalState.close }),
                React__default.createElement("div", null, children)))));
};

var Radio = function (_a) {
    var name = _a.name, id = _a.id, ariaLabelledBy = _a["aria-labelledby"], ariaLabel = _a["aria-label"], value = _a.value, onChange = _a.onChange, checked = _a.checked, defaultChecked = _a.defaultChecked, label = _a.label, _b = _a.labelPosition, labelPosition = _b === void 0 ? 'left' : _b, _c = _a.className, className = _c === void 0 ? '' : _c;
    return !label ? (React__default.createElement("div", { className: "cursor-pointer flex items-center m-1" },
        React__default.createElement("div", { className: "h-2 w-2 m-1 rounded-full " + (checked
                ? 'bg-primary-500 ring ring-primary-500 ring-offset-2'
                : 'bg-gray-200 ring ring-gray-200 ring-offset-2') }),
        React__default.createElement("input", { className: "appearance-none", name: name, id: id, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, value: value, type: "radio", onChange: onChange, checked: checked, defaultChecked: defaultChecked }))) : (React__default.createElement("label", { className: "cursor-pointer flex items-center " + className },
        labelPosition === 'left' && React__default.createElement("span", { className: "mr-1" }, label),
        React__default.createElement("div", { className: "h-2 w-2 m-1 rounded-full " + (checked
                ? 'bg-primary-500 ring ring-primary-500 ring-offset-2'
                : 'bg-gray-200 ring ring-gray-200 ring-offset-2') }),
        React__default.createElement("input", { className: "appearance-none", name: name, id: id, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, value: value, type: "radio", onChange: onChange, checked: checked, defaultChecked: defaultChecked }),
        labelPosition === 'right' && React__default.createElement("span", { className: "ml-1" }, label)));
};

var _circle, _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgLoading(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _circle || (_circle = /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 10,
    stroke: "currentColor",
    strokeWidth: 4,
    opacity: 0.25
  })), _path || (_path = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
    opacity: 0.75
  })));
}

var MemoSvgLoading = /*#__PURE__*/React.memo(SvgLoading);

var Option = function (_a) {
    var isMulti = _a.isMulti, value = _a.value, valueKey = _a.valueKey, textKey = _a.textKey, option = _a.option, focused = _a.focused, index = _a.index, _b = _a.renderOption, renderOption = _b === void 0 ? function (_a) {
        var option = _a.option, isSelected = _a.isSelected;
        return (React__default.createElement(React__default.Fragment, null,
            isMulti && isSelected ? (React__default.createElement(CheckIcon, { className: "fill-current h-4 w-4" })) : null,
            option[textKey]));
    } : _b, onOptionClick = _a.onOptionClick;
    var isSelected = React__default.useMemo(function () {
        var _a;
        return isMulti
            ? ((_a = value) === null || _a === void 0 ? void 0 : _a.findIndex(function (v) { return v[valueKey] === option[valueKey]; })) > -1
            : option[valueKey] === value;
    }, [value, valueKey, option, isMulti]);
    return (React__default.createElement("div", { className: "py-1 px-1 flex items-center hover:bg-primary-600 hover:text-white cursor-pointer " + (focused === index ? 'bg-primary-600 text-white' : '') + " " + (isSelected && focused !== index ? 'text-primary-600' : ''), key: option[valueKey], id: option[valueKey], role: "option", "aria-selected": isSelected, onClick: function (event) { return onOptionClick(option, event); } }, renderOption({ option: option, isSelected: isSelected })));
};

var OptionList = React__default.forwardRef(function (_a, ref) {
    var focused = _a.focused, isOpen = _a.isOpen, name = _a.name, options = _a.options, onOptionClick = _a.onOptionClick, valueKey = _a.valueKey, textKey = _a.textKey, value = _a.value, isMulti = _a.isMulti, renderOption = _a.renderOption;
    return (React__default.createElement("div", { className: "absolute top-full left-0 " + (isOpen
            ? 'border shadow bg-white mt-1 max-h-40 w-full overflow-y-scroll'
            : 'sr-only'), ref: ref, id: name + '-list', role: "listbox" }, options.map(function (option, index) { return (React__default.createElement(Option, { renderOption: renderOption, focused: focused, key: option[valueKey], isMulti: isMulti, option: option, index: index, valueKey: valueKey, textKey: textKey, onOptionClick: onOptionClick, value: value })); })));
});
OptionList.displayName = 'OptionList';

var Select = React__default.forwardRef(function (_a, ref) {
    var _b, _c, _d;
    var className = _a.className, id = _a.id, _e = _a.name, name = _e === void 0 ? '' : _e, _f = _a.options, options = _f === void 0 ? [] : _f, placeholder = _a.placeholder, onChange = _a.onChange, value = _a.value, parentRef = _a.parentRef, disabled = _a.disabled, readOnly = _a.readOnly, tabIndex = _a.tabIndex, isLoading = _a.isLoading, isSearchable = _a.isSearchable, isMulti = _a.isMulti, _g = _a.textKey, textKey = _g === void 0 ? 'label' : _g, _h = _a.valueKey, valueKey = _h === void 0 ? 'value' : _h, _j = _a.renderSelected, renderSelected = _j === void 0 ? function (value) {
        return isMulti
            ? value
                .map(function (value) { return value[textKey]; })
                .join(', ')
            : value[textKey];
    } : _j, renderOption = _a.renderOption;
    var _k = React__default.useState(false), isOpen = _k[0], setOpen = _k[1];
    var _l = React__default.useState(''), search = _l[0], setSearch = _l[1];
    var inputRef = React__default.useRef(null);
    var listRef = React__default.useRef(null);
    var containerRef = React__default.useRef((_b = parentRef === null || parentRef === void 0 ? void 0 : parentRef.current) !== null && _b !== void 0 ? _b : null);
    var _m = React__default.useState(0), focused = _m[0], setFocused = _m[1];
    var inputProps = {
        tabIndex: tabIndex !== null && tabIndex !== void 0 ? tabIndex : -1,
    };
    React__default.useImperativeHandle(ref, function () { return inputRef.current; });
    var handleKeyDown = function (event) {
        if (!isOpen) {
            return;
        }
        if (event.key.includes('Arrow') || event.key === 'Enter')
            event.preventDefault();
        switch (event.key) {
            case 'Tab':
            case 'Escape':
                setOpen(false);
                break;
            case 'ArrowUp':
                setFocused(focused === 0 ? focused : focused - 1);
                break;
            case 'ArrowDown':
                setFocused(options.length <= focused + 1 ? focused : focused + 1);
                break;
            case 'Enter':
                isMulti
                    ? handleClickForMulti(options[focused])
                    : handleClickForSingle(options[focused]);
                break;
        }
    };
    var handleClickForMulti = function (option) {
        var _a;
        if (!value) {
            onChange([option]);
            return;
        }
        var typedValue = value;
        var index = typedValue === null || typedValue === void 0 ? void 0 : typedValue.findIndex(function (v) { return v[valueKey] === option[valueKey]; });
        if (index > -1) {
            var tmp = __spreadArray([], typedValue);
            tmp.splice(index, 1);
            onChange(__spreadArray([], tmp));
        }
        else {
            onChange(__spreadArray(__spreadArray([], typedValue), [option]));
        }
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    var handleClickForSingle = function (option) {
        onChange(option);
        setSearch(option[textKey]);
        setOpen(false);
    };
    React__default.useEffect(function () {
        var selectElement = containerRef === null || containerRef === void 0 ? void 0 : containerRef.current;
        var handleSelectClick = function (event) {
            var _a;
            if (disabled || readOnly) {
                return;
            }
            if ((selectElement === null || selectElement === void 0 ? void 0 : selectElement.contains(event.target)) ||
                selectElement === event.target) {
                setOpen(true);
                (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            }
            else {
                setOpen(false);
            }
        };
        window.addEventListener('click', handleSelectClick);
        window.addEventListener('touchstart', handleSelectClick);
        return function () {
            window.removeEventListener('click', handleSelectClick);
            window.removeEventListener('touchstart', handleSelectClick);
        };
    }, [containerRef, disabled, readOnly, isOpen, ref]);
    React__default.useEffect(function () {
        if (isOpen) {
            var selected = options.findIndex(function (option) { return option[valueKey] === value; });
            if (selected > -1) {
                setFocused(selected);
            }
            else {
                setFocused(0);
            }
        }
    }, [isOpen, value, options, valueKey]);
    React__default.useEffect(function () {
        if (!isMulti) {
            setSearch(function (currentSearch) {
                var _a;
                if (!currentSearch) {
                    return value
                        ? (_a = options.find(function (option) {
                            return option[valueKey] === value ||
                                option[valueKey] === value[valueKey];
                        })) === null || _a === void 0 ? void 0 : _a[textKey]
                        : '';
                }
                return currentSearch;
            });
        }
    }, [isMulti, value, options, valueKey, textKey]);
    return (React__default.createElement("div", { ref: containerRef, className: "relative border " + (!disabled && !readOnly && !isLoading
            ? 'focus-within:border-primary-600'
            : '') + " bg-background border-gray-300 rounded p-2 flex items-center " + (disabled ? 'bg-gray-50 cursor-not-allowed pointer-events-none' : '') + " " + (className !== null && className !== void 0 ? className : ''), "aria-disabled": disabled, onKeyDown: handleKeyDown },
        React__default.createElement("div", { className: "w-full flex items-center", "aria-readonly": readOnly },
            isMulti ? (React__default.createElement(React__default.Fragment, null,
                value && (React__default.createElement("div", { className: "flex outline-none mr-1" }, renderSelected(value || []))),
                React__default.createElement("input", __assign({ className: "flex-grow outline-none " + (isLoading &&
                        'bg-transparent pointer-events-none cursor-not-allowed') + " " + (disabled && 'opacity-50'), "aria-expanded": isOpen, "aria-controls": name + '-list', "aria-owns": name + '-list', "aria-activedescendant": (_c = options.find(function (option) { return option[valueKey] === value; })) === null || _c === void 0 ? void 0 : _c[valueKey], role: "combobox", "aria-haspopup": "listbox", id: id, placeholder: placeholder || 'Select...' }, inputProps, { ref: inputRef, disabled: disabled, readOnly: readOnly || !isSearchable, onKeyDown: function (event) {
                        switch (event.key) {
                            case 'ArrowDown':
                                if (!isOpen && !disabled && !readOnly) {
                                    setFocused(focused === 0 ? focused : focused - 1);
                                    setOpen(true);
                                }
                                break;
                            case 'Tab':
                            case 'Escape':
                                if (isOpen)
                                    setOpen(false);
                                break;
                        }
                    }, onFocus: function () {
                        if (!readOnly && !disabled)
                            setOpen(true);
                    }, value: search, onChange: function (e) { return setSearch(e.target.value); } })))) : (React__default.createElement(React__default.Fragment, null,
                React__default.createElement("input", __assign({ className: "bg-transparent w-full outline-none " + (isLoading && 'pointer-events-none cursor-not-allowed') + " " + (disabled && 'opacity-50'), "aria-expanded": isOpen, "aria-controls": name + '-list', "aria-owns": name + '-list', "aria-activedescendant": (_d = options.find(function (option) { return option[valueKey] === value; })) === null || _d === void 0 ? void 0 : _d[valueKey], role: "combobox", "aria-haspopup": "listbox", type: "text", id: id }, inputProps, { ref: inputRef, disabled: disabled, readOnly: readOnly || isLoading || !isSearchable, placeholder: placeholder || 'Select...', onChange: function (e) {
                        if (isSearchable) {
                            setSearch(e.target.value);
                        }
                    }, onFocus: function () {
                        if (!readOnly && !disabled)
                            setOpen(true);
                    }, onKeyDown: function (event) {
                        switch (event.key) {
                            case 'ArrowDown':
                                if (!isOpen && !disabled && !readOnly) {
                                    setFocused(focused === 0 ? focused : focused - 1);
                                    setOpen(true);
                                }
                                break;
                            case 'Tab':
                            case 'Escape':
                                if (isOpen)
                                    setOpen(false);
                                break;
                        }
                    }, value: search })))),
            !isLoading && !readOnly && (React__default.createElement("span", { className: "flex px-1" },
                React__default.createElement(ChevronDownIcon, { width: 12, height: 12, className: "fill-current " + (isOpen ? 'text-primary-600' : 'text-gray-400') }))),
            isLoading && (React__default.createElement(MemoSvgLoading, { className: "animate-spin mx-1 h-5 w-5 text-primary-400" }))),
        !isLoading && (React__default.createElement(OptionList, { isMulti: isMulti, name: name, ref: listRef, isOpen: isOpen, options: !isSearchable || !search
                ? options
                : options === null || options === void 0 ? void 0 : options.filter(function (option) {
                    var _a;
                    return (_a = option[textKey]) === null || _a === void 0 ? void 0 : _a.toLowerCase().replace(/\s+/g, '').includes(search.toLowerCase().replace(/\s+/g, ''));
                }), value: value, valueKey: valueKey, textKey: textKey, focused: focused, renderOption: renderOption, onOptionClick: function (option, event) {
                event.preventDefault();
                event.stopPropagation();
                isMulti
                    ? handleClickForMulti(option)
                    : handleClickForSingle(option);
            } }))));
});
Select.displayName = 'Select';

var TableRow = function (_a) {
    var children = _a.children, hoverable = _a.hoverable, className = _a.className, isEven = _a.isEven, props = __rest(_a, ["children", "hoverable", "className", "isEven"]);
    var classes = '';
    if (hoverable)
        classes += !isEven
            ? 'hover:bg-gray-200 cursor-pointer'
            : 'hover:bg-gray-200 cursor-pointer';
    return (React__default.createElement("tr", __assign({ className: classes + " " + (!isEven ? 'bg-gray-100' : 'bg-background') + " " + className }, props), children));
};

var TableBody = function (_a) {
    var children = _a.children, hoverable = _a.hoverable, props = __rest(_a, ["children", "hoverable"]);
    var finalRows = React__default.Children.map(children, function (child, index) {
        var _a;
        if (!React__default.isValidElement(child)) {
            return child;
        }
        var elementChild = child;
        if (elementChild.type === TableRow) {
            return React__default.cloneElement(elementChild, {
                isEven: index % 2 === 0,
                hoverable: (_a = elementChild.props.hoverable) !== null && _a !== void 0 ? _a : hoverable,
            });
        }
        return child;
    });
    return React__default.createElement("tbody", __assign({}, props), finalRows);
};

var TableHead = function (_a) {
    var columns = _a.columns, props = __rest(_a, ["columns"]);
    return (React__default.createElement("thead", __assign({}, props),
        React__default.createElement("tr", { className: "bg-primary-500 text-white uppercase text-sm leading-normal" }, columns.map(function (column, index) { return (React__default.createElement("th", { className: "py-3 px-6 " + (index === 0 ? 'pl-5' : ''), key: index }, column.name)); }))));
};

var Table = function (_a) {
    var children = _a.children, className = _a.className, hoverable = _a.hoverable, props = __rest(_a, ["children", "className", "hoverable"]);
    var finalChildren = React__default.Children.map(children, function (child) {
        var _a;
        if (!React__default.isValidElement(child)) {
            return child;
        }
        var elementChild = child;
        if (elementChild.type === TableBody) {
            return React__default.cloneElement(elementChild, {
                hoverable: (_a = elementChild.props.hoverable) !== null && _a !== void 0 ? _a : hoverable,
            });
        }
        return child;
    });
    return (React__default.createElement("table", __assign({ className: 'min-w-max w-full table-auto text-left ' + className }, props), finalChildren));
};
Table.Head = TableHead;
Table.Body = TableBody;
Table.Row = TableRow;
var TableCell = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default.createElement("td", __assign({ className: "py-3 px-6" }, props), children));
};
Table.Cell = TableCell;

var baseClassName = "border focus:border-primary-600 p-2 rounded outline-none focus:ring-2 ring-primary-200";
var TextInput = React__default.forwardRef(function (_a, ref) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, multiline = _a.multiline, _c = _a.placeholder, placeholder = _c === void 0 ? 'Type here...' : _c, props = __rest(_a, ["className", "multiline", "placeholder"]);
    return multiline ? (React__default.createElement("textarea", __assign({ placeholder: placeholder, className: baseClassName + " " + className, ref: ref }, props))) : (React__default.createElement("input", __assign({ placeholder: placeholder, className: baseClassName + " " + className, ref: ref }, props)));
});
TextInput.displayName = 'TextInput';

var fadeIn = function (open) {
    return open ? 'ease-out duration-300 opacity-100' : 'ease-in duration-200 opacity-0';
};
var animations = {
    fadeIn: fadeIn,
};

var makeUUID = function (prefix, length) {
    if (prefix === void 0) { prefix = ''; }
    if (length === void 0) { length = 10; }
    var result = [];
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }
    return prefix.length > 0 ? prefix + "-" + result.join('') : result.join('');
};

var useDebounce = function (value, delay) {
    // State and setters for debounced value
    var _a = React__default.useState(value), debouncedValue = _a[0], setDebouncedValue = _a[1];
    React__default.useEffect(function () {
        // Update debounced value after delay
        var handler = setTimeout(function () {
            setDebouncedValue(value);
        }, delay);
        // Cancel the timeout if value changes (also on delay change or unmount)
        // This is how we prevent debounced value from updating if value is changed ...
        // .. within the delay period. Timeout gets cleared and restarted.
        return function () {
            clearTimeout(handler);
        };
    }, [value, delay] // Only re-call effect if value or delay changes
    );
    return debouncedValue;
};

var Tooltip = function (_a) {
    var render = _a.render, children = _a.children, toolptipId = _a.toolptipId, _b = _a.position, position = _b === void 0 ? 'top' : _b;
    var _c = React__default.useState(false), isOpen = _c[0], setIsOpen = _c[1];
    var visible = useDebounce(isOpen, 200);
    var id = React__default.useMemo(function () { return toolptipId !== null && toolptipId !== void 0 ? toolptipId : makeUUID(); }, [toolptipId]);
    var handlerRef = React__default.useRef();
    var handleOpen = function () {
        if (handlerRef.current)
            clearTimeout(handlerRef.current);
        if (!isOpen) {
            setIsOpen(true);
        }
    };
    var handleClose = function () {
        setIsOpen(false);
    };
    var positionClassNames = React__default.useMemo(function () {
        switch (position) {
            case 'right':
                return 'left-full ml-1';
            case 'left':
                return 'right-full mr-1';
            case 'bottom':
                return 'top-full mt-1';
            case 'top':
            default:
                return 'bottom-full mb-1';
        }
    }, [position]);
    return (React__default.createElement("div", { "aria-describedby": id, className: "relative flex", onMouseEnter: handleOpen, onMouseLeave: handleClose },
        React__default.createElement("div", { className: "flex" }, children),
        React__default.createElement("div", { id: id, role: "tooltip", className: "absolute bg-white shadow-xl p-2 border border-gray-200 rounded " + positionClassNames + " " + animations.fadeIn(isOpen) + " " + (!visible && !isOpen && 'sr-only') + "\n        }" }, render)));
};

var StyledTopBar = injectClassNames('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["fixed top-0 left-0 h-16 right-0 shadow-md px-3 flex items-center border-b border-primary-500"], ["fixed top-0 left-0 h-16 right-0 shadow-md px-3 flex items-center border-b border-primary-500"])));
var TopBar = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default.createElement(StyledTopBar, __assign({}, props), children));
};
var templateObject_1;

export { ActionButton, Avatar, Badge, Box, Button, Checkbox, Drawer, Grid, Link, Modal, Radio, Select, Table, TextInput, Tooltip, TopBar };
//# sourceMappingURL=index.esm.js.map
