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

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var reactJsxRuntime_production_min = createCommonjsModule(function (module, exports) {
var g=60103;exports.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");exports.Fragment=h("react.fragment");}var m=React__default.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q;exports.jsxs=q;
});

/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var reactJsxRuntime_development = createCommonjsModule(function (module, exports) {

if (process.env.NODE_ENV !== "production") {
  (function() {

var React = React__default;
var _assign = objectAssign;

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  symbolFor('react.scope');
  symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.

function jsxWithValidationStatic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, true);
  }
}
function jsxWithValidationDynamic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, false);
  }
}

var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
// for now we can ship identical prod functions

var jsxs =  jsxWithValidationStatic ;

exports.jsx = jsx;
exports.jsxs = jsxs;
  })();
}
});

var jsxRuntime = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactJsxRuntime_production_min;
} else {
  module.exports = reactJsxRuntime_development;
}
});

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
    primary: 'bg-primary-500 text-white hover:bg-primary-600',
    outline: 'border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
    'no-border': "text-primary-500",
};
var StyledButton = injectClassNames('button')(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["flex p-3 rounded items-center justify-center"], ["flex p-3 rounded items-center justify-center"])));
var StyledButtonContent = injectClassNames('div')(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["shadow z-10 bg-white absolute left-0 w-full top-full"], ["shadow z-10 bg-white absolute left-0 w-full top-full"])));
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
        var _a;
        if (((_a = child.type) === null || _a === void 0 ? void 0 : _a.displayName) === 'ActionButton.Action') {
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
    return (jsxRuntime.jsxs("div", __assign({ ref: listRef, className: "relative" }, { children: [jsxRuntime.jsx(StyledButton, __assign({ onClick: function () { return setShowActions(!showActions); }, className: (className !== null && className !== void 0 ? className : '') + " " + variants$3[variant] }, props, { children: content }), void 0),
            jsxRuntime.jsx(StyledButtonContent, __assign({ className: showActions ? 'block' : 'sr-only' }, { children: actions }), void 0)] }), void 0));
};
ActionButton.defaultProps = {
    variant: 'primary',
};
var Action = function (props) {
    return (jsxRuntime.jsx("div", __assign({ className: "p-2 hover:bg-primary-100 cursor-pointer", onClick: props.onClick }, { children: props.children }), void 0));
};
Action.displayName = 'ActionButton.Action';
var Content = function (props) {
    return jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.children }, void 0);
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
    return src ? (jsxRuntime.jsx(StyledImg, __assign({ src: src, alt: alt, className: className, style: { width: size, height: size } }, props), void 0)) : (jsxRuntime.jsx(StyledDiv, __assign({ className: className, style: { width: size, height: size } }, props, { children: getStringFromAlt(alt) }), void 0));
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
    return (jsxRuntime.jsx(StyledBadge, __assign({ className: variants$2[variant] + " " + className }, props, { children: children }), void 0));
};
Badge.defaultProps = {
    className: 'px-2 py-1',
    color: 'primary',
    variant: 'basic',
};
var templateObject_1$2;

var StyledBox = injectClassNames('div')(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["bg-white shadow rounded"], ["bg-white shadow rounded"])));
var Box = function (_a) {
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    return (jsxRuntime.jsx(StyledBox, __assign({ className: className }, props, { children: children }), void 0));
};
Box.defaultProps = {
    className: 'p-2',
};
var templateObject_1$1;

