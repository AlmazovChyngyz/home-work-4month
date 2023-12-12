
import './App.css';
import {Info, Info2, Span} from "./Info";
import Buttons from "./Buttons";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Span/>
          <Info/>
          <Info2/>
          <Buttons button={'1'}/>
          <Buttons button={'2'}/>
      </header>
      <footer className="App-footer">
          <Footer a={"Follow to our social Networks"}/>
      </footer>
    </div>
  );
}

export default App;
