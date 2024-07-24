import Navbar from './components/Navbar'
import './App.css';
import Home from './components/Home2'
import About from './components/About'
import Card from './components/card'

 import Product from './components/Product'
 import Testimonial from './components/Testimonial'
 import Foot from './components/foot'
import Service from './components/Service'


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Card/>
      <Service/>
      <Product/>
      <Testimonial/>
      <Foot/>
    </div>
  );
}

export default App;
