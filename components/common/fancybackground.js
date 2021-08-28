
const FancyBackground = (props) => {
    return <>
        <div className='main-background'>
            <video src="/potrait/dark/background.mp4" autoPlay="true" />
        </div>
        {props.children}
    </>
}

export default FancyBackground;