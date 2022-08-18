import ThemeConfigType from './theme-config.types'
import { PaletteConfigType } from './palette.types'

export type ThemeModeType = 'light' | 'dark'

export type ThemeProviderContextType = {
    mode: ThemeModeType
    palette: PaletteConfigType
    variables?: { [k: string]: any }
    dimensions: { width: number; height: number }
    orientation: 'portrait' | 'landscape'
    selectedTheme: string
    changeTheme: (theme: string) => void
}

type ThemeProviderConfig = {
    /** The application inner components */
    children: React.ReactNode
    /** If the theme provider should detect when the dark mode is enabled */
    darkModeDetection?: boolean
    /** List of themes to use */
    themes: { [k: string]: ThemeConfigType }
    /** Current selected theme */
    defaultTheme?: string
    /** Override the darkmode  */
    mode?: ThemeModeType
    /** If the debugger should be displayed */
    debug?: boolean
}

export default ThemeProviderConfig
