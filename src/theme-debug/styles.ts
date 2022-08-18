import { ViewStyle, TextStyle } from 'react-native'
import StyleDefType from '../types/theme-styles.types'

export type StyleGuide = {
    /** Styles for the action button */
    button: ViewStyle
    /** Defines a container for information */
    column: ViewStyle
    /** Styles for the left label */
    columnLabel: TextStyle
    /** Styles for the value */
    columnValue: TextStyle
    /** Main styles */
    root: ViewStyle
    /** Complete row styling */
    row: ViewStyle
}
export type Params = {
    opened?: boolean
}

const styles: StyleDefType<StyleGuide, Params> = ({ palette, selIf, params }) => ({
    button: {
        backgroundColor: palette.secondaryColor,
        padding: 10,
        position: 'absolute',
        right: 0,
        top: 0
    },
    column: {
        flex: 1,
        flexDirection: 'row'
    },
    root: {
        backgroundColor: palette.primaryColor,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: selIf(params?.opened, 150, 40)
    },
    row: {
        flexDirection: 'row'
    }
})

export default styles
