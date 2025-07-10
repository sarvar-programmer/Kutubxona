import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home/Home";
import Books from "./components/books/Books";
import Rahbariat from "./components/rahbariat/Rahbariat";
import AKM from "./components/akm/AKM";
export default function App() {

    return (
      <>

        <Router>
          <Routes>
            {/* <Route path="/" element={<Home/>} /> */}
          </Routes>
          <Routes>
            {/* <Route path="/" element={<Books/>}/> */}
          </Routes>
          <Routes>
            {/* <Route path="/" element={<Rahbariat/>} ></Route> */}
          </Routes>
          <Routes>
            <Route path="/" element={<AKM/>} ></Route>
          </Routes>
        </Router>
      </>

    )

  }
