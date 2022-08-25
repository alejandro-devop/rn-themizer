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
    const { palette, variables } = useThemeConfig()

    const extractFromSource = (name: string, source: any, defaultValue?: any) => {
        const [firstKey, ...parts] = name.split('.')
        let foundValue = parts.reduce((color, currentKey) => {
            if (color[currentKey]) {
                color = color[currentKey]
            }
            return color
        }, source[firstKey])
        if (typeof foundValue === 'object') {
            foundValue = null
        }
        return foundValue || defaultValue
    }
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
                selIf: _helperSelIf,
                applyIf: _applyIf,
                applyFor: _applyFor,
                valueFor: _valueFor,
                fromVars: (name: string, defaultVal?: any) =>
                    extractFromSource(name, variables, defaultVal),
                fromPalette: (name: string, defaultVal?: any) =>
                    extractFromSource(name, palette, defaultVal),
                variables
            })
        }
        return StyleSheet.create(processed)
    }, [params])

    return classes as StyleSheet.NamedStyles<StyleGuide>
}

const _helperSelIf = (cond?: boolean, trueVal?: StyleProp<any>, falseVal?: StyleProp<any>) =>
    cond ? trueVal : falseVal

const _applyIf = (cond?: boolean, styles?: any) => (cond ? styles : {})

const _applyFor = (value?: string, styles?: { [k: string]: any }) => {
    if (value && styles && styles[value]) {
        return styles[value]
    } else {
        return {}
    }
}

const _valueFor = (value?: string, styles?: { [k: string]: any }) => {
    if (value && styles && styles[value]) {
        return styles[value]
    } else {
        return styles?._default ? styles?._default : null
    }
}

export default useStyling
