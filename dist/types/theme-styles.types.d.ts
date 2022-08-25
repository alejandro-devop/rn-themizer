import { PaletteConfigType } from './palette.types';
import { ViewStyle, TextStyle, ImageStyle, FlexStyle, TransformsStyle, StyleProp } from 'react-native';
import VariablesType from './variables.types';
declare type HelperSelIf<ValueType = any> = (condition?: boolean, trueValue?: StyleProp<ValueType>, falseValue?: StyleProp<ValueType>) => StyleProp<ValueType>;
declare type HelperApplyIf<ValueType = any> = (condition?: boolean, styles?: StyleProp<ValueType>) => StyleProp<ValueType>;
declare type HelperApplyFor = (value?: any, styles?: {
    [k: string]: ThemeStyleType;
}) => ThemeStyleType;
declare type HelperValueFor = (value?: any, styles?: {
    [k: string]: StyleProp<any>;
}) => StyleProp<any>;
declare type HelperFromPalette = (key: string, defValue?: any) => any;
declare type HelperFromVars = (key: string, defValue?: any) => any;
/**
 * This defines the properties passed to the styling function when it is invoked
 */
declare type StyleFunctionConfigType<Params> = {
    params?: Params;
    palette: PaletteConfigType;
    selIf: HelperSelIf;
    applyIf: HelperApplyIf;
    applyFor: HelperApplyFor;
    valueFor: HelperValueFor;
    fromPalette: HelperFromPalette;
    fromVars: HelperFromVars;
    variables?: VariablesType;
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
    [key: string]: StyleProp<any>;
};
/**
 * This defines the styling method, if function or object
 */
declare type StyleDefType<StyleGuide extends object = {}, Params extends object = {}> = StyleDefAsFunctionType<StyleGuide, Params> | StyleDefAsObjecttype;
export default StyleDefType;
