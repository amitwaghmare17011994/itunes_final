import React from 'react'

function Banner(props) {
    const { song } = props
    return (
        <div>
            <img src={song?.artworkUrl100} style={{ width: '50%',height:800 }} />
        </div>
    )
}

export default Banner