var baseClassName$1 = 'focus:outline-none hover:shadow my-1 flex p-3 rounded items-center justify-center';
var variants$1 = {
    primary: baseClassName$1 + " bg-primary-600 text-white hover:bg-primary-500",
    default: baseClassName$1 + " bg-white text-black",
    success: baseClassName$1 + " bg-green-700 text-white",
    error: baseClassName$1 + " bg-red-700 text-white",
    warning: baseClassName$1 + " bg-yellow-300 text-black",
    info: baseClassName$1 + " bg-blue-700 text-white",
    transparent: baseClassName$1 + " bg-transparent",
    link: "bg-transparent underline font-bold",
};
var Button = function (_a) {
    var children = _a.children, tabIndex = _a.tabIndex, className = _a.className, variant = _a.variant, props = __rest(_a, ["children", "tabIndex", "className", "variant"]);
    return (jsxRuntime.jsx("button", __assign({ tabIndex: tabIndex, className: variants$1[variant] + " " + (className || '') }, props, { children: children }), void 0));
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
            return "" + (checked ? 'fill-current text-white' : 'hidden');
        },
    },
};
var Checkbox = React__default.forwardRef(function (_a, ref) {
    var _b, _c, _d, _e;
    var id = _a.id, label = _a.label, _f = _a.labelPosition, labelPosition = _f === void 0 ? 'right' : _f, name = _a.name, ariaChecked = _a["aria-checked"], ariaLabel = _a["aria-label"], ariaLabelledBy = _a["aria-labelledby"], value = _a.value, checked = _a.checked, defaultChecked = _a.defaultChecked, onChange = _a.onChange, _g = _a.variant, variant = _g === void 0 ? 'basic' : _g;
    var inputRef = React__default.useRef(null);
    React__default.useImperativeHandle(ref, function () { return inputRef.current; });
    return !label ? (jsxRuntime.jsxs("label", __assign({ "aria-checked": ariaChecked || checked, className: "" + ((_b = variants[variant]) === null || _b === void 0 ? void 0 : _b.label(!!checked)) }, { children: [jsxRuntime.jsx(CheckIcon, { className: (_c = variants[variant]) === null || _c === void 0 ? void 0 : _c.check(!!checked) }, void 0),
            jsxRuntime.jsx("input", { id: id, className: "appearance-none", ref: inputRef, type: "checkbox", name: name, checked: checked, defaultChecked: defaultChecked, value: value, "aria-labelledby": ariaLabelledBy, "aria-label": ariaLabel, onChange: onChange }, void 0)] }), void 0)) : (jsxRuntime.jsxs("label", __assign({ className: "flex items-center", "aria-checked": ariaChecked || checked }, { children: [labelPosition === 'left' && jsxRuntime.jsx("span", __assign({ className: "mr-1" }, { children: label }), void 0),
            jsxRuntime.jsxs("div", __assign({ className: (_d = variants[variant]) === null || _d === void 0 ? void 0 : _d.label(!!checked) }, { children: [jsxRuntime.jsx(CheckIcon, { className: (_e = variants[variant]) === null || _e === void 0 ? void 0 : _e.check(!!checked) }, void 0),
                    jsxRuntime.jsx("input", { id: id, className: "appearance-none", ref: inputRef, type: "checkbox", name: name, checked: checked, defaultChecked: defaultChecked, value: value, "aria-labelledby": ariaLabelledBy, "aria-label": ariaLabel, onChange: onChange }, void 0)] }), void 0),
            labelPosition === 'right' && jsxRuntime.jsx("span", __assign({ className: "ml-1" }, { children: label }), void 0)] }), void 0));
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
    return hasBackdrop ? (jsxRuntime.jsx("div", __assign({ onDoubleClick: onClose, className: isVisible
            ? "z-10 fixed left-O top-0 bg-opacity-20 bg-black w-full h-full"
            : "sr-only" }, { children: jsxRuntime.jsx("div", __assign({ onDoubleClick: function (e) { return e.stopPropagation(); }, className: "bg-white fixed " + ((_b = positions[position]) === null || _b === void 0 ? void 0 : _b.container) + " p-2 shadow " + animations$2.slide(open, position) }, { children: isVisible ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [hasCloseButton && (jsxRuntime.jsx(XIcon$1, { className: ((_c = positions[position]) === null || _c === void 0 ? void 0 : _c.closeButton) + " stroke-current fill-current text-black stroke-0 p-2 w-8 h-8 bg-white shadow-xl overflow-hidden rounded-full", onClick: onClose, role: "button" }, void 0)), children] }, void 0)) : null }), void 0) }), void 0)) : (jsxRuntime.jsx("div", __assign({ className: "z-10 bg-white fixed " + ((_d = positions[position]) === null || _d === void 0 ? void 0 : _d.container) + " p-2 shadow " + animations$2.slide(open, position) }, { children: isVisible ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [hasCloseButton && (jsxRuntime.jsx(XIcon$1, { className: ((_e = positions[position]) === null || _e === void 0 ? void 0 : _e.closeButton) + " stroke-current fill-current text-black stroke-0 p-2 w-8 h-8 bg-white shadow-xl overflow-hidden rounded-full", onClick: onClose, role: "button" }, void 0)), children] }, void 0)) : null }), void 0));
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
    return jsxRuntime.jsx("div", __assign({ className: itemClassNames }, { children: children }), void 0);
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
    return jsxRuntime.jsx("div", __assign({ className: gridClassNames }, { children: children }), void 0);
};
Grid.Item = GridItem;

