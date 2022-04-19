import Notelist from "./components/Noteslist";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Search from "./components/Search";


function App() {

  
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1><span style={{color:"#308d46"}}>React</span> Notes</h1>
          {/* <Search /> */}
        </div>
        
        <Notelist />
      </div>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
