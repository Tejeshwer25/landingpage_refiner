import { useState } from "react";

import "./App.css";

import Navbar from "./components/navbar/Navbar";
import FilterMenu from "./components/filterMenu/FilterMenu";
import Card from "./components/card/Card";
import HelpForm from "./components/helpForm/HelpForm";
import LoginModal from "./components/loginModal/LoginModal";

import data from "./assets/MOCK_DATA.json";

function App() {
  const [userDetails, setUserDetails] = useState("");
  const [loginOpen, setLoginOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  console.log(userDetails)

  const toastMessage = (msg) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg('')
    }, 5000);
  }

  return (
    <div className="App" id={loginOpen ? "overlay" : ""}>
      {toastMsg ? <div className="toast">
                    {toastMsg}
                  </div>
      : 
      ''}

      <Navbar setLoginOpen={setLoginOpen} userDetails={userDetails} />
      {loginOpen ? (
        <LoginModal
          setLoginOpen={setLoginOpen}
          loginOpen={loginOpen}
          setUserDetails={setUserDetails}
          toastMessage={toastMessage}
        />
      ) : (
        ""
      )}

      <div>
        <FilterMenu />

        <div>
          {data.map((item) => (
            <Card data={item} key={item.id} />
          ))}
        </div>

        <HelpForm />
      </div>
    </div>
  );
}

export default App;
