import { lnbData } from "../assets/data/lnbData";
import "../assets/css/Lnb.css";

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

function Lnb({ hover }) {
  const lnblastIndex = lnbData.length - 1;
  console.log(hover);
  return (
    <>
      <div className={hover === 1 ? "container show" : "container "} id="lnb">
        {lnbData.map((item, index) => (
          <ul key={index}>{LnbList(item, index === lnblastIndex ? 1 : 0)}</ul>
        ))}
      </div>
      <div className="partition-horizontal"></div>
    </>
  );
}

export default Lnb;
