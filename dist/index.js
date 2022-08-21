'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactNative = require('react-native');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/_interopNamespace(React);

var styles = function (_a) {
    var palette = _a.palette, selIf = _a.selIf, params = _a.params;
    return ({
        button: {
            backgroundColor: palette.secondaryColor,
            padding: 10,
            position: 'absolute',
            right: 0,
            top: 0
        },
        column: {
            flex: 1,
            flexDirection: 'row'
        },
        root: {
            backgroundColor: palette.primaryColor,
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: selIf(params === null || params === void 0 ? void 0 : params.opened, 150, 40)
        },
        row: {
            flexDirection: 'row'
        }
    });
};

var ThemeProviderContext = React__default.default.createContext({
    changeTheme: function () { },
    dimensions: { width: 0, height: 0 },
    mode: 'light',
    orientation: 'portrait',
    palette: {},
    selectedTheme: '',
    variables: {}
});
var Provider = ThemeProviderContext.Provider;
ThemeProviderContext.Consumer;

/**
 * Hook to get the theme config from the theme provider context.
 * @author Jorge Alejandro Quiroz Serna <alejandro.devop@gmail.com>
 * @returns {ThemeProviderContextType}
 * @since 0.0.1
 * @version 0.0.1
 */
var useThemeConfig = function () {
    var themeConfig = React__default.default.useContext(ThemeProviderContext);
    return themeConfig;
};

/**
 * Hook to create styles for your components
 * @author Alejandro Quiroz <alejandro.devop@gmail.com>
 * @version 0.0.1
 * @since 0.0.1
 * @param stylingConfig Styling configuration, can be a function or an object
 * @param params Object containing params for the styling function.
 * @returns
 */
var useStyling = function (stylingConfig, params) {
    var palette = useThemeConfig().palette;
    var classes = React__default.default.useMemo(function () {
        var processed = {};
        // Check if the styling config is a function
        if (stylingConfig instanceof Function) {
            /**
             * The styling config is called and we passed the values defined from the context
             * as an argument, so de styling function can operate
             */
            processed = stylingConfig({
                palette: palette,
                params: params,
                selIf: _helperSelIf,
                applyIf: _applyIf,
                applyFor: _applyFor,
                valueFor: _valueFor
            });
        }
        return reactNative.StyleSheet.create(processed);
    }, [params]);
    return classes;
};
var _helperSelIf = function (cond, trueVal, falseVal) {
    return cond ? trueVal : falseVal;
};
var _applyIf = function (cond, styles) { return (cond ? styles : {}); };
var _applyFor = function (value, styles) {
    if (value && styles && styles[value]) {
        return styles[value];
    }
    else {
        return {};
    }
};
var _valueFor = function (value, styles) {
    if (value && styles && styles[value]) {
        return styles[value];
    }
    else {
        return (styles === null || styles === void 0 ? void 0 : styles._default) ? styles === null || styles === void 0 ? void 0 : styles._default : null;
    }
};

/**
 * Renders information about the selected theme
 * @author Alejandro Quiroz <alejandro.devop@gmail.com>
 * @since 0.0.1
 * @version 0.0.1
 * @returns {React.ReactNode}
 */
var ThemeDebug = function () {
    var selectedTheme = useThemeConfig().selectedTheme;
    var _a = React__namespace.useState(false), opened = _a[0], setOpened = _a[1];
    var styling = useStyling(styles, { opened: opened });
    var toggleOpen = function () { return setOpened(!opened); };
    return (React__namespace.createElement(reactNative.View, { style: styling.root },
        React__namespace.createElement(reactNative.View, { style: styling.row },
            React__namespace.createElement(reactNative.View, { style: styling.column },
                React__namespace.createElement(reactNative.Text, { style: [styling.columnLabel] }, "Theme:"),
                React__namespace.createElement(reactNative.Text, { style: [styling.columnValue, styling.column] }, selectedTheme)),
            React__namespace.createElement(reactNative.View, { style: styling.column },
                React__namespace.createElement(reactNative.TouchableOpacity, { style: styling.button, onPress: toggleOpen },
                    React__namespace.createElement(reactNative.Text, null, opened ? 'Close' : 'Open'))))));
};

/**
 * Provider for theming react-native applications
 * @param param0
 * @author Alejandro Quiroz <alejandro.devop@gmail.com>
 * @version 0.0.1
 * @since 0.0.1
 * @returns {React.ReactNode}
 */
var ThemeProvider = function (_a) {
    var children = _a.children, defaultTheme = _a.defaultTheme, mode = _a.mode, themes = _a.themes, debug = _a.debug;
    var selectedTheme = React__default.default.useState(defaultTheme || 'default')[0];
    // const [appMode] = useState(mode || 'light')
    // const [orientation] = useState<'portrait' | 'landscape'>('portrait')
    var appMode = mode || 'light';
    var paletteMode = 'default';
    var orientation = 'portrait';
    var handleChangeTheme = function (newTheme) {
        // setSelectedTheme(newTheme)
        console.log('Theme: ', newTheme);
    };
    var _b = themes[selectedTheme] || {}, palette = _b.palette, variables = _b.variables;
    var paletteConfig = palette[paletteMode] || {};
    return (React__default.default.createElement(Provider, { value: {
            changeTheme: handleChangeTheme,
            dimensions: { width: 100, height: 100 },
            mode: appMode,
            orientation: orientation,
            palette: paletteConfig,
            selectedTheme: selectedTheme,
            variables: variables
        } },
        children,
        debug && React__default.default.createElement(ThemeDebug, null)));
};
ThemeProvider.defaultProps = {
    defaultTheme: 'main',
    mode: 'light',
    darkModeDetection: false
};

exports.ThemeProvider = ThemeProvider;
exports.useStyling = useStyling;
//# sourceMappingURL=index.js.map
