import { PaletteConfigType } from './palette.types'
import {
    ViewStyle,
    TextStyle,
    ImageStyle,
    FlexStyle,
    TransformsStyle,
    StyleProp
} from 'react-native'
import VariablesType from './variables.types'

type HelperSelIf<ValueType = any> = (
    condition?: boolean,
    trueValue?: StyleProp<ValueType>,
    falseValue?: StyleProp<ValueType>
) => StyleProp<ValueType>

type HelperApplyIf<ValueType = any> = (
    condition?: boolean,
    styles?: StyleProp<ValueType>
) => StyleProp<ValueType>

type HelperApplyFor = (value?: any, styles?: { [k: string]: ThemeStyleType }) => ThemeStyleType
type HelperValueFor = (value?: any, styles?: { [k: string]: StyleProp<any> }) => StyleProp<any>
type HelperFromPalette = (key: string, defValue?: any) => any
type HelperFromVars = (key: string, defValue?: any) => any
type HelperRem = (pixel: number) => number
/**
 * This defines the properties passed to the styling function when it is invoked
 */
type StyleFunctionConfigType<Params> = {
    params?: Params
    palette: PaletteConfigType
    selIf: HelperSelIf
    applyIf: HelperApplyIf
    applyFor: HelperApplyFor
    valueFor: HelperValueFor
    fromPalette: HelperFromPalette
    fromVars: HelperFromVars
    variables?: VariablesType
}
/**
 * Possible values for the Theme styling
 */
export type ThemeStyleType = ViewStyle | TextStyle | ImageStyle | FlexStyle | TransformsStyle

/**
 * Definition of the styling function
 */
type StyleDefAsFunctionType<Guide, Params> = (
    params: StyleFunctionConfigType<Params>
) => Guide | { [key: string]: StyleProp<any> }

type StyleDefAsObjecttype = { [key: string]: StyleProp<any> }
/**
 * This defines the styling method, if function or object
 */
type StyleDefType<StyleGuide extends object = {}, Params extends object = {}> =
    | StyleDefAsFunctionType<StyleGuide, Params>
    | StyleDefAsObjecttype

export default StyleDefType
