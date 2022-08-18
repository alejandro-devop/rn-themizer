import { PaletteConfigType } from './palette.types';
import { ViewStyle, TextStyle, ImageStyle, FlexStyle, TransformsStyle, StyleProp } from 'react-native';
declare type HelperSelIf<ValueType = any> = (condition?: boolean, trueValue?: StyleProp<ValueType>, falseValue?: StyleProp<ValueType>) => StyleProp<ValueType>;
/**
 * This defines the properties passed to the styling function when it is invoked
 */
declare type StyleFunctionConfigType<Params> = {
    params?: Params;
    palette: PaletteConfigType;
    selIf: HelperSelIf;
};
/**
 * Possible values for the Theme styling
 */
export declare type ThemeStyleType = ViewStyle | TextStyle | ImageStyle | FlexStyle | TransformsStyle;
/**
 * Definition of the styling function
 */
declare type StyleDefAsFunctionType<Guide, Params> = (params: StyleFunctionConfigType<Params>) => Guide | {
    [key: string]: StyleProp<any>;
};
declare type StyleDefAsObjecttype = {
    [key: string]: StyleProp<ThemeStyleType>;
};
/**
 * This defines the styling method, if function or object
 */
declare type StyleDefType<StyleGuide extends object, Params extends object = {}> = StyleDefAsFunctionType<StyleGuide, Params> | StyleDefAsObjecttype;
export default StyleDefType;
