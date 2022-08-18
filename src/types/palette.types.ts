export type PaletteConfigType = {
    /** Primary color used for backgrounds */
    primaryColor: string
    /** Secondary color used for backgrounds */
    secondaryColor: string
    /** (Optional) Tertiary color used for backgrounds */
    tertiaryColor?: string
    /** (Optional) Quaternary color used for backgrounds */
    quaternaryColor?: string
    /** Primary color used on texts */
    textPrimaryColor: string
    /** Secondary color used on text */
    textSecondaryColor: string
    /** Color to mark as success */
    success?: string
    /** Color used for success marks */
    successText?: string
    /** Color to mark as danger or errors */
    danger?: string
    /** Color used for danger marks */
    dangerText?: string
    /** Color to mark as informative */
    info?: string
    /** Color to be used for informative texts */
    infoText?: string
    /** Color to mark as warning */
    warning?: string
    /** Color used for warning texts */
    warningText?: string
    /** Colors for buttons */
    buttons?: {
        primaryColor?: string
        secondaryColor?: string
        textColor?: string
    }
}
type PaletteType = {
    default: PaletteConfigType
    dark?: PaletteConfigType
    light?: PaletteConfigType
}

export default PaletteType
