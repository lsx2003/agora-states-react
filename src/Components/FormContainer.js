export default function FormContainer() {
  async function registerDiscussion(event) {
    const date = new Date();
    const url = "http://localhost:4000/";
    await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        createdAt: date,
        updatedAt: "2022-04-25T07:45:22Z",
        title: "1",
        url: "",
        author: "3",
        avatarUrl:
          "https://w.namu.la/s/59bbf73b123d0f9f693be3c3de9506b24a1f2a3067b4ffd0207a3a08eee32d750ebf1ca3e33084aa3bbcd6916bd0a8a187cc4556b87fa269c25f1a7ff3ea279f1e372d23aa0a6eee8d5932c70d5dac0ee6248176cfc2aae042142bb82581200a72bf9bdf0544a56695b6e3a3fc8ebd7f",
      }),
    });
    await window.location.replace("/");
  }

  return (
    <section className="form__container">
      <div className="form__input--wrapper">
        <div className="form__input--name">
          <label htmlFor="name">ID를 입력하세요. </label>
          <input ype="text" id="name" required />
        </div>
        <div className="form__input--title">
          <label htmlFor="name2">제목을 입력하세요. </label>
          <input type="text" id="name2" required />
        </div>
        <div className="form__textbox">
          <label htmlFor="story">질문 내용을 입력하세요. </label>
          <textarea id="story" required></textarea>
        </div>
        <div className="form__submit">
          <input
            onClick={registerDiscussion}
            className="'submit"
            type="submit"
            value="작성하기"
          />
        </div>
      </div>
    </section>
  );
}
