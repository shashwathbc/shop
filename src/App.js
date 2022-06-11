import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComp from './components/header/HeaderComp';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import CardDetails from './components/carddetails/CardDetails';
import CardsComp from './components/cards/CardsComp';
import Login from './components/login/Login';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import { AuthContextProvider } from './context/AuthContext';
import Protected from './components/protect/Protected';

function App() {
  return (
   <BrowserRouter >
   <AuthContextProvider>

   <HeaderComp/>
   <Routes>
     <Route path="/" element={
     <Protected>
      <CardsComp/>
      </Protected>
    } />
     <Route path="/cart/:id" element={  <CardDetails/>} />
     <Route path="/about" element={  <About/>} />
     <Route path="/contact" element={  <Contact/>} />
     <Route path="/login" element={  <Login/>} />
   </Routes>

   </AuthContextProvider>
   </BrowserRouter >
  );
}

export default App;
