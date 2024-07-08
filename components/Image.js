import React from "react"

function Image({path,width})
{
    console.log(path)
    return (
        <>
            <img src= {path} width={width} />
        </>
    )
}

export default Image