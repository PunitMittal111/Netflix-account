import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import SignIn from "./SignIn/SignIn";
import SignInPass from "./SignIn/SignInPass";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  // console.log(email);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home email={email} setEmail={setEmail} />} />
        <Route path="/login" element={<SignIn />} />
        <Route
          path="/signup/password?"
          element={<SignInPass email={email} />}
        />
      </Routes>
    </div>
  );
}

export default App;
