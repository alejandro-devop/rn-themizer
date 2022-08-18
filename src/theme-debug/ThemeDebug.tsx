import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles, { StyleGuide, Params } from './styles'
import useStyling from '../use-styling/useStyling'
import useThemeConfig from '../use-theme-config/useThemeConfig'
/**
 * Renders information about the selected theme
 * @author Alejandro Quiroz <alejandro.devop@gmail.com>
 * @since 0.0.1
 * @version 0.0.1
 * @returns {React.ReactNode}
 */
const ThemeDebug: React.FC = () => {
    const { selectedTheme } = useThemeConfig()
    const [opened, setOpened] = React.useState(false)
    const styling = useStyling<StyleGuide, Params>(styles, { opened })
    const toggleOpen = () => setOpened(!opened)

    return (
        <View style={styling.root}>
            <View style={styling.row}>
                <View style={styling.column}>
                    <Text style={[styling.columnLabel]}>Theme:</Text>
                    <Text style={[styling.columnValue, styling.column]}>{selectedTheme}</Text>
                </View>
                <View style={styling.column}>
                    <TouchableOpacity style={styling.button} onPress={toggleOpen}>
                        <Text>{opened ? 'Close' : 'Open'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ThemeDebug
