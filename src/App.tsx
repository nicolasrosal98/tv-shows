import "./websitestyle.css";
// import episodes from "./episodes.json";
import Footer from "./components/Footer";
import MainBody from "./components/MainBody";
import NavigationBar from "./components/NavigationBar";

function App(): JSX.Element {
  return (
    <body>
      <NavigationBar />
      <MainBody />
      <hr />
      <Footer />
    </body>
  );
}

export default App;
