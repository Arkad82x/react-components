'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var MuiButton = _interopDefault(require('@material-ui/core/Button'));
var CircularProgress = _interopDefault(require('@material-ui/core/CircularProgress'));
var core = require('@material-ui/core');
var styles = require('@material-ui/core/styles');
var formik = require('formik');
var TextField = _interopDefault(require('@material-ui/core/TextField'));
var MuiAlert = _interopDefault(require('@material-ui/lab/Alert'));
var CloseIcon = _interopDefault(require('@material-ui/icons/Close'));

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

var Button = React__default.forwardRef(function (_a, ref) {
    var color = _a.color, children = _a.children, isLoading = _a.isLoading, disabled = _a.disabled, startIcon = _a.startIcon, tooltip = _a.tooltip, disabledTooltip = _a.disabledTooltip, props = __rest(_a, ["color", "children", "isLoading", "disabled", "startIcon", "tooltip", "disabledTooltip"]);
    var palette = core.useTheme().palette;
    var ButtonElement = React__default.createElement(MuiButton, __assign({ color: color, startIcon: isLoading ?
            React__default.createElement(CircularProgress, { size: 20, style: { color: color && palette[color].contrastText } })
            : startIcon, disabled: isLoading || disabled, ref: ref }, props), children);
    if (tooltip && disabled === false) {
        return (React__default.createElement(Tooltip, { enterDelay: 500, title: tooltip, arrow: true }, ButtonElement));
    }
    if (disabledTooltip && disabled === true) {
        //wrapper needed because disabled buttons do not fire userinteraction events
        return (React__default.createElement(Tooltip, { title: disabledTooltip, arrow: true },
            React__default.createElement("div", { style: { display: "unset" } }, ButtonElement)));
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
    return (React__default.createElement(TextField, __assign({ name: name, placeholder: placeholder, value: value || "", helperText: errorText === "empty" ? "" : errorText, error: !!errorText }, props, { onBlur: handleBlur, onChange: handleChange })));
};
TextInput.defaultProps = {
    placeholder: "",
    label: "",
    margin: "normal",
    inputProps: {},
    fullWidth: true
};

var AlertContext = React__default.createContext({
    state: {
        open: false,
        currentAlert: {
            props: {},
            content: null
        }
    },
    setAlert: function (content, severity) { },
    onClose: function () { },
    snackbarProps: {},
    alertProps: {}
});
var AlertProvider = function (_a) {
    var alertProps = _a.alertProps, snackbarProps = _a.snackbarProps, children = _a.children;
    var _b = React.useState(false), open = _b[0], setOpen = _b[1];
    var _c = React.useState({ props: {}, content: null }), currentAlert = _c[0], setCurrentAlert = _c[1];
    var handleClose = function () {
        setOpen(false);
    };
    var setAlert = function (content, props) {
        if (open === false) {
            setCurrentAlert({ content: content, props: props });
            setOpen(true);
        }
    };
    return (React__default.createElement(AlertContext.Provider, { value: { state: { open: open, currentAlert: currentAlert }, setAlert: setAlert, onClose: handleClose, snackbarProps: snackbarProps, alertProps: alertProps } },
        children,
        React__default.createElement(Alert, null)));
};
var Alert = function () {
    var _a = React.useContext(AlertContext), state = _a.state, onClose = _a.onClose, snackbarProps = _a.snackbarProps, alertProps = _a.alertProps;
    return (React__default.createElement(core.Snackbar, __assign({ anchorOrigin: { vertical: "top", horizontal: "right" }, open: state.open, autoHideDuration: 2000, onClose: onClose }, snackbarProps),
        React__default.createElement(MuiAlert, __assign({}, alertProps, state.currentAlert.props, { action: React__default.createElement(core.IconButton, { size: "small", "aria-label": "close", color: "inherit", onClick: onClose },
                React__default.createElement(CloseIcon, { fontSize: "small" })) }), state.currentAlert.content)));
};
var useAlert = function () {
    var setAlert = React__default.useContext(AlertContext).setAlert;
    var alertSuccess = function (content, props) {
        setAlert(content, __assign(__assign({}, props), { severity: "success" }));
    };
    var alertError = function (content, props) {
        setAlert(content, __assign(__assign({}, props), { severity: "error" }));
    };
    var alertWarning = function (content, props) {
        setAlert(content, __assign(__assign({}, props), { severity: "warning" }));
    };
    var alertInfo = function (content, props) {
        setAlert(content, __assign(__assign({}, props), { severity: "info" }));
    };
    return {
        alert: {
            success: alertSuccess,
            error: alertError,
            warning: alertWarning,
            info: alertInfo
        }
    };
};

var DialogContext = React__default.createContext({
    openDialog: function (dialog, props) { return Promise.resolve(); }
});
var DialogProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState({
        component: function () { return null; },
        props: {},
        open: false,
        resolve: function () { },
        reject: function () { }
    }), state = _b[0], setState = _b[1];
    var openDialog = function (dialog, props) {
        return new Promise(function (resolve, reject) {
            setState({
                component: dialog,
                props: props,
                open: true,
                resolve: resolve,
                reject: reject
            });
        });
    };
    var onClose = function (response) {
        state.resolve(response);
        setState(__assign(__assign({}, state), { open: false, resolve: function () { }, reject: function () { } }));
    };
    var onError = function (error) {
        state.reject(error);
        setState(__assign(__assign({}, state), { open: false, resolve: function () { }, reject: function () { } }));
    };
    var DialogComponent = state.component;
    return (React__default.createElement(DialogContext.Provider, { value: { openDialog: openDialog } },
        children,
        state.component && React__default.createElement(DialogComponent, __assign({}, state.props, { open: state.open, onClose: onClose, onError: onError }))));
};
var useDialog = function () {
    var openDialog = React__default.useContext(DialogContext).openDialog;
    var show = function (_a) {
        var component = _a.component, props = _a.props;
        return openDialog(component, props);
    };
    return {
        dialog: {
            show: show
        }
    };
};

exports.AlertProvider = AlertProvider;
exports.Button = Button;
exports.DialogProvider = DialogProvider;
exports.TextField = TextInput;
exports.useAlert = useAlert;
exports.useDialog = useDialog;
