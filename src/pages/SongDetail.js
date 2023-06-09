import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const SongDetail = ({ songs }) => {
    // 페이지이동 Hook
    const navigate = useNavigate();
    const { id } = useParams();
    // id와 같은 1개의 객체를 songs에서 추출해서 화면을 갱신
    // 화면갱신을 위해 state를 활용
    const [title, setTitle] = useState();
    const [musician, setMusician] = useState();
    const [youtube_link, setLink] = useState();

    // 컴포넌트 마운트 되기 전에 처리한다.
    // 데이터 로딩 및 처리
    useEffect(() => {
        //id를 이용해서 데이터에서 검색한 결과를 출력한다.
        //배열.find : 조건이 true인 요소를 리턴한다.
        //배열.find : 여러개가 true일 때 처음 true만 리턴한다
        // url:id는 무조건 문자열이므로 숫자로 변경해야함.parseInt()
        const song = songs.find((item) => item.id === parseInt(id));

        // 검색이 되지 않을 경우를 위한 처리
        if (song) {
            setTitle(song.title);
            setMusician(song.musician);
            setLink(`https://m.youtube.com/watch?v=${song.youtube_link}`);
        } else {
            alert("자료를 찾을 수 없습니다.");
            navigate("/songlist");
        }
    }, []);
    return (
        <div className="mt-5">
            <h4>{title}</h4>
            <p>Original musician : {musician}</p>
            <p>
                {/* 유튜브 보여주기(새창열기) */}
                <a href={youtube_link} target="_blank">
                    view youtube
                </a>
            </p>
            <Link to="/songlist">return</Link>
        </div>
    );
};
export default SongDetail;
