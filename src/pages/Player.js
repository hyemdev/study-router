import { useEffect, useState } from "react";
import { Link,useNavigate,useOutletContext,useParams } from "react-router-dom";
import Youtube from "react-youtube";

const Player = () => {
    const {songs} = useOutletContext();
    const navigate = useNavigate();
    const { id } = useParams();
    const [title, setTitle] = useState();
    const [youtubeLink, setYoutubeLink] = useState();
    // 데이터를 가지고와서 1번만 세팅한다.
    useEffect(() => {
        // useParams에 담긴 값은 string이므로, 숫자값으로 변환해야함 = parseInt(id)
        const song = songs.find((item) => item.id === parseInt(id));
        if (song) {
            setTitle(song.title);
            setYoutubeLink(song.youtube_link);
        } else {
            alert("자료가 없습니다");
            navigate("/songlist");
        }
    }, []);
    return (
        <div className="modal modal-sheet d-block p-4 py-md-5">
            <div className="modal-dialog">
                <div className="modal-content rounded-4 shadow">
                    <div className="modal-header border-bottom-0">
                        <h1 className="modal-title fs-5">{title}</h1>
                        <Link to="/songlist" type="button" className="btn-close" />  
                    </div>
                    <div className="modal-body py-2 pb-5">
                        {/* react-youtube 라이브러리 활용 */}
                        <Youtube videoId={youtubeLink} opts={{ width: "100%" }} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Player;
