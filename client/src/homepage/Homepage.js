import React from 'react'
import Particles from "react-tsparticles"
import ReactTypingEffect from 'react-typing-effect'

import Nav from './Nav'

const Homepage = () => {

    const homePath = 'https://pollyreal1.github.io/prestruct/';

    const particlesInit = (main) => {
        console.log(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    }

    return (
        <div>
            <Particles
                id="tsparticles"
                // init={particlesInit}
                // loaded={particlesLoaded}
                options={{
                    fpsLimit: 75,
                    background: {
                        color: "#000000",
                        repeat: 'no-repeat',
                        size: 'cover',
                    },
                    backgroundMode: {
                        enable: true
                    },
                    // interactivity: {
                    //   detectsOn: 'window',
                    //   events: {
                    //     onClick: {
                    //       enable: true,
                    //       mode: "push",
                    //     },
                    //     onHover: {
                    //       enable: true,
                    //       mode: "repulse",
                    //     },
                    //     resize: true,
                    //   },
                    //   modes: {
                    //     bubble: {
                    //       distance: 400,
                    //       duration: 2,
                    //       opacity: 0.8,
                    //       size: 40,
                    //     },
                    //     push: {
                    //       quantity: 4,
                    //     },
                    //     repulse: {
                    //       distance: 200,
                    //       duration: 0.4,
                    //     },
                    //   },
                    // },
                    particles: {
                        number: {
                            value: 60,
                            density: {
                                enable: true,
                                value_area: 1000
                            }
                        },
                        color: {
                            value: ["#6C3BF4", "#4F70F5", "#31A8F7"]
                        },
                        links: {
                            color: "#F226E6",
                            enable: true,
                            // Change here for many links
                            distance: 150,
                            opacity: 0.5,
                            width: 2,
                        },
                        move: {
                            enable: true,
                            speed: 1,
                        },
                        size: {
                            value: 5,
                            random: {
                                enable: true,
                                minimumValue: 1
                            },
                            animation: {
                                enable: true,
                                speed: 2.5,
                                minimumValue: 1
                            }
                        },
                        opacity: {
                            value: 0.8,
                            random: {
                                enable: true,
                                minimumValue: 0.4
                            }
                        }
                    }
                }}
            />

            {/* Navbar */}
            <Nav></Nav>

            {/* Content */}
            <div class="position-relative container text-light">

                <div class="header-construct">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 col-sm-12">
                            <h1>
                                It Begins With&nbsp;
                                <ReactTypingEffect
                                    text={['Decentralization', 'People', 'Blockchain', 'Network']}
                                    cursorRenderer={cursor => <h1>{cursor}</h1>}
                                    displayTextRenderer={(text, i) => {
                                        return (
                                            <>
                                                {text.split('').map((char, i) => {
                                                    const key = `${i}`;
                                                    return (
                                                        <span
                                                            key={key}
                                                            style={{ color: '#3ee1ec' }}
                                                        >{char}</span>
                                                    );
                                                })}
                                            </>
                                        );
                                    }}
                                />
                            </h1>
                            <h5 class="text-muted"><span style={{ color: '#31A8F7' }}>Prestruct</span> is a network for building the most effecient blockchain apps for individuals and aspiring developers.</h5>
                            <div class="d-flex mt-4">
                                <button class="btn btn-primary me-4">Learn about Prestruct</button>
                                <button class="btn btn-primary">Build on Struct</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="below-header">
                <div class="container-fluid">
                    <div class="padding-top-100">
                        <div class="text-light text-center">
                            <h1>
                                The Prestruct Network
                            </h1>
                        </div>
                        <div class="text-light text-center mt-4">
                           <h5> With <b class="text-themecolor-1">Prestruct</b>, transaction for your dapps are much faster, efficient and scalable.</h5>
                        </div>
                    </div>
                    <div class="padding-top-100">
                        {/* <div class="d-flex flex-row">
                            <div class="box-card box-bg-1 mx-auto">
                                <h4>Finance Decentralized</h4>
                                <p>You as an individuals or an organization have the power to make finance decentralized. Traditional finance has always been there but since the utilization of blockhain and cryptocurrency on the modern era, Decentralized finance has been dominating the world escaping from the shackles that define our world and breaking through the economy in much more efficient way.</p>
                            </div>
                            <div class="box-card box-bg-2 mx-auto">
                                <h4>Cryptocurrency usable in the real world</h4>
                                <p>Some are still relucntant on Cryptocurrency usable in the real world. That is why we are developing the platform to make Cryptocurrency usable in the real world by providing apps and gateway to open the blockchain economy to the real world.</p>
                            </div>
                            <div class="box-card box-bg-3 mx-auto">
                                <h4>The future of development</h4>
                                <p class="text-justify">Integrating the use case of Web3.0 we are now on the era of blockchains and cryptography this will be start of future innovations and technology that builds the foundation of the next era. </p>
                            </div>
                        </div> */}
                        
                        <div class="row">
                            <div class="col-md-3 mx-auto mb-3">
                                <div class="box-card box-bg-1">
                                    <h4>Finance Decentralized</h4>
                                    <p>You as an individuals or an organization have the power to make finance decentralized. Traditional finance has always been there but since the utilization of blockhain and cryptocurrency on the modern era, Decentralized finance has been dominating the world escaping from the shackles that define our world and breaking through the economy in a much more efficient way.</p>
                                </div>
                            </div>
                            <div class="col-md-3 mx-auto mb-3">
                                <div class="box-card box-bg-2">
                                    <h4>Cryptocurrency usable in the real world</h4>
                                    <p>Some are still relucntant on Cryptocurrency usable in the real world. That is why we are developing the platform to make Cryptocurrency usable in the real world by providing apps and gateway to open the blockchain economy to the real world.</p>
                                </div>
                            </div>
                            <div class="col-md-3 mx-auto mb-3">
                                <div class="box-card box-bg-3">
                                    <h4>The future of development</h4>
                                    <p class="text-justify">Integrating the use case of Web3.0 we are now on the era of blockchains and cryptography this will be start of future innovations and technology that builds the foundation of the next era. With Prestruct you can deploy your own smart contracts and dapps with less cost than other networks.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div class="below-header-2">
                <div class="container text-light">
                    <div class="row">
                        <div class="col-md-6 mb-4 text-center text-md-start mb-auto mt-auto">
                            <h1>People holds the power</h1>
                            <h5>Prestruct runs on <span class="text-themecolor-1">Proof-of-Stake</span> algorithm.</h5>
                            <p>
                                While Bitcoin and Ethereum uses Proof-of-Work algorithm. Prestruct uses proof-of-stake for energy efficiency and to make people hold the governance over the network.
                            </p>
                            <button class="btn btn-primary">Be a validator</button>
                        </div>
                        <div class="col-md-5 ms-auto">
                            {/* <div class="box-card box-bg-2">
                                <h3 class="text-center">Be a validator</h3>
                            </div> */}
                            <img src={`${homePath}/tech-svg/img-8.svg`} width="100%"></img>
                        </div>
                    </div>
                </div>

                <div class="container text-light padding-top-100">
                    <div class="row">
                        <div class="col-md-5 me-auto">
                            {/* <div class="box-card box-bg-2">
                                <h3 class="text-center">Be a validator</h3>
                            </div> */}
                            <img src={`${homePath}/tech-svg/img-2.svg`} width="100%"></img>
                        </div>
                        <div class="col-md-6 mb-4 text-center text-md-end mt-auto mb-auto">
                            <h1>Never changing gas fees</h1>
                            <h5>Prestruct gas fees are <span class="text-themecolor-1">constant</span>.</h5>
                            <p>
                                With Prestruct gas fees are changeless, this means that even on longer blocks gas fees cost is fixed and unchangeable. 
                            </p>
                            {/* <button class="btn btn-primary">Be a validator</button> */}
                        </div>
                    </div>
                </div>
            </div>

            <div class="below-header-3">
                <div class="container text-light padding-top-100">
                    <div class="row">
                        <div class="col-md-4 mb-4 text-center text-md-start">
                            <h1>Stake on STRUCT</h1>
                            {/* <h5>Prestruct runs on <span class="text-themecolor-1">Proof-of-Stake</span> algorithm.</h5> */}
                            <p>
                                You can earn rewards by staking your <span class="text-themecolor-1">STRUCT</span> for a period of time. Choose how you lock and stake, you can stake for only one time or divide your stakes and lock for different period of time. How you stake depends on you.
                            </p>
                            <button class="btn btn-primary">Stake your STRUCT</button>
                        </div>
                        <div class="col-md-4 ms-auto">
                            <div class="box-card-sp box-bg-2">
                                <h3 class="text-center">Estimate your rewards</h3>
                                <label for="structStake" class="form-label">Stake <span class="text-themecolor-1">100 STRUCT</span></label>
                                <input type="range" class="form-range" id="structStake"></input>
                                <label for="structLock" class="form-label">Lock for <span class="text-themecolor-2">30 Days</span></label>
                                <input type="range" class="form-range" id="structLock"></input>
                                <hr/>
                                <div class="d-flex">
                                    <div class="">
                                        Your rewards<br/>
                                        <h5 class="text-themecolor-1">5000 STRUCT</h5>
                                    </div>
                                    <div class="ms-auto">
                                        Current APR
                                        <h5 class="text-themecolor-1">13%</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container text-light padding-top-200 padding-bottom-200">
                    <div class="row">
                        <div class="col-md-4 me-auto mb-5">
                            <div class="box-card-sp-2 box-bg-1">
                                <h3 class="text-center">Build and Deploy</h3>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4 text-center text-md-start">
                            <h1>Build on Prestruct</h1>
                            <p>
                                Prestruct is built based on etherum. You can easily code using solidity and deploy your own dapps and smart contracts on Prestruct network.
                            </p>
                            <button class="btn btn-primary">See our documentation</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer">
                <div class="container text-center">
                    <h6><a href="http://paulreal.com" target="_blank" class="footer-link">Paul Real</a> @ { new Date().getFullYear() }</h6>
                </div>
            </div>

        </div>
    )
}

export default Homepage