var Link = function (_a) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (jsxRuntime.jsx("button", __assign({ role: "link", className: 'text-primary-600 font-bold underline ' + className }, props, { children: children }), void 0));
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
    var base = sizes[size] + " flex align-bottom bg-white rounded-lg text-left overflow-visible shadow-xl transform transition-all sm:my-4 sm:align-middle sm:max-w-full p-2";
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
    var base = 'absolute bg-white rounded-full w-6 h-6 p-1 flex items-center justify-center';
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
    return (jsxRuntime.jsxs("div", __assign({ className: "" + classes.container, "aria-labelledby": ariaLabelledBy, role: "dialog", "aria-modal": "true" }, { children: [jsxRuntime.jsx("div", { onDoubleClick: onClickOutside, className: "" + classes.background, "aria-hidden": "true" }, void 0),
            jsxRuntime.jsx("div", __assign({ className: "" + classes.modalContainer }, { children: jsxRuntime.jsxs("div", __assign({ onDoubleClick: function (event) { return event.stopPropagation(); }, className: "" + classes.modal }, { children: [jsxRuntime.jsx(XIcon, { role: "button", className: classes.closeButton, onClick: modalState.close }, void 0),
                        jsxRuntime.jsx("div", { children: children }, void 0)] }), void 0) }), void 0)] }), void 0));
};

var Radio = function (_a) {
    var name = _a.name, id = _a.id, ariaLabelledBy = _a["aria-labelledby"], ariaLabel = _a["aria-label"], value = _a.value, onChange = _a.onChange, checked = _a.checked, defaultChecked = _a.defaultChecked, label = _a.label, _b = _a.labelPosition, labelPosition = _b === void 0 ? 'left' : _b, _c = _a.className, className = _c === void 0 ? '' : _c;
    return !label ? (jsxRuntime.jsxs("div", __assign({ className: "cursor-pointer flex items-center m-1" }, { children: [jsxRuntime.jsx("div", { className: "h-2 w-2 m-1 rounded-full " + (checked
                    ? 'bg-primary-500 ring ring-primary-500 ring-offset-2'
                    : 'bg-gray-200 ring ring-gray-200 ring-offset-2') }, void 0),
            jsxRuntime.jsx("input", { className: "appearance-none", name: name, id: id, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, value: value, type: "radio", onChange: onChange, checked: checked, defaultChecked: defaultChecked }, void 0)] }), void 0)) : (jsxRuntime.jsxs("label", __assign({ className: "cursor-pointer flex items-center " + className }, { children: [labelPosition === 'left' && jsxRuntime.jsx("span", __assign({ className: "mr-1" }, { children: label }), void 0),
            jsxRuntime.jsx("div", { className: "h-2 w-2 m-1 rounded-full " + (checked
                    ? 'bg-primary-500 ring ring-primary-500 ring-offset-2'
                    : 'bg-gray-200 ring ring-gray-200 ring-offset-2') }, void 0),
            jsxRuntime.jsx("input", { className: "appearance-none", name: name, id: id, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, value: value, type: "radio", onChange: onChange, checked: checked, defaultChecked: defaultChecked }, void 0),
            labelPosition === 'right' && jsxRuntime.jsx("span", __assign({ className: "ml-1" }, { children: label }), void 0)] }), void 0));
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
        return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [isMulti && isSelected ? (jsxRuntime.jsx(CheckIcon, { className: "fill-current h-4 w-4" }, void 0)) : null, option[textKey]] }, void 0));
    } : _b, onOptionClick = _a.onOptionClick;
    var isSelected = React__default.useMemo(function () {
        return isMulti
            ? (value === null || value === void 0 ? void 0 : value.findIndex(function (v) { return v[valueKey] === option[valueKey]; })) > -1
            : option[valueKey] === value;
    }, [value, valueKey, option, isMulti]);
    return (jsxRuntime.jsx("div", __assign({ className: "py-1 px-1 flex items-center hover:bg-primary-600 hover:text-white cursor-pointer " + (focused === index ? 'bg-primary-600 text-white' : '') + " " + (isSelected && focused !== index ? 'text-primary-600' : ''), id: option[valueKey], role: "option", "aria-selected": isSelected, onClick: function (event) { return onOptionClick(option, event); } }, { children: renderOption({ option: option, isSelected: isSelected }) }), option[valueKey]));
};

