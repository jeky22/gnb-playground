// import logo from "./logo.svg";
import "./App.css";
import { contents } from "./data/contents";
console.log(contents);

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
    <div className="container">
      <div id="gnb">
        {data.map((item, index) => (
          <ul key={index}>{List(item, index === lastIndex ? 1 : 0)}</ul>
        ))}
      </div>
    </div>
  );
}

export default App;
