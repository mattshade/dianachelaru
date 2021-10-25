import { faInfoCircle, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
  return (
    <>
  <div className="navvy">
    <a href="/">
      <h1 className="title">
        diana chelaru
      </h1>
    </a>
    <span className="navItems">
    <a href="/about">
      <FontAwesomeIcon title="about" className="icon" width={20} icon={faInfoCircle} />
    </a>
    <a href="/signup">
      <FontAwesomeIcon title="sign up" className="icon" width={20} icon={faUserPlus} />
    </a>
    </span>
    </div>
    <style jsx global>{`
    .navItems {
      padding-top: 7px;
    }
    .navvy {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .navvy a {
      text-decoration: none;
      color: black;
      opacity: 1;
      -webkit-transition: all .2s ease-in-out;
      -moz-transition: all .2s ease-in-out;
      transition: all .2s ease-in-out;
    }
    .navvy a:hover {
      opacity: .6;
    }
    .icon {
      margin-left: 5px;
    }`
    }</style>
  </>
  )
}
