import { useRef, useEffect } from "react"

const WithRef = () => {
    const inputEl = useRef(null)
    console.log(inputEl)

    useEffect(() => {
        console.log(inputEl)
    })

    return (
        <div>
            
        </div>
    )
}

export default WithRef