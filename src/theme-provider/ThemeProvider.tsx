import React from 'react'
import { ThemeProviderConfig } from './../types'
import ThemeDebug from '../theme-debug/ThemeDebug'
import { PaletteConfigType } from '../types/palette.types'
import { Provider } from './Context'
import ThemeConfigType from '../../dist/types/theme-config.types'

/**
 * Provider for theming react-native applications
 * @param param0
 * @author Alejandro Quiroz <alejandro.devop@gmail.com>
 * @version 0.0.1
 * @since 0.0.1
 * @returns {React.ReactNode}
 */
const ThemeProvider: React.FC<React.PropsWithChildren<ThemeProviderConfig>> = ({
    children,
    defaultTheme,
    mode,
    themes,
    debug
}) => {
    const [selectedTheme] = React.useState(defaultTheme || 'default')
    // const [appMode] = useState(mode || 'light')
    // const [orientation] = useState<'portrait' | 'landscape'>('portrait')
    const appMode = mode || 'light'
    const paletteMode = 'default'
    const orientation = 'portrait'
    const handleChangeTheme = (newTheme: string) => {
        // setSelectedTheme(newTheme)
        console.log('Theme: ', newTheme)
    }
    const { palette, variables } = themes[selectedTheme] || ({} as ThemeConfigType)
    const paletteConfig = palette[paletteMode] || ({} as PaletteConfigType)

    return (
        <Provider
            value={{
                changeTheme: handleChangeTheme,
                dimensions: { width: 100, height: 100 },
                mode: appMode,
                orientation,
                palette: paletteConfig,
                selectedTheme: selectedTheme,
                variables
            }}
        >
            {children}
            {debug && <ThemeDebug />}
        </Provider>
    )
}

ThemeProvider.defaultProps = {
    defaultTheme: 'main',
    mode: 'light',
    darkModeDetection: false
}

export default ThemeProvider
