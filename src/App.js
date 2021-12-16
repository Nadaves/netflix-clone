import Row from "./Row";
import Banner from "./Banner";
import Navbar from "./Navbar";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner fetchURL={requests.fetchTrending} />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} isLargeRow />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row title="Comedy Films" fetchURL={requests.fetchComedy} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumnetaries} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomance} />
      <Row title="Horror Films" fetchURL={requests.fetchHorror} />
    </div>
  );
}

export default App;
