// import logo from "./logo.svg";
import "./App.css";
import { lnbData } from "./data/lnbData";
import { gnbData } from "./data/gnbData";
import { MdSearch } from "react-icons/md";
import { VscBell, VscMenu } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";

function LnbList(list, isBold = 1) {
  return list.map((item, index) => (
    <li
      className={
        isBold === 1 || isBold === index
          ? "bolder"
          : item === "더보기"
          ? "more"
          : ""
      }
      key={index}
    >
      {item}
    </li>
  ));
}

function App() {
  const lnblastIndex = lnbData.length - 1;
  const [hover, setHover] = useState(-1);
  const [clicked, setClicked] = useState(-1);

  function handleGnbHover(param) {
    setHover(param);
  }
  function handleGnbClick(param) {
    // console.log(param);
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
            <div>
              <VscMenu size={22} />
            </div>
            <div className="new-badge">
              <CgProfile size={22} />
            </div>
            <div className="partition-vertical"></div>
            <div className="btn">기업서비스</div>
          </aside>
        </div>
        <div className={hover === 1 ? "container show" : "container "} id="lnb">
          {/* <div className="container show" id="lnb"> */}
          {lnbData.map((item, index) => (
            <ul key={index}>{LnbList(item, index === lnblastIndex ? 1 : 0)}</ul>
          ))}
        </div>
        <div className="partition-horizontal"></div>
        <div></div>
      </nav>
      <div className={hover === 1 ? "show" : ""} id="dim"></div>
      <section>
        <h2>본문</h2>
        <h2>본문</h2>
        <h2>본문</h2>
        <h2>본문</h2>
        <h2>본문</h2>
        <h2>본문</h2>
        <h2>본문</h2>
      </section>
    </>
  );
}

export default App;
