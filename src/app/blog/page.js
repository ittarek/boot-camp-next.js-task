
import Link from "next/link"

const blogPage = () => {

const id = 232
    return(
        <div> blog

<Link href={`/blog/${id}`}> id</Link>

        </div>
    )
}

export default blogPage