import { AiFillHome } from "react-icons/ai";
import { RiFilePaper2Fill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { AiFillLeftCircle } from "react-icons/ai";

import { useState } from "react";

const AdminNav = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className={"adminNav" + open ? "open" : ""}>
      <AiFillLeftCircle
        className="navOpenCloseButton"
        onClick={setOpen(!open)}
      />

      <ul className="nav__items">
        <li className="nav__item">
          <AiFillHome />
        </li>
        <li className="nav__item">
          <RiFilePaper2Fill />
        </li>
        <li className="nav__item">
          <FaPencilAlt />
        </li>
        <li className="nav__item">
          <FiSettings />
        </li>
      </ul>
    </div>
  );
};

export default AdminNav;
