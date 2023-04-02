import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {QueryClientProvider, QueryClient} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import Navigation from "./components/Navigation";
import HomePage from "./components/pages/Home.page";
import CountriesInfoPage from "./components/pages/CountriesInfo.page";
import CountriesQuizPage from "./components/pages/CountriesQuiz.page";
import CountriesListPage from "./components/pages/CountriesList.page";

const App = () => {
    const queryClient = new QueryClient()

    return (
            <QueryClientProvider client={queryClient}>
                <Router>
                    <div>
                        <Navigation/>
                    </div>
                    <Routes>
                        <Route path={'/'} element={<HomePage/>}/>
                        <Route path={'/countries-info'} element={<CountriesInfoPage/>}/>
                        <Route path={'/countries-quiz'} element={<CountriesQuizPage/>}/>
                        <Route path={'/countries-list'} element={<CountriesListPage/>}/>
                    </Routes>
                </Router>
                <ReactQueryDevtools position='bottom-right' />
            </QueryClientProvider>
    )
}

export default App
