
import Link from "next/link"

export default function Page(){
    return (
        <>
            <h1>
                city page!
            </h1>
            <ul>
                <li>City 1</li>
                <li>City 2</li>
                <li></li>
            </ul>
            <Link href="/">Go back to homepage</Link>
        </> 
    )
}