import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Navigation from "./components/Navigation";
import HomePage from "./components/pages/Home.page";
import ExploreCountriesPage from "./components/pages/ExploreCountries.page";
import CountriesQuizPage from "./components/pages/CountriesQuiz.page";
import CountriesListPage from "./components/pages/CountriesList.page";
import CountryDetailPage from "./components/pages/CountryDetail.page";
import { CountryContextProvider } from "./contexts/countryContext";

const CountryDetail = () => (
  <CountryContextProvider>
    <CountryDetailPage />
  </CountryContextProvider>
);

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <Navigation />
        </div>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/countries-info"} element={<ExploreCountriesPage />} />
          {/*<Route path={"/countries-quiz"} element={<CountriesQuizPage />} />*/}
          {/*<Route path={"/countries-list"} element={<CountriesListPage />} />*/}
          <Route path={"/country-detail/:cca2"} element={<CountryDetail />} />
        </Routes>
      </Router>
      <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
  );
};

export default App;
