export default function Discussion({ posts }) {
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
                  <h2 className="discussion__title">
                    <a href={discussion.url}>{discussion.title} </a>
                  </h2>
                  <div className="discussion__information">
                    {discussion.author} /{discussion.createdAt.slice(0, 10)}
                  </div>
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
