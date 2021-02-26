import React from 'react'

const Label = ({children, isDarkMode}) => {
    return (
        <div className={isDarkMode === true ? "wrapper label-dark" : "wrapper label"}>
            {children}
        </div>
    )
}

export default Label
