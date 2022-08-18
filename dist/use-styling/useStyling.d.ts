import StyleDefType from '../types/theme-styles.types';
import { StyleSheet } from 'react-native';
declare const useStyling: <StyleGuide extends object, Params extends object = {}>(stylingConfig: StyleDefType<StyleGuide, Params>, params?: Params | undefined) => StyleSheet.NamedStyles<StyleGuide>;
export default useStyling;
