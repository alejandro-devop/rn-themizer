import StyleDefType from '../types/theme-styles.types';
import { StyleSheet } from 'react-native';
/**
 * Hook to create styles for your components
 * @author Alejandro Quiroz <alejandro.devop@gmail.com>
 * @version 0.0.1
 * @since 0.0.1
 * @param stylingConfig Styling configuration, can be a function or an object
 * @param params Object containing params for the styling function.
 * @returns
 */
declare const useStyling: <StyleGuide extends object, Params extends object = {}>(stylingConfig: StyleDefType<StyleGuide, Params>, params?: Params | undefined) => StyleSheet.NamedStyles<StyleGuide>;
export default useStyling;
