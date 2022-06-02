import Link from "next/link";

function Nav() {
    return ( 
        <div className="container">
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
                        <span className="nav-home">
                            <a><b>00</b> HOME</a>
                        </span>
                    </Link>
                    <Link href="/destination">
                        <span className="nav-dest">
                            <a><b>01</b> DESTINATION</a>
                        </span>
                    </Link>
                    <Link href="/crew">
                        <span className="nav-crew">
                            <a><b>02</b> CREW</a>
                        </span>
                    </Link>
                    <Link href="/technology">
                        <span className="nav-tech">
                            <a><b>03</b> TECHNOLOGY</a>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
        </div>
     );
}

export default Nav;