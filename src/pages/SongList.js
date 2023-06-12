import { Link, Outlet } from "react-router-dom";

const SongList = ({ songs }) => {
    const list = songs.map((item) => {
        // return()는 jsx html을 만들려고 한다는 의도
        return (
            <li className="list-group-item" key={item.id}>
                <Link to={`/songlist/${item.id}`} style={{ textDecoration: "none" }}>
                    {item.title} - {item.musician}
                    {/* font awesome 삽입*/}
                    <span className="float-end badge bg-secondary">
                        <i className="fa fa-play"></i>
                    </span>
                </Link>
            </li>
        );
    });

    return (
        <>
            <div className="card card-body">
                <h3>Songlist</h3>
                <ul className="list-group">{list}</ul>
                {/* outlet : 중첩된 route 삽입위치 : context 활용*/}
                <Outlet context={{ songs }} />
            </div>
        </>
    );
};
export default SongList;
