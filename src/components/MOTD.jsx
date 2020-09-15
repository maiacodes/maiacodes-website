import React from 'react'
import useSWR from 'swr'
import BeatLoader from "react-spinners/BeatLoader";


const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function MOTD() {
        const { data, error } = useSWR('https://motd.maia.workers.dev', fetcher)
        if (error) return <p>404 - No subtitle found</p>
        if (!data) return <p><BeatLoader color="#f638dc" size={15}></BeatLoader></p>

        // render data
        console.log(`DATA: ${data}`)
        return <p>{data.motd}</p>
}