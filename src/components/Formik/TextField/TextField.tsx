import React from 'react';
import { useField } from 'formik'
import TextField, { TextFieldProps } from '@material-ui/core/TextField'

type Props = {
  name: string 
} & TextFieldProps

const TextInput: React.FC<Props> = ({ name, placeholder, ...props }) => {
  const [{value, ...field}, meta] = useField(name)
  const errorText = meta.error && meta.touched ? meta.error : ''

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if(props.onBlur) {
      props.onBlur(event)
    }
    field.onBlur(event)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(props.onChange) {
      props.onChange(event)
    }
    field.onChange(event)
  }
  
  return (
    <TextField
      name={name}
      placeholder={placeholder}
      value={value || ""}
      helperText={errorText === "empty" ? "" : errorText} 
      error={!!errorText} 
      {...props}
      onBlur={handleBlur}
      onChange={handleChange}
    ></TextField>
  )

}

TextInput.defaultProps = {
  placeholder: "",
  label: "",
  margin: "normal",
  inputProps: {},
  fullWidth: true
}

export default TextInput 
