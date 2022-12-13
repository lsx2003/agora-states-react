import { useState } from "react";
import {
  BsFillHandThumbsUpFill,
  BsFillHandThumbsDownFill,
} from "react-icons/bs";

export default function Toggle() {
  const [like, setLike] = useState(0);
  const [hate, setHate] = useState(0);

  function likeHandler(event) {
    setLike(like + 1);
  }

  function hateHandler(event) {
    setHate(hate + 1);
  }

  return (
    <div className="toggle-wrapper">
      <BsFillHandThumbsUpFill
        className="toggle"
        onClick={likeHandler}
      ></BsFillHandThumbsUpFill>
      <div className="likeCount">{like}</div>
      <BsFillHandThumbsDownFill
        className="toggle"
        onClick={hateHandler}
      ></BsFillHandThumbsDownFill>
      <div className="hateCount">{hate}</div>
    </div>
  );
}
