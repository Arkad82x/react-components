'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var MuiButton = _interopDefault(require('@material-ui/core/Button'));
var CircularProgress = _interopDefault(require('@material-ui/core/CircularProgress'));
var core = require('@material-ui/core');
var styles = require('@material-ui/core/styles');
var formik = require('formik');
var TextField = _interopDefault(require('@material-ui/core/TextField'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
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

var Tooltip = styles.withStyles(function (theme) { return ({
    tooltip: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}); })(core.Tooltip);

var Button = React.forwardRef(function (_a, ref) {
    var color = _a.color, children = _a.children, isLoading = _a.isLoading, disabled = _a.disabled, startIcon = _a.startIcon, tooltip = _a.tooltip, disabledTooltip = _a.disabledTooltip, props = __rest(_a, ["color", "children", "isLoading", "disabled", "startIcon", "tooltip", "disabledTooltip"]);
    var palette = core.useTheme().palette;
    var ButtonElement = React.createElement(MuiButton, __assign({ color: color, startIcon: isLoading ?
            React.createElement(CircularProgress, { size: 20, style: { color: color && palette[color].contrastText } })
            : startIcon, disabled: isLoading || disabled, ref: ref }, props), children);
    if (tooltip && disabled === false) {
        return (React.createElement(Tooltip, { enterDelay: 500, title: tooltip, arrow: true }, ButtonElement));
    }
    if (disabledTooltip && disabled === true) {
        //wrapper needed because disabled buttons do not fire userinteraction events
        return (React.createElement(Tooltip, { title: disabledTooltip, arrow: true },
            React.createElement("div", { style: { display: "unset" } }, ButtonElement)));
    }
    else {
        return ButtonElement;
    }
});
Button.defaultProps = {
    isLoading: false,
    disabled: false
};

var TextInput = function (_a) {
    var name = _a.name, placeholder = _a.placeholder, props = __rest(_a, ["name", "placeholder"]);
    var _b = formik.useField(name), _c = _b[0], meta = _b[1], value = _c.value, field = __rest(_c, ["value"]);
    var errorText = meta.error && meta.touched ? meta.error : '';
    var handleBlur = function (event) {
        if (props.onBlur) {
            props.onBlur(event);
        }
        field.onBlur(event);
    };
    var handleChange = function (event) {
        if (props.onChange) {
            props.onChange(event);
        }
        field.onChange(event);
    };
    return (React.createElement(TextField, __assign({ name: name, placeholder: placeholder, value: value || "", helperText: errorText === "empty" ? "" : errorText, error: !!errorText }, props, { onBlur: handleBlur, onChange: handleChange })));
};
TextInput.defaultProps = {
    placeholder: "",
    label: "",
    margin: "normal",
    inputProps: {},
    fullWidth: true
};

exports.Button = Button;
exports.TextField = TextInput;
