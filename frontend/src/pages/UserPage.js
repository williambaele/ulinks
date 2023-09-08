import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import ClientRow from "../components/ClientRow";
import { Link } from "react-router-dom";

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
  if (isLoaded === false) {
    return <Loader />;
  }

  return (
    <div className="h-screen bg-[#f3f3f1] px-4 py-20 flex justify-center flex-col">
      <div className="container h-full mx-auto ">
        <div className="flex items-center justify-center h-1/6">
          <h1 className="text-3xl font-bold text-center">@{user.pseudo}</h1>
        </div>
        <div className="flex flex-col gap-2 mx-auto overflow-scroll md:w-1/2 h-4/6">
          {userLinks.map((link) => (
            <ClientRow link={link} key={link._id} />
          ))}
        </div>
        <div className="flex items-center justify-center h-1/6">
          <Link to="/">
            <h1 className="text-xl font-bold text-center">uLinks</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
