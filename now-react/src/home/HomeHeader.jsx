import Logo from "../img/Logo.png";
export default function HomeHeader() {
  return (
    <header className="header-home">
      <img className="selfie" alt="NowMusic" src={Logo}></img>
      <h1 className="title-home">NowMusic</h1>
    </header>
  );
}
