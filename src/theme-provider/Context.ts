import React from 'react'
import { ThemeProviderContextType } from '../types/theme-provider.types'
import { PaletteConfigType } from '../types/palette.types'

export const ThemeProviderContext = React.createContext<ThemeProviderContextType>({
    changeTheme: () => {},
    dimensions: { width: 0, height: 0 },
    mode: 'light',
    orientation: 'portrait',
    palette: {} as PaletteConfigType,
    selectedTheme: '',
    variables: {}
})

export const Provider = ThemeProviderContext.Provider
export const Consumer = ThemeProviderContext.Consumer
