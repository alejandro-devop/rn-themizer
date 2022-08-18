import PaletteType from './palette.types'

type VariableValueType = string | number | boolean

type VariablesType = { [k: string]: VariableValueType }

type ThemeConfigType = {
    palette: PaletteType
    variables?: VariablesType
}

export default ThemeConfigType
