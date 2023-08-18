import React from 'react'

function Page({ params }: any) {
    const { id } = params

    return (
        <div><h1>Show file: {id}</h1></div>
    )
}

export default Page