import bgVideo from '../../assets/images/globe-video.mp4'

const HomePage = () => {
    return (
        <>
            <div className='bg-video'>
                <video autoPlay muted loop>
                    <source src={bgVideo} type="video/mp4"/>
                </video>
            </div>
            <div className='h-screen flex items-center justify-center z-10'>
                <h1 className='transform -translate-y-16'>Home page</h1>
            </div>
        </>
    );
}

export default HomePage;