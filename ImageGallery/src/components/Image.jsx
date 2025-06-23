import React from 'react'

const Image = ({ src }) => {
    return (
        <div style={{ width: '30%', height: 'auto' }}>
            <img src={src} />
        </div>
    )
}

export default Image
