import { ViewStyle, TextStyle } from 'react-native';
import StyleDefType from '../types/theme-styles.types';
export declare type StyleGuide = {
    /** Styles for the action button */
    button: ViewStyle;
    /** Defines a container for information */
    column: ViewStyle;
    /** Styles for the left label */
    columnLabel: TextStyle;
    /** Styles for the value */
    columnValue: TextStyle;
    /** Main styles */
    root: ViewStyle;
    /** Complete row styling */
    row: ViewStyle;
};
export declare type Params = {
    opened?: boolean;
};
declare const styles: StyleDefType<StyleGuide, Params>;
export default styles;
