import React from 'react'

const withAlert = (WrappedComponent) => (props) => {
    return (
        <WrappedComponent {...props} alert={(msg) => alert(`Message : ${msg}`)} />
    )
}

export default withAlert
