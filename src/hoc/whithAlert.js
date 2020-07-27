import React from 'react'

const whithAlert = (WrappedComponent) => (props) => {
    return (
        <WrappedComponent {...props} alert={(msg) => alert(`Message : ${msg}`)} />
    )
}

export default whithAlert
