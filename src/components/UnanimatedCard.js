import React from 'react'
import './ProfileCard.scss'
import { useSpring, animated } from 'react-spring'

function ProfileCard() {

const props = useSpring({
    transform: `scale(1)`,
    boxShadow: `0px 5px 15px 0px rgba(0, 0, 0, 0.30)`,
    from: { 
        transform: `scale(0.5)`,
        boxShadow: `0px 0px 0px 0px rgba(0, 0, 0, 0.30)`
    },
    config: { 
        tension: 400, 
        mass: 2, 
        velocity: 5 
    }
})

    return (
        <animated.div className="cardWrapper" style={props}>  
            <div className="profileCard">
                <div className="iconHolder">
                    <a className="fa fa-twitter"></a>
                    <a className="fa fa-facebook"></a>
                </div>
                <img src="https://www.w3schools.com/w3images/avatar2.png"/>
                <div className="divider"></div>
                <div className="details">
                    <h3 className="name">Sabin Adams</h3>
                    <p className="description">UI/UX Enthusiast</p>
                </div>
            </div>
        </animated.div>
    )
}

export default ProfileCard
