import { PaletteConfigType } from './palette.types'
import {
    ViewStyle,
    TextStyle,
    ImageStyle,
    FlexStyle,
    TransformsStyle,
    StyleProp
} from 'react-native'

type HelperSelIf<ValueType = any> = (
    condition?: boolean,
    trueValue?: StyleProp<ValueType>,
    falseValue?: StyleProp<ValueType>
) => StyleProp<ValueType>

/**
 * This defines the properties passed to the styling function when it is invoked
 */
type StyleFunctionConfigType<Params> = {
    params?: Params
    palette: PaletteConfigType
    selIf: HelperSelIf
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
