// import episodes from "./episodes.json";
import Footer from "./components/Footer";
import MainBody from "./components/MainBody";
import MainHeader from "./components/MainHeader";

function App(): JSX.Element {
  return (
    <>
      <MainHeader />
      <hr />
      <MainBody />
      <hr />
      <Footer />
    </>
  );
}

export default App;
