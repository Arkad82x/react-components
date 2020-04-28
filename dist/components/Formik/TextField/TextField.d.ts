import React from 'react';
import { TextFieldProps } from '@material-ui/core/TextField';
declare type Props = {
    name: string;
} & TextFieldProps;
declare const TextInput: React.FC<Props>;
export default TextInput;