var OptionList = React__default.forwardRef(function (_a, ref) {
    var focused = _a.focused, isOpen = _a.isOpen, name = _a.name, options = _a.options, onOptionClick = _a.onOptionClick, valueKey = _a.valueKey, textKey = _a.textKey, value = _a.value, isMulti = _a.isMulti, renderOption = _a.renderOption;
    return (jsxRuntime.jsx("div", __assign({ className: "absolute top-full left-0 " + (isOpen
            ? 'border shadow bg-white mt-1 max-h-40 w-full overflow-y-scroll'
            : 'sr-only'), ref: ref, id: name + '-list', role: "listbox" }, { children: options.map(function (option, index) { return (jsxRuntime.jsx(Option, { renderOption: renderOption, focused: focused, isMulti: isMulti, option: option, index: index, valueKey: valueKey, textKey: textKey, onOptionClick: onOptionClick, value: value }, option[valueKey])); }) }), void 0));
});
OptionList.displayName = 'OptionList';

var Select = React__default.forwardRef(function (_a, ref) {
    var _b, _c;
    var className = _a.className, id = _a.id, _d = _a.name, name = _d === void 0 ? '' : _d, _e = _a.options, options = _e === void 0 ? [] : _e, placeholder = _a.placeholder, onChange = _a.onChange, value = _a.value, parentRef = _a.parentRef, disabled = _a.disabled, readOnly = _a.readOnly, tabIndex = _a.tabIndex, isLoading = _a.isLoading, isSearchable = _a.isSearchable, isMulti = _a.isMulti, _f = _a.textKey, textKey = _f === void 0 ? 'label' : _f, _g = _a.valueKey, valueKey = _g === void 0 ? 'value' : _g, _h = _a.renderSelected, renderSelected = _h === void 0 ? function (value) {
        return isMulti
            ? value.map(function (value) { return value[textKey]; }).join(', ')
            : value[textKey];
    } : _h, renderOption = _a.renderOption;
    var _j = React__default.useState(false), isOpen = _j[0], setOpen = _j[1];
    var _k = React__default.useState(''), search = _k[0], setSearch = _k[1];
    var listRef = React__default.useRef(null);
    var containerRef = React__default.useRef(parentRef === null || parentRef === void 0 ? void 0 : parentRef.current);
    var _l = React__default.useState(0), focused = _l[0], setFocused = _l[1];
    var inputProps = {
        tabIndex: tabIndex !== null && tabIndex !== void 0 ? tabIndex : -1,
    };
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
        var index = value === null || value === void 0 ? void 0 : value.findIndex(function (v) { return v[valueKey] === option[valueKey]; });
        if (index > -1) {
            var tmp = __spreadArray([], value);
            tmp.splice(index, 1);
            onChange(__spreadArray([], tmp));
        }
        else {
            onChange(__spreadArray(__spreadArray([], value), [option]));
        }
        (_a = ref) === null || _a === void 0 ? void 0 : _a.current.focus();
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
                (_a = ref) === null || _a === void 0 ? void 0 : _a.current.focus();
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
    return (jsxRuntime.jsxs("div", __assign({ ref: containerRef, className: "relative border " + (!disabled && !readOnly && !isLoading
            ? 'focus-within:border-primary-600'
            : '') + " border-gray-300 rounded p-2 flex items-center " + (disabled ? 'bg-gray-50 cursor-not-allowed pointer-events-none' : '') + " " + (className !== null && className !== void 0 ? className : ''), "aria-disabled": disabled, onKeyDown: handleKeyDown }, { children: [jsxRuntime.jsxs("div", __assign({ className: "w-full flex items-center", "aria-readonly": readOnly }, { children: [isMulti ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [value && (jsxRuntime.jsx("div", __assign({ className: "flex outline-none mr-1" }, { children: renderSelected(value || []) }), void 0)),
                            jsxRuntime.jsx("input", __assign({ className: "flex-grow outline-none " + (isLoading && 'pointer-events-none cursor-not-allowed') + " " + (disabled && 'opacity-50'), "aria-expanded": isOpen, "aria-controls": name + '-list', "aria-owns": name + '-list', "aria-activedescendant": (_b = options.find(function (option) { return option[valueKey] === value; })) === null || _b === void 0 ? void 0 : _b[valueKey], role: "combobox", "aria-haspopup": "listbox", id: id, placeholder: placeholder || 'Select...' }, inputProps, { ref: ref, disabled: disabled, readOnly: readOnly || !isSearchable, onKeyDown: function (event) {
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
                                }, value: search, onChange: function (e) { return setSearch(e.target.value); } }), void 0)] }, void 0)) : (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("input", __assign({ className: "w-full outline-none " + (isLoading && 'pointer-events-none cursor-not-allowed') + " " + (disabled && 'opacity-50'), "aria-expanded": isOpen, "aria-controls": name + '-list', "aria-owns": name + '-list', "aria-activedescendant": (_c = options.find(function (option) { return option.value === value; })) === null || _c === void 0 ? void 0 : _c.value, role: "combobox", "aria-haspopup": "listbox", type: "text", id: id }, inputProps, { ref: ref, disabled: disabled, readOnly: readOnly || isLoading || !isSearchable, placeholder: placeholder || 'Select...', onChange: function (e) {
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
                            }, value: search }), void 0) }, void 0)),
                    !isLoading && !readOnly && (jsxRuntime.jsx("span", __assign({ className: "flex px-1" }, { children: jsxRuntime.jsx(ChevronDownIcon, { width: 12, height: 12, className: "fill-current " + (isOpen ? 'text-primary-600' : 'text-gray-400') }, void 0) }), void 0)),
                    isLoading && (jsxRuntime.jsx(MemoSvgLoading, { className: "animate-spin mx-1 h-5 w-5 text-primary-400" }, void 0))] }), void 0),
            !isLoading && (jsxRuntime.jsx(OptionList, { isMulti: isMulti, name: name, ref: listRef, isOpen: isOpen, options: !isSearchable || !search
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
                } }, void 0))] }), void 0));
});
Select.displayName = 'Select';

