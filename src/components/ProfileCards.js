import React from 'react'
import './ProfileCard.scss'
import { useSprings, animated } from 'react-spring'

function ProfileCard() {
    
    const profiles = [{
        name: 'Sabin Adams',
        description: 'UI/UX Enthusiast',
        img: 'https://www.w3schools.com/w3images/avatar2.png',
        emoji: '💻',
        twitter: true,
        facebook: false
    }, {
        name: 'Maddy Adams',
        description: 'Creative Arts Team',
        img: 'https://lh3.googleusercontent.com/proxy/c4iEHfOHs4JknT-EWj1HSzhN6rzzPm-8WxCF_onXysBFopklVDxT7WEs03jtMHIdeuyEU4Y2yxRK3OYW26EVaIA5iQ',
        emoji: '🎨',
        twitter: true,
        facebook: true
    },{
        name: 'Eli Adams',
        description: 'Food Sales',
        img: 'https://img.pngio.com/parent-directory-avatar-2png-avatar-png-256_256.png',
        emoji: '🍔',
        twitter: false,
        facebook: false
    }, {
        name: 'Abram Adams',
        description: 'Full-Stack Developer',
        img: 'data:image/jpeg;base64,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',
        emoji: '🖥️',
        twitter: true,
        facebook: true
    },{
        name: 'Erin Adams',
        description: 'Photographer',
        img: 'https://darresne.com/img/female-avatar.png',
        emoji: '📷',
        twitter: false,
        facebook: true
    }, {
        name: 'Andrew Adams',
        description: 'Mobile App Developer',
        img: 'https://img.pngio.com/png-avatar-108-images-in-collection-page-3-png-avatar-300_300.png',
        emoji: '📱',
        facebook: true,
        twitter: false
    }]

    const [scaleSprings, set] = useSprings(profiles.length, index => ({
        transform: `scale(1)`,
        boxShadow: `0px 5px 15px 0px rgba(0, 0, 0, 0.30)`,
        from: { 
            transform: `scale(0.5)`,
            boxShadow: `0px 0px 0px 0px rgba(0, 0, 0, 0.30)`
        },
        config: { tension: 400, mass: 2, velocity: 5 }
    }))


    const updateHover = hovering => ({
        transform: `scale(${ hovering ? 1.1 : 1})`,
        boxShadow: `0px ${hovering ? '10px 20px' : '5px 15px'} 0px rgba(0, 0, 0, 0.30)`
    })
    
    return (
        <div className="cardListHolder">
            {
                scaleSprings.map( (props, i) => (
                    <animated.div className="cardWrapper" 
                        key={i}
                        style={props}
                        onMouseEnter={() => set(item => item === i && updateHover(true))}
                        onMouseLeave={() => set(item => item === i && updateHover(false))}
                    >
                        <div className="profileCard">
                            <div className="iconHolder">
                                { profiles[i].twitter && <a className="fa fa-twitter"></a>}
                                { profiles[i].facebook && <a className="fa fa-facebook"></a>}
                            </div>
                            <img src={ profiles[i].img }/>
                            <div className="divider"></div>
                            <div className="details">
                                <h3 className="name">{ profiles[i].name }</h3>
                                <p className="description">{ profiles[i].description }</p>
                            </div>
                        </div>
                    </animated.div>
                ))
            }
        </div>
    )   
    
}

export default ProfileCard
