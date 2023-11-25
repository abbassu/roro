import logo from "./logo.svg";
import "./App.css";
import Footere from "./component/footer/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import First from "./component/hello_section/First";
import Navbare from "./component/navbar/Navbar";
import Carte from "./component/cart/Cart";
import { useState } from "react";
function App() {
  const [num, setnum] = useState(0);

  function addnum() {
    console.log(num);
    setnum(num + 1);
  }
  return (
    <div className="App">
      <Navbare number={num} />
      <First />
      <Carte addnum={addnum} />
      <Footere />
      <h1 className="text-success">GeeksforGeeks</h1>
      <div className="bg-info p-5">
        <p className="">
          This is example for using button with bootstrap styling
        </p>
        <a
          className="btn btn-primary"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Bootstrap button
        </a>
      </div>
    </div>
  );
}

export default App;
