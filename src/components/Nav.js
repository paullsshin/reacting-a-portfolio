import "../App.scss";
import Profile from "../images/placeholder.jpg";
import Header from "./Header";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="home-link">
        <ul>
        <img src={Profile} className="profile-pic" alt="profile-pic" />
        <CustomLink href="/Home" className="homepage">
          Home
        </CustomLink>
        </ul>
      </div>
      <Header />
      <ul>
        {/* <CustomLink href="/Home">Home</CustomLink> */}
        <CustomLink href="/About">About</CustomLink>
        <CustomLink href="/Portfolio">Portfolio</CustomLink>
        <CustomLink href="/Resume">Resume</CustomLink>
        <CustomLink href="/Contact">Contact</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;
  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
}
