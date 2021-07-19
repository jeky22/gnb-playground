import { dropboxData } from "../assets/data/dropboxData";
import { VscChromeClose } from "react-icons/vsc";
import "../assets/css/Dropbox.css";

function Dropbox({ setDropbox, dropbox }) {
  return (
    <div id="active-container" className={dropbox ? "show" : ""}>
      <div className="image-container ">
        <img src="/img/wanted-logo.png" alt="logo" />
        <VscChromeClose size={22} onClick={setDropbox} />
      </div>
      <ul>
        {dropboxData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dropbox;
