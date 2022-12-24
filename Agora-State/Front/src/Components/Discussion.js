import { useCallback } from "react";
import { BsXCircleFill } from "react-icons/bs";
import Toggle from "./Toggle";

export default function Discussion({ posts }) {
  const deletehandler = async (event) => {
    const id = event.target.parentNode.parentNode.id;
    await fetch(`http://localhost:4000/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    });
    await window.location.replace("/");
  };
  useCallback(deletehandler, []);

  return (
    <>
      {posts.map((discussion) => {
        return (
          <section className="discussion__wrapper" key={discussion.id}>
            <ul className="discussions__container">
              <li className="discussion__container">
                <div className="discussion__avatar--wrapper">
                  <img
                    className="discussion__avatar--image"
                    src={discussion.avatarUrl}
                    alt="avatar of kimploo"
                  />
                </div>

                <div className="discussion__content">
                  <h2 className="discussion__title" id={discussion.id}>
                    <a href={discussion.url}>{discussion.title} </a>
                    <BsXCircleFill className="delete" onClick={deletehandler}>
                      {discussion.id}
                    </BsXCircleFill>
                    <Toggle></Toggle>
                    <div className="discussion__information">
                      {discussion.author} /{discussion.createdAt.slice(0, 10)}
                    </div>
                  </h2>
                </div>
                <div className="discussion__answered">
                  <p></p>
                </div>
              </li>
            </ul>
          </section>
        );
      })}
    </>
  );
}
