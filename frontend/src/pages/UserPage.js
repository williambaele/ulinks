import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";

const UserPage = ({ user, links }) => {
  // LOADER LOGIC
  const [isLoaded, setIsLoaded] = useState(false);
  // USER LINKS FETCH
  const [userLinks, setUserLinks] = useState([]);
  useEffect(() => {
    if (links) {
      (async () => {
        // Filter links based on user._id
        const userItems = links.filter(
          (link) => link.user === user._id && link.active === true
        );
        setIsLoaded(true);
        setUserLinks(userItems);
      })();
    }
  }, []);

  //CONDITONAL RENDERING
  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <div className="h-screen bg-[#f3f3f1] px-4 py-20 flex justify-center flex-col">
      <div className="container h-full mx-auto bg-red-100">
        <div className="flex items-center justify-center bg-green-300 h-1/6">
          <h1 className="text-3xl font-bold text-center">@{user.pseudo}</h1>
        </div>
        <div className="bg-orange-500 h-5/6">
          <ul>
            {userLinks.map((link, index) => (
              <li key={index._id}>{link.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
