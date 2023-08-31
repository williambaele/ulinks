import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Signup from "./pages/Signup";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

function App() {

  // AUTH
  const auth = getAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />


      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
