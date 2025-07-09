import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home/Home.js";
import Books from "./components/books/Books.js";
import Rahbariat from "./components/rahbariat/Rahbariat.js";
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
            <Route path="/" element={<Rahbariat/>} ></Route>
          </Routes>
        </Router>
      </>

    )

  }
