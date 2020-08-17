import React from 'react'
import { useSpring, animated } from 'react-spring'

function AnimatedParagraph() {
    const props = useSpring({ number: 10, from: { number: 2 }, config: { duration: 2000 }})
    return <animated.p>{ props.number.interpolate( num => Math.round(num) ) }</animated.p>
}

export default AnimatedParagraph
