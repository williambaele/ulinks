// IMPORTS
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext.js";
import { useLinksContext } from "./hooks/useLinksContext";

//PAGES
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { useEffect, useState } from "react";

function App() {
  //DISPATCH
  const { links, dispatch: linksDispatch } = useLinksContext();
  // AUTH
  const { user } = useAuthContext();

  // ALL LINKS
  useEffect(() => {
    const fetchLinks = async () => {
      const response = await fetch("/api/links");
      const json = await response.json();

      if (response.ok) {
        linksDispatch({ type: "SET_LINKS", payload: json });
      } else {
        console.log("error")
      }
    };

    fetchLinks();
  }, [linksDispatch]);



   // ACTIVE USER'S LINKS
   const [userLinks, setUserLinks] = useState([]);

   useEffect(() => {
     if (user && links) {
       (async () => {
         // Filter links based on user._id
         const userItems = links.filter((link) => link.user === user._id);
         setUserLinks(userItems);
       })();
     }
   }, [links, user]);

  // ACTIVE USER'S LINKS
  const [userActiveLinks, setUserActiveLinks] = useState([]);

  useEffect(() => {
    if (user && links) {
      (async () => {
        // Filter links based on user._id
        const userItems = links.filter((link) => link.user === user._id && link.active === true);
        setUserActiveLinks(userItems);
      })();
    }
  }, [links, user]);


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/dashboard"
            element={
              !user ? (
                <Login />
              ) : (
                <Dashboard user={user} userActiveLinks={userActiveLinks} userLinks={userLinks}/>
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
