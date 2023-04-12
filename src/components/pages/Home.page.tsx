import bgVideo from "../../assets/images/globe-video.mp4";

const HomePage = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center z-10">
        <h1 className="transform -translate-y-24 md:-translate-y-16 text-center">
          Welcome to GlobeTrivia!
        </h1>
      </div>
      <video
        autoPlay
        muted
        loop
        className="absolute h-full w-full top-0 right-0 object-cover -z-10"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
    </>
  );
};

export default HomePage;
