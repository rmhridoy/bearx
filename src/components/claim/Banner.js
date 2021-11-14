import React from 'react'
function Banner() {
    return (
        <div id="claim__banner">
            <div className="container">
                <div className="claim__main">
                    <h1 className="section__heading">GAME CHANGING TOKENOMICS</h1>
                    <div className="claim__cards">
                        <div className="claim__item">
                            <p>TOKEN SYMBOL</p>
                            <p>$ROOT</p>                  
                        </div>
                        <div className="claim__item">
                            <p>MAX SUPPLY</p>
                            <p>135,050,000</p>  
                        </div>
                        <div className="claim__item">
                            <p>REDISTRIBUTION</p>                        
                            <p>REWARD - 2%</p> 
                        </div>
                        <div className="claim__item">
                            <p>UTILITY - NFTs</p>
                            <p>METAVERSE</p>
                            <p>CHALLENGES EVENTS</p>
                        </div>
                    </div>
                    
                    <div id="claim__slider">
                        <div className="claim__slider__item">
                            <p>LP SUPPLY: 1%</p>
                        </div>
                        <div className="claim__slider__item">
                            <p>TOKEN BURN</p>
                            <p>3% - AUTOMATIC</p>
                        </div>
                        <div className="claim__slider__item">
                            <p>MARKETING</p>
                            <p>1%</p>
                        </div>
                    </div>
                    
                    <div className="claim__button">
                        <button>Connect Wallet</button>
                        <button>Claim</button>
                    </div>
                </div>
                
                <div className="claim__content">
                    <h4>Read more about ROOT <a href="https://bearxnft.medium.com" target="_blank">here</a></h4>

                    <h4>$ROOT TOKEN CLAIM</h4>
                    <p className="bold">Check and claim your $ROOT rewards</p>
                    <p>The $ROOT token is a significant part of the BearX ecosystem. It fuels the Genesis bears daily with opportunities including reward based challenges, future NFTs, voting rights and more.</p>
                </div>
            </div>
        </div>
    )
}

export default Banner
