import { gnbData } from "../assets/data/gnbData";
import { MdSearch } from "react-icons/md";
import { VscBell, VscMenu } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import Lnb from "./Lnb";
import Dropbox from "./Dropbox";
import "../assets/css/Gnb.css";

function Gnb() {
  const [hover, setHover] = useState(-1);
  const [clicked, setClicked] = useState(-1);
  const [dropbox, setDropbox] = useState(false);

  function handleGnbHover(param) {
    setHover(param);
  }
  function handleGnbClick(param) {
    setClicked(param);
  }

  return (
    <>
      <nav onMouseLeave={() => handleGnbHover(-1)}>
        <div className="container" id="gnb">
          <div className="image-container">
            <img src="/img/wanted-logo.png" alt="logo" />
          </div>
          <ul>
            {gnbData.map((item, index) => (
              <li
                className={
                  index === hover ? "hover" : index === clicked ? "clicked" : ""
                }
                onClick={() => handleGnbClick(index)}
                onMouseEnter={() => handleGnbHover(index)}
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
          <aside>
            <div>
              <MdSearch size={22} />
            </div>
            <div className="new-badge">
              <VscBell size={22} />
            </div>
            <div id="menu-icon" onClick={() => setDropbox(true)}>
              <VscMenu size={22} />
            </div>
            <div className="new-badge">
              <CgProfile size={22} />
            </div>
            <div className="partition-vertical"></div>
            <div className="btn">기업서비스</div>
          </aside>
        </div>
        <Lnb hover={hover} />
      </nav>
      <Dropbox dropbox={dropbox} setDropbox={() => setDropbox(false)} />
      <div className={hover === 1 ? "show" : ""} id="dim"></div>
    </>
  );
}

export default Gnb;
