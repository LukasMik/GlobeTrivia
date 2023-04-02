import Header from "../Header";

const CountriesInfoPage = () => {
    return (
        <>
            <Header heading='Country detail' underHeading='Lorem ipsum dolor sit amet'/>
            <div className="mx-auto max-w-4xl bg-white rounded-lg shadow-md overflow-hidden my-10">
                <h1 className="py-4 text-center text-3xl font-bold">Country Information</h1>
                <img src="https://via.placeholder.com/800x400" alt="Country Photo" className="block w-full" />
                    <div className="flex flex-wrap justify-center py-4">
                        <div className="px-4 py-2 text-center w-1/2 sm:w-1/4">
                            <div className="text-gray-600 uppercase">Country Name</div>
                            <div className="text-2xl font-bold">United States</div>
                        </div>
                        <div className="px-4 py-2 text-center w-1/2 sm:w-1/4">
                            <div className="text-gray-600 uppercase">Flag</div>
                            <div className="mt-2"><img src="https://via.placeholder.com/200x133" alt="Flag"/></div>
                        </div>
                        <div className="px-4 py-2 text-center w-1/2 sm:w-1/4">
                            <div className="text-gray-600 uppercase">Currency</div>
                            <div className="text-2xl font-bold">US Dollar</div>
                        </div>
                        <div className="px-4 py-2 text-center w-1/2 sm:w-1/4">
                            <div className="text-gray-600 uppercase">Area</div>
                            <div className="text-2xl font-bold">9</div>
                        </div>
                    </div>
            </div>
        </>
);
}

export default CountriesInfoPage;