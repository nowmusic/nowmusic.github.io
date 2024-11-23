import Logo from "../img/Logo.png";
export default function HomeHeader() {
  return (
    <header class="header-home">
      <img class="selfie" alt="NowMusic" src={Logo}></img>
      <h1 class="title-home">NowMusic</h1>
    </header>
  );
}
