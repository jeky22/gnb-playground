// import logo from "./logo.svg";
import "./App.css";
import { contents } from "./data/contents";
import { MdSearch } from "react-icons/md";
import { VscBell } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";

function List(list, isBold = 1) {
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

function App() {
  const data = contents;
  const lastIndex = contents.length - 1;

  return (
    <div>
      <div className="container" id="gnb">
        <div className="image-container">
          <img src="/img/wanted-logo.png" alt="logo" />
        </div>
        <ul>
          <li>탐색</li>
          <li>커리어 성장</li>
          <li>직군별 연봉</li>
          <li>이력서</li>
          <li>매치업</li>
          <li>프리랜서</li>
          <li>Ai 합격예측</li>
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
      <div className="partition-horizontal"></div>
      <div className="container" id="lnb">
        {data.map((item, index) => (
          <ul key={index}>{List(item, index === lastIndex ? 1 : 0)}</ul>
        ))}
      </div>
      <div></div>
    </div>
  );
}

export default App;
