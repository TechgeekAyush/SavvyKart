import React from 'react'

const page = async ({params}) => {
    const slug = (await params).slug
    return <div>My Post: {slug}</div>
}

export default page