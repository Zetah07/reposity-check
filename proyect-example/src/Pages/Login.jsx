/* eslint-disable no-undef */
import React from 'react'
import { StyleSheet, TextInput, View, Text } from 'react-native'
import { useField } from 'formik'

const styles = StyleSheet.create({
  errorText: {
    // marginTop: 5,
    color: '#d73a4a',
    paddingLeft: 14,
    paddingTop: 0,
    margin: 0,
    fontSize: 12
  },
  borderError: {
    borderColor: '#d73a4a',
    borderStyle: 'solid',
    borderRadius: 5,
    borderWidth: 2
  },
  inputField: {
    flexGrow: 1,
    flexShrink: 1,
    margin: 10,
    borderStyle: 'solid',
    borderColor: '#bbb',
    borderRadius: 5,
    borderWidth: 2,
    padding: 10,
    marginBottom: 2
  }
})

const LoginPage = React.forwardRef((props, ref) => {
  const [field, meta, helpers] = useField(props.name)
  const showError = meta.touched && meta.error
  const textInputStyle = [
    styles.inputField,
    showError && styles.borderError
  ]
  return (
    <>
      <View>
        <TextInput
          ref={ref}
          onChangeText={value => helpers.setValue(value)}
          onBlur={() => helpers.setTouched(true)}
          value={field.value}
          error={showError}
          style={textInputStyle}
          {...props}
        />
        {showError && <Text style={styles.errorText}>{meta.error}</Text>}
      </View>
    </>
  )
})

export default LoginPage
