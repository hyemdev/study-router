import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const SongDetail = ({ songs }) => {
    // 페이지이동 Hook
    const navigate = useNavigate();

    // 주소표시줄에 기재된 URL에 전달된 parameter를 파악
    // 주소표시줄에 표현되는 형식 2가지
    // 1. parameter 형식 : /songs/1 ( /songs/:id )
    // 2. query String 형식 : /songs?id=1&title=안녕
    const { id } = useParams();
    // id와 같은 1개의 객체를 songs에서 추출해서 화면을 갱신

    // 화면갱신을 위해 state를 활용
    const [title, setTitle] = useState();
    const [musician, setMusician] = useState();
    const [youtube_link, setLink] = useState();

    // 컴포넌트 마운트 되기 전에 처리한다. useEffect(()=>{},[])
    // 데이터 로딩 및 처리 시 좋은위치
    useEffect(() => {
        //id를 이용해서 데이터에서 검색한 결과를 출력한다.
        //배열.find : 조건이 true인 요소를 리턴한다.
        //배열.find : 여러개가 true일 때 처음 true만 리턴한다
        //URL Parameters(url:id)는 무조건 문자열이므로 숫자로 변경해야함.parseInt()
        // 목록의 id속성과 params로 전달된 ID 같다면  True
        // : item.id = parseInt(id)
        const song = songs.find((item) => item.id === parseInt(id));

        // 검색이 되지 않을 경우를 위한 처리
        if (song) {
            // 조금 더 안전하게 처리를 해보자
            // song.title이 일치하면 그대로 반환하지만, 일치하지않으면 빈문자열을 반환하자
            setTitle(song.title ? song.title : "");
            setMusician(song.musician ? song.musician : "");
            setLink(song.youtube_link ? `https://m.youtube.com/watch?v=${song.youtube_link}` : "");
        } else {
            alert("자료를 찾을 수 없습니다.");
            navigate("/songlist");
        }
    }, []);
    return (
        <div className="mt-5">
            <h4>{title}</h4>
            <p>Original musician : {musician} </p>
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
