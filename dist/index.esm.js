import React, { useState, useContext } from 'react';
import MuiButton from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Tooltip as Tooltip$1, useTheme, Snackbar, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
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

var Button = React.forwardRef(function (_a, ref) {
    var color = _a.color, children = _a.children, isLoading = _a.isLoading, disabled = _a.disabled, startIcon = _a.startIcon, tooltip = _a.tooltip, disabledTooltip = _a.disabledTooltip, props = __rest(_a, ["color", "children", "isLoading", "disabled", "startIcon", "tooltip", "disabledTooltip"]);
    var palette = useTheme().palette;
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
    return (React.createElement(Snackbar, __assign({ anchorOrigin: { vertical: "top", horizontal: "right" }, open: state.open, autoHideDuration: 2000, onClose: onClose }, snackbarProps),
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
        showAlert: {
            success: alertSuccess,
            error: alertError,
            warning: alertWarning,
            info: alertInfo
        }
    };
};

var DialogContext = React.createContext({
    openDialog: function () { }
});
function DialogProvider(props) {
    var children = props.children;
    var _a = useState({
        open: false,
        props: {},
        DialogComponent: function () { return null; },
        successCallback: function () { },
        errorCallback: function () { }
    }), state = _a[0], setState = _a[1];
    var openDialog = function (DialogComponent, props, successCallback, errorCallback) {
        setState({
            open: true,
            props: props,
            DialogComponent: DialogComponent,
            successCallback: successCallback,
            errorCallback: errorCallback
        });
    };
    function onClose(response) {
        state.successCallback(response);
        setState(__assign(__assign({}, state), { open: false }));
    }
    var onCancel = function (response) {
        state.errorCallback(response);
        setState(__assign(__assign({}, state), { open: false }));
    };
    var DialogComponent = state.DialogComponent;
    return (React.createElement(DialogContext.Provider, { value: { openDialog: openDialog } },
        children,
        React.createElement(DialogComponent, __assign({ open: state.open, onClose: onClose, onCancel: onCancel }, state.props))));
}
var useDialog = function () {
    var openDialog = React.useContext(DialogContext).openDialog;
    var show = function (_a) {
        var component = _a.component, props = _a.props;
        return new Promise(function (res, rej) {
            openDialog(component, props, function (response) {
                res(response);
            }, function (response) {
                rej(response);
            });
        });
    };
    return {
        dialog: {
            show: show
        }
    };
};

export { AlertProvider, Button, DialogProvider, TextInput as TextField, useAlert, useDialog };
