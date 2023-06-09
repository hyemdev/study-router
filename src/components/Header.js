import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between">
                    {/* link는 html의 a태그로 변환 / to는 href로 변환 */}
                    <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <h3><i className="fa fa-music fa-lg"></i></h3>
                    </Link>

                    <ul className="nav col-12 col-lg-auto me-lg-0 mb-2 justify-content-center mb-md-0">
                        <li>
                            {/* NavLink는 a태그로 변환 isActive가 있어서 css 포커스 적용에 유용 */}
                            {/* isActive는 URL을 비교해서 routes의 path 경로와 같으면 isActive가 true */}
                            <NavLink
                                to="/"
                                className={({ isActive }) => {
                                    return isActive ? "nav-link px-2 text-success" : "nav-link px-2 text-white";
                                }}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) => {
                                    return isActive ? "nav-link px-2 text-success" : "nav-link px-2 text-white";
                                }}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/members" className={({ isActive }) => {
                                    return isActive ? "nav-link px-2 text-success" : "nav-link px-2 text-white";
                                }}>
                                Members
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/songlist" className={({ isActive }) => {
                                    return isActive ? "nav-link px-2 text-success" : "nav-link px-2 text-white";
                                }}>
                                Songlist
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};
export default Header;
