import bgVideo from '../../assets/images/globe-video.mp4'

const HomePage = () => {
    return (
        <>
            <video autoPlay muted loop className='absolute h-full w-full top-0 right-0 object-cover'>
                <source src={bgVideo} type="video/mp4"/>
            </video>
            <div className='h-screen flex items-center justify-center z-10'>
                <h1 className='transform -translate-y-16'>Welcome to GlobeTrivia!</h1>
            </div>
        </>
    );
}

export default HomePage;