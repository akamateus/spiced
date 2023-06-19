import logo from "../img/logo.jpg";

export function Logo({ src }) {
  return <img className="round-image" src={logo} alt={src} />;
}
