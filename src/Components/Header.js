import logo from "../logo.png";

export default function header() {
  return (
    <header>
      <a href="/">
        <img className="logo" src={logo} alt="logo" />
        <h1 id="title">AGORA STATES</h1>
      </a>
      <h1 id="login">로그인</h1>
    </header>
  );
}