var TableRow = function (_a) {
    var children = _a.children, hoverable = _a.hoverable, className = _a.className, isEven = _a.isEven, props = __rest(_a, ["children", "hoverable", "className", "isEven"]);
    var classes = '';
    if (hoverable)
        classes += !isEven
            ? 'hover:bg-gray-200 cursor-pointer'
            : 'hover:bg-gray-200 cursor-pointer';
    return (jsxRuntime.jsx("tr", __assign({ className: classes + " " + (!isEven && 'bg-gray-100') + " " + className }, props, { children: children }), void 0));
};

var TableBody = function (_a) {
    _a.data; var children = _a.children, hoverable = _a.hoverable, props = __rest(_a, ["data", "children", "hoverable"]);
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
    return jsxRuntime.jsx("tbody", __assign({}, props, { children: finalRows }), void 0);
};

var TableHead = function (_a) {
    var columns = _a.columns, props = __rest(_a, ["columns"]);
    return (jsxRuntime.jsx("thead", __assign({}, props, { children: jsxRuntime.jsx("tr", __assign({ className: "bg-primary-500 text-white uppercase text-sm leading-normal" }, { children: columns.map(function (column, index) { return (jsxRuntime.jsx("th", __assign({ className: "py-3 px-6 " + (index === 0 ? 'pl-5' : '') }, { children: column.name }), index)); }) }), void 0) }), void 0));
};

