/* eslint-disable */
import React, { useState, useContext } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Tooltip as Tooltip$1, useTheme, Snackbar, IconButton } from '@material-ui/core';
import { useField } from 'formik';
import TextField from '@material-ui/core/TextField';
import MuiAlert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';

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

var Tooltip = withStyles(function (theme) { return ({
    tooltip: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}); })(Tooltip$1);

var useStyles = makeStyles(function (_a) {
    var palette = _a.palette;
    return ({
        root: function (_a) {
            var color = _a.color, variant = _a.variant;
            return (variant === 'contained' ? {
                color: palette[color].contrastText,
                backgroundColor: palette[color].main,
                border: "none",
                "&:hover": {
                    backgroundColor: palette[color].dark,
                    color: palette[color].contrastText,
                    border: "none",
                    // Reset on touch devices, it doesn't add specificity
                    "@media (hover: none)": {
                        backgroundColor: palette[color].main
                    }
                }
            } : variant === 'text' ? {
                color: palette[color].main,
                backgroundColor: "#ffffff",
                border: "none",
                "&:hover": {
                    backgroundColor: "#ffffff",
                    color: palette[color].dark,
                    border: "none",
                    "@media (hover: none)": {
                        color: palette[color].main
                    }
                }
            } : {
                color: palette[color].main,
                backgroundColor: "#ffffff",
                border: "1px solid " + palette[color].main,
                "&:hover": {
                    color: palette[color].dark,
                    backgroundColor: '#ffffff',
                    border: "1px solid " + palette[color].dark,
                    "@media (hover: none)": {
                        color: palette[color].main
                    }
                }
            });
        }
    });
});
var Button = React.forwardRef(function (_a, ref) {
    var _b = _a.color, color = _b === void 0 ? "primary" : _b, children = _a.children, _c = _a.isLoading, isLoading = _c === void 0 ? false : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.startIcon, startIcon = _e === void 0 ? null : _e, _f = _a.tooltip, tooltip = _f === void 0 ? null : _f, _g = _a.disabledTooltip, disabledTooltip = _g === void 0 ? null : _g, variant = _a.variant, props = __rest(_a, ["color", "children", "isLoading", "disabled", "startIcon", "tooltip", "disabledTooltip", "variant"]);
    var palette = useTheme().palette;
    var classes = useStyles({ color: color, variant: variant });
    var ButtonElement = React.createElement(MuiButton, __assign({ classes: classes, variant: variant, startIcon: isLoading ?
            React.createElement(CircularProgress, { size: 20, style: { color: color && palette[color].main } })
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
    var _b = useField(name), _c = _b[0], meta = _b[1], value = _c.value, field = __rest(_c, ["value"]);
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

var AlertContext = React.createContext({
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
    var _b = useState(false), open = _b[0], setOpen = _b[1];
    var _c = useState({ props: {}, content: null }), currentAlert = _c[0], setCurrentAlert = _c[1];
    var handleClose = function () {
        setOpen(false);
    };
    var setAlert = function (content, props) {
        if (open === false) {
            setCurrentAlert({ content: content, props: props });
            setOpen(true);
        }
    };
    return (React.createElement(AlertContext.Provider, { value: { state: { open: open, currentAlert: currentAlert }, setAlert: setAlert, onClose: handleClose, snackbarProps: snackbarProps, alertProps: alertProps } },
        children,
        React.createElement(Alert, null)));
};
var Alert = function () {
    var _a = useContext(AlertContext), state = _a.state, onClose = _a.onClose, snackbarProps = _a.snackbarProps, alertProps = _a.alertProps;
    return (React.createElement(Snackbar, __assign({ anchorOrigin: { vertical: "top", horizontal: "right" }, autoHideDuration: 2000 }, snackbarProps, { onClose: onClose, open: state.open }),
        React.createElement(MuiAlert, __assign({}, alertProps, state.currentAlert.props, { action: React.createElement(IconButton, { size: "small", "aria-label": "close", color: "inherit", onClick: onClose },
                React.createElement(CloseIcon, { fontSize: "small" })) }), state.currentAlert.content)));
};
var useAlert = function () {
    var setAlert = React.useContext(AlertContext).setAlert;
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

var DialogContext = React.createContext({
    openDialog: function (dialog, props) { return Promise.resolve(); }
});
var DialogProvider = function (_a) {
    var children = _a.children;
    var _b = useState({
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
    return (React.createElement(DialogContext.Provider, { value: { openDialog: openDialog } },
        children,
        state.component && React.createElement(DialogComponent, __assign({}, state.props, { open: state.open, onClose: onClose, onError: onError }))));
};
var useDialog = function () {
    var openDialog = React.useContext(DialogContext).openDialog;
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

export { AlertProvider, Button, DialogProvider, TextInput as TextField, useAlert, useDialog };
