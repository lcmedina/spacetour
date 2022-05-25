import Image from "next/image";
import logo from "../public/assets/logo.svg"
import Link from "next/link";

function Nav() {
    return ( 
        <div className="nav">
            <img
                src="/assets/logo.svg"
                alt="logo"
                className="logo"
            />
            <span className="navline" />
            <div className="navbg">
                <div className="navlinks">
                    <Link href="/">
                        <a className="nav-home"><b>00</b> HOME</a>
                    </Link>
                    <Link href="/destination">
                        <a className="nav-dest"><b>01</b> DESTINATION</a>
                    </Link>
                    <Link href="/crew">
                        <a className="nav-crew"><b>02</b> CREW</a>
                    </Link>
                    <Link href="/technology">
                        <a className="nav-tech"><b>03</b> TECHNOLOGY</a>
                    </Link>
                </div>
            </div>
        </div>
     );
}

export default Nav;