import { useState } from "react";
import background from "../bg.gif";
import FormContainer from "./FormContainer";

export default function MainSection() {
  const [isVisiable, setViisiable] = useState(false);

  const clickHandler = (e) => {
    if ((e.className = "askBtn")) {
      setViisiable(!isVisiable);
    }
  };

  return (
    <section className="main__sction">
      <img className="bgvideo" src={background} alt="background" />
      <h1 className="content">
        궁금한 것이 있다면
        <br />
        무엇이든 질문하세요!!
        <br />
        <button onClick={clickHandler} className="askBtn">
          지금 질문하기
        </button>
      </h1>
      {isVisiable ? <FormContainer /> : <></>}
    </section>
  );
}
