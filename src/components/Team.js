import React from 'react'
import akeem from '../assets/images/akeem.png'
import Obelisxx from '../assets/images/Group 36810.png'
import Bayliss from '../assets/images/Rectangle 42.png'
import Koki from '../assets/images/Group 36814.png'
import Diemension from '../assets/images/Group 36812.png'
import Jaarth from '../assets/images/Rectangle 42 (1).png'
function Team() {
    return (
        <div id="team">
            <div className="container">
                <h2 className="section__heading">Meet our team</h2>
                <div className="team__card">
                    <div className="team__item">
                        <img src={akeem} alt="Team"/>
                        <span className="team__title">Akeem
                        <a href="https://twitter.com/akeemojuko"><i className="fab fa-twitter"></i></a>
                        </span>    
                        <p>Creator</p>                    
                    </div>
                    <div className="team__item">
                        <img src={Obelisxx} alt="Team"/>
                        <span className="team__title">Obelisxx
                        <a href="https://twitter.com/obelisxx"><i className="fab fa-twitter"></i></a>
                        </span>    
                        <p>Artist</p>                    
                    </div>
                    <div className="team__item">
                        <img src={Bayliss} alt="Team"/>
                        <span className="team__title">Bayliss
                        </span>    
                        <p>Developer</p>                    
                    </div>
                    {/* <div className="team__item">
                        <img src={Gyoza} alt="Team"/>
                        <span className="team__title">Gyoza
                        </span>    
                        <p>Community Lead</p>                    
                    </div> */}
                    <div className="team__item">
                        <img src={Koki} alt="Team"/>
                        <span className="team__title">Koki
                        <a href="https://twitter.com/Koki_NFT "><i className="fab fa-twitter"></i></a>
                        </span>    
                        <p>Concept Art</p>                    
                    </div>
                    <div className="team__item">
                        <img src={Diemension} alt="Team"/>
                        <span className="team__title">Diemension
                        <a href="https://twitter.com/AlexanderNikish"><i className="fab fa-twitter"></i></a>
                        </span>    
                        <p>Art + Design</p>                    
                    </div>
                    <div className="team__item">
                        <img src={Jaarth} alt="Team"/>
                        <span className="team__title">Jaarth 
                        </span>    
                        <p>BearX Writer</p>                    
                    </div>
                </div>
                <div className="team__bottom--text">+ An incredible extended team of 18 others including moderators, co-devs, co-designers and more. </div>
            </div>
        </div>
    )
}

export default Team
