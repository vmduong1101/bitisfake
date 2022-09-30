import React, { useEffect, useState } from 'react'
import { BsArrowUpShort } from "react-icons/bs";
import { useWindowScroll } from "react-use";

function Scroll() {
    const { y: pageYOffset } = useWindowScroll()
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (pageYOffset > 400) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }, [pageYOffset])

    if (!visible) {
        return false
    }

    const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

    return (
        <div className='scrollTop' onClick={scrollTop}>
            <BsArrowUpShort />
        </div>
    )
}

export default Scroll