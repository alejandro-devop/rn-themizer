declare type VariablesType = {
    buttons?: {
        marginBottom?: number;
    };
    textField?: {
        root?: {
            paddingHorizontal?: number;
            paddingVertical?: number;
            marginBottom?: number;
        };
        label?: {
            fontSize?: number;
            color?: string;
            paddingHorizontal?: number;
            fontWeight?: string;
        };
        input?: {
            fontSize?: number;
            color?: string;
            paddingHorizontal?: number;
        };
        inputWrapper?: {
            borderWidth?: number;
            borderWidthFocussed?: number;
            borderRadius?: number;
            height?: number;
        };
    };
};
export default VariablesType;
