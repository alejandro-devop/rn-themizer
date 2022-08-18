import React from 'react'
import { ThemeProviderContext } from '../theme-provider/Context'
/**
 * Hook to get the theme config from the theme provider context.
 * @author Jorge Alejandro Quiroz Serna <alejandro.devop@gmail.com>
 * @returns {ThemeProviderContextType}
 * @since 0.0.1
 * @version 0.0.1
 */
const useThemeConfig = () => {
    const themeConfig = React.useContext(ThemeProviderContext)
    return themeConfig
}

export default useThemeConfig