var Table = function (_a) {
    var children = _a.children, className = _a.className, hoverable = _a.hoverable, props = __rest(_a, ["children", "className", "hoverable"]);
    var finalChildren = React__default.Children.map(children, function (child, index) {
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
    return (jsxRuntime.jsx("table", __assign({ className: 'min-w-max w-full table-auto text-left ' + className }, props, { children: finalChildren }), void 0));
};
Table.Head = TableHead;
Table.Body = TableBody;
Table.Row = TableRow;
var TableCell = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (jsxRuntime.jsx("td", __assign({ className: "py-3 px-6" }, props, { children: children }), void 0));
};
Table.Cell = TableCell;

var baseClassName = "border focus:border-primary-600 p-2 rounded outline-none focus:ring-2 ring-primary-200";
var TextInput = React__default.forwardRef(function (_a, ref) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, multiline = _a.multiline, _c = _a.placeholder, placeholder = _c === void 0 ? 'Type here...' : _c; _a.parentRef; var props = __rest(_a, ["className", "multiline", "placeholder", "parentRef"]);
    return multiline ? (jsxRuntime.jsx("textarea", __assign({ placeholder: placeholder, className: baseClassName + " " + className, ref: ref }, props), void 0)) : (jsxRuntime.jsx("input", __assign({ placeholder: placeholder, className: baseClassName + " " + className, ref: ref }, props), void 0));
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
    _a.className; var render = _a.render, children = _a.children, toolptipId = _a.toolptipId, _c = _a.position, position = _c === void 0 ? 'top' : _c;
    var _d = React__default.useState(false), isOpen = _d[0], setIsOpen = _d[1];
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
    return (jsxRuntime.jsxs("div", __assign({ "aria-describedby": id, className: "relative flex", onMouseEnter: handleOpen, onMouseLeave: handleClose }, { children: [jsxRuntime.jsx("div", __assign({ className: "flex" }, { children: children }), void 0),
            jsxRuntime.jsx("div", __assign({ id: id, role: "tooltip", className: "absolute bg-white shadow-xl p-2 border border-gray-200 rounded " + positionClassNames + " " + animations.fadeIn(isOpen) + " " + (!visible && !isOpen && 'sr-only') + "\n        }" }, { children: render }), void 0)] }), void 0));
};

var StyledTopBar = injectClassNames('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["fixed top-0 left-0 h-16 right-0 shadow-md px-3 flex items-center border-b border-primary-500"], ["fixed top-0 left-0 h-16 right-0 shadow-md px-3 flex items-center border-b border-primary-500"])));
var TopBar = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (jsxRuntime.jsx(StyledTopBar, __assign({}, props, { children: children }), void 0));
};
var templateObject_1;

export { ActionButton, Avatar, Badge, Box, Button, Checkbox, Drawer, Grid, Link, Modal, Radio, Select, Table, TextInput, Tooltip, TopBar };
//# sourceMappingURL=index.esm.js.map
