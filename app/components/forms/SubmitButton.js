import React from 'react'
import { useFormikContext } from 'formik'
import AppButton from '../AppButton'

export default function SubmitButton({ title, fontFamily }) {
    const { handleSubmit } = useFormikContext()
    return (
        <AppButton
            name={title}
            onPress={handleSubmit}
            fontFamily={fontFamily}
        />
    )
}
