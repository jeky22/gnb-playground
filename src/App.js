// import logo from "./logo.svg";
import "./App.css";
import { lnbData } from "./data/lnbData";
import { gnbData } from "./data/gnbData";
import { MdSearch } from "react-icons/md";
import { VscBell } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";

function LnbList(list, isBold = 1) {
  return list.map((item, index) =>
    isBold === 1 || isBold === index ? (
      <li className="bolder" key={index}>
        {item}
      </li>
    ) : (
      <li key={index}>{item}</li>
    )
  );
}
function gnbList(list, func, index) {
  return <li onMouseEnter={func(index)}>{list}</li>;
}

function App() {
  const lnblastIndex = lnbData.length - 1;
  const [collapse, setCollapse] = useState(-1);
  // const [collapse, setCollapse] = useState(-1);

  function handleHover(obj) {
    console.dir(obj);
    setCollapse(obj);
  }

  return (
    <div onMouseLeave={handleHover}>
      <div className="container" id="gnb">
        <div className="image-container">
          <img src="/img/wanted-logo.png" alt="logo" />
        </div>
        <ul>
          {gnbData.map((item, index) => gnbList(item, handleHover, index))}
        </ul>
        <aside>
          <div>
            <MdSearch size={22} />
          </div>
          <div>
            <VscBell size={22} />
          </div>
          <div className>
            <CgProfile size={22} />
          </div>
          <div className="partition-vertical"></div>
          <div className="btn">기업서비스</div>
        </aside>
      </div>
      <div
        className={collapse === 0 ? "container show" : "container "}
        id="lnb"
      >
        {lnbData.map((item, index) => (
          <ul key={index}>{LnbList(item, index === lnblastIndex ? 1 : 0)}</ul>
        ))}
      </div>
      <div className="partition-horizontal"></div>
      <div></div>
    </div>
  );
}

export default App;
