import { useState, useRef, useImperativeHandle, forwardRef } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import Sequence from './sequence';
import Sequence2 from './sequence/sequence2';
import { ScrollTrigger, Tween, Timeline, SplitChars, SplitWords } from 'react-gsap';

const ContentBlock1 = () => {
    return <div style={{
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }}>
        <div style={{ padding: '4em' }}>
            <ScrollTrigger start="0px center"
                end="1200px center"
                scrub={0.5}>
                <Timeline target={<div
                    style={{ display: 'block', opacity: 0, fontSize: '40px', color: 'white', fontWeight: 'bold' }}
                >
                    Hi there !!
                </div>}>
                    <Tween from={{ opacity: 0 }} to={{ opacity: 0 }} duration={0.5} />
                    <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={1} />
                    <Tween from={{ opacity: 1 }} to={{ opacity: 0 }} duration={0.5} />
                </Timeline>
            </ScrollTrigger>
            <ScrollTrigger start="200px center"
                end="1000px center"
                scrub={0.5}>
                <Timeline target={<div
                    style={{ display: 'block', opacity: 0, fontSize: '40px', color: 'white', fontWeight: 'bold', marginTop: '1em' }}
                >
                    My name is Ahren Pradhan!
                </div>}>

                    <Tween from={{ opacity: 0 }} to={{ opacity: 0 }} duration={0.5} />
                    <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={1} />
                    <Tween from={{ opacity: 1 }} to={{ opacity: 0 }} duration={0.5} />

                </Timeline>
            </ScrollTrigger>
            <ScrollTrigger start="400px center"
                end="800px center"
                scrub={0.5}>
                <Timeline target={<div
                    style={{ display: 'block', opacity: 0, fontSize: '40px', color: 'white', fontWeight: 'bold', marginTop: '1em' }}
                >
                    Welcome to my website
                </div>}>

                    <Tween from={{ opacity: 0 }} to={{ opacity: 0 }} duration={0.5} />
                    <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={1} />
                    <Tween from={{ opacity: 1 }} to={{ opacity: 0 }} duration={0.5} />

                </Timeline>
            </ScrollTrigger>
        </div>
    </div>;
}

const ContentBlock2 = () => {
    return (
        <div style={{
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <div style={{ padding: '4em' }}>
                <ScrollTrigger start="1000px center"
                    end="2800px center"
                    scrub={0.5} >
                    <Timeline target={
                        <div styl={{ opacity: 0 }}>
                            <ScrollTrigger start="1200px center" end="1400px center"
                                scrub={0.5} >
                                <div>
                                    <Tween
                                        from={{ x: '100vw', opacity: 0 }}
                                        to={{ opacity: 1, x: 'auto' }}
                                        stagger={0.5}
                                        ease="elastic.out(0.1, 0.1)">
                                        <SplitWords
                                            wrapper={<div style={{ display: 'inline-block', fontSize: '26px', color: 'white' }} />}
                                        >
                                            ABOUT ME
                                        </SplitWords>
                                    </Tween>
                                </div>
                            </ScrollTrigger>
                            <ScrollTrigger start="1400px center" end="1600px center"
                                scrub={0.5} >
                                <div style={{ paddingTop: '2em', letterSpacing: '2px' }}>
                                    <Tween
                                        from={{ x: '100vw', opacity: 0 }}
                                        to={{ opacity: 1, x: 'auto' }}
                                        stagger={0.5}
                                        duration={2}
                                        ease="elastic.out(0.1, 0.1)"
                                    >
                                        <SplitWords
                                            wrapper={<div style={{ display: 'inline-block', fontSize: '16px', color: 'white' }} />}
                                        >
                                            I am a full-stack MERN developer.
                                        </SplitWords>
                                    </Tween>
                                </div>
                            </ScrollTrigger>
                            <ScrollTrigger start="1600px center" end="1800px center"
                                scrub={0.5} >
                                <div style={{ paddingTop: '2em', letterSpacing: '2px' }}>
                                    <Tween
                                        from={{ x: '100vw', opacity: 0 }}
                                        to={{ opacity: 1, x: 'auto' }}
                                        stagger={0.5}
                                        ease="elastic.out(0.1, 0.1)">
                                        <SplitWords
                                            wrapper={<div style={{ display: 'inline-block', fontSize: '16px', color: 'white' }} />}
                                        >
                                            I am also comfortable with new technology, and ready to use them anywhere, required that, I am given a minimum time to know everything we will need in concern with the problem statement in demand.
                                        </SplitWords>
                                    </Tween>
                                </div>
                            </ScrollTrigger>
                            <ScrollTrigger start="1800px center" end="2000px center"
                                scrub={0.5} >
                                <div style={{ paddingTop: '2em', letterSpacing: '2px' }}>
                                    <Tween
                                        from={{ x: '100vw', opacity: 0 }}
                                        to={{ opacity: 1, x: 'auto' }}
                                        stagger={0.5}
                                        ease="elastic.out(0.1, 0.1)">
                                        <SplitWords
                                            wrapper={<div style={{ display: 'inline-block', fontSize: '16px', color: 'white' }} />}
                                        >
                                            My objective is to learn new things and perform to meet the standards. Seeking an organization where I can utilize my skills, analytics and education to help the company meet and surpass its goals.
                                        </SplitWords>
                                    </Tween>
                                </div>
                            </ScrollTrigger>
                        </div>
                    }>
                        <Tween
                            from={{ opacity: 0 }}
                            to={{ opacity: 1 }}
                            duration={1}
                        />
                        <Tween
                            from={{ opacity: 1 }}
                            to={{ opacity: 1 }}
                            duration={4}
                        />
                        <Tween
                            from={{ opacity: 1 }}
                            to={{ opacity: 0 }}
                        />

                    </Timeline>
                </ScrollTrigger>
            </div>
        </div >
    );
}

const HomeContainer = () => {
    const [load, setLoad] = useState(false);
    const ref = useRef();
    return (
        <div className='home-container'>
            <div className='section-1'>
                <Controller>
                    <Scene duration="4000" triggerHook="onLeave" pin>
                        {progress => (
                            <div style={{ height: "100vh", position: "relative" }}>
                                <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}>
                                    {/* <Sequence ref={ref} progress={progress} load={load} handleLoaded={setLoad} /> */}
                                    <Sequence2
                                        ref={ref}
                                        progress={progress} load={load} handleLoaded={setLoad} />
                                </div>
                                <ContentBlock1 />
                                <ContentBlock2 />
                            </div>
                        )}
                    </Scene>
                    {/* <Scene duration="200%" triggerHook="onLeave" pin>
                        {progress => (
                            <div style={{ height: "100vh", position: "relative" }}>
                            <Sequence ref={ref} progress={progress} load={load} handleLoaded={setLoad} />
                            </div>
                            )}
                        </Scene> */}
                </Controller>
            </div>
        </div>
    );
}

export default HomeContainer
