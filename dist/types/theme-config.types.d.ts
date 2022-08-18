import PaletteType from './palette.types';
declare type VariableValueType = string | number | boolean;
declare type VariablesType = {
    [k: string]: VariableValueType;
};
declare type ThemeConfigType = {
    palette: PaletteType;
    variables?: VariablesType;
};
export default ThemeConfigType;
