import { Link } from "react-router-dom";

const SongList = ({ songs }) => {
    console.log(songs);
    const list = songs.map((item) => {
        // retur()는 jsx html을 만들려고 한다는 의도
        return (
            <li className="list-group-item" key={item.id}>
                <Link to={`/songlist/${item.id}`} style={{ textDecoration: "none" }}>
                    {item.title} - {item.musician}
                </Link>
            </li>
        );
    });
    return (
        <>
            <div className="card card-body">
                <h3>Songlist</h3>
                <ul className="list-group">{list}</ul>
            </div>
        </>
    );
};
export default SongList;