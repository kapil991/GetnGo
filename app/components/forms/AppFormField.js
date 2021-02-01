import React from 'react'
import { useFormikContext } from 'formik'

import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'

export default function AppFormField({ title, name, color, ...otherProps }) {
    const { setFieldTouched, handleChange, errors, touched } = useFormikContext()
    return (
        <>
            <AppTextInput 
                onBlur={() => setFieldTouched(title)}
                onChangeText={handleChange(title)}
                // width={width}
                name={name}
                color={color}
                {...otherProps}
            />
            <ErrorMessage error={errors[title]} visible={touched[title]} />
        </>
    )
}
