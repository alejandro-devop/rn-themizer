import useThemeConfig from '../use-theme-config'

const usePalette = () => {
    const { palette } = useThemeConfig()
    return palette
}

export default usePalette
