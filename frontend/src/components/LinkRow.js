import React, { useState } from "react";
import EditLinkRow from "./EditLinkRow";
import NormalLinkRow from "./NormalLinkRow";

const LinkRow = ({ link, user }) => {
  const [isEdit, setIsEdit] = useState(false);

  // Callback function to update isEdit
  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  //EDIT LOGIC
  return (
    <>
      {isEdit ? (
        <EditLinkRow
          link={link}
          user={user}
          isEdit={isEdit}
          toggleIsEdit={toggleIsEdit}
        />
      ) : (
        <NormalLinkRow link={link} user={user} />
      )}
    </>
  );
};

export default LinkRow;
