import React from 'react'
import StyleDefType from '../types/theme-styles.types'
import useThemeConfig from '../use-theme-config/useThemeConfig'
import { StyleProp, StyleSheet } from 'react-native'

/**
 * Hook to create styles for your components
 * @author Alejandro Quiroz <alejandro.devop@gmail.com>
 * @version 0.0.1
 * @since 0.0.1
 * @param stylingConfig Styling configuration, can be a function or an object
 * @param params Object containing params for the styling function.
 * @returns
 */
const useStyling = <StyleGuide extends object, Params extends object = {}>(
    stylingConfig: StyleDefType<StyleGuide, Params>,
    params?: Params
): StyleSheet.NamedStyles<StyleGuide> => {
    const { palette } = useThemeConfig()
    const classes = React.useMemo(() => {
        let processed = {}
        // Check if the styling config is a function
        if (stylingConfig instanceof Function) {
            /**
             * The styling config is called and we passed the values defined from the context
             * as an argument, so de styling function can operate
             */
            processed = stylingConfig({
                palette,
                params,
                selIf: _helperSelIf
            })
        }
        return StyleSheet.create(processed)
    }, [params])

    return classes as StyleSheet.NamedStyles<StyleGuide>
}

const _helperSelIf = (cond?: boolean, trueVal?: StyleProp<any>, falseVal?: StyleProp<any>) =>
    cond ? trueVal : falseVal

export default useStyling
