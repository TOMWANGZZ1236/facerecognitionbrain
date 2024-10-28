import './App.css';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import ParticlesBg from 'particles-bg'


function App() {

  return (
    <div className="App">
      <ParticlesBg type="cobweb" bg={true} num = {300} /> 
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm/>
      
    </div>
  );
}

export default App;
