
import AgencyLogin from "./components/login/AgencyLogin";
import CustomerLogin from "./components/login/CustomerLogin";
import { Routes, Route } from 'react-router';
import AgencyRegister from './components/signup/AgencyRegister';
import CustomerRegister from "./components/signup/CustomerRegister";
import Addnewcar from './components/agencyhome/Addnewcar';
import AgencyHome from "./components/agencyhome/index";
import CustomerHome from './components/customerhome/index';
import Home from "./components/home";
function App() {
  return (
    <div  >
     <Routes>
      <Route exact path ='/' element= {<Home/>}/>
      <Route exact path ='/customerlogin' element= {<CustomerLogin/>}/>
      <Route exact path = '/agencylogin' element = {<AgencyLogin/>}/>
      <Route exact path = '/agencyRegister' element= {<AgencyRegister/>}/>
      <Route exact path = '/customerRegister' element= {<CustomerRegister/>}/>
      <Route exact path = '/addnewcar' element={<Addnewcar/>}/>
      <Route exact path = '/agencyhome' element={<AgencyHome/>}/>
      <Route exact path = '/customerhome' element={<CustomerHome/>}/>
    </Routes>
    </div>
  );
}

export default App;
