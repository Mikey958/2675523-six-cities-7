import MainPage from '../main-page/main-page';

type AppProps = {
  placesCount: number;
};

function App({ placesCount }: AppProps) {
  return <MainPage placesCount={placesCount} />;
}

export default App;
