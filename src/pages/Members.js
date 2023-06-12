/*
리액트 컴포넌트에서 이미지소스 불러오는 법
    1. src : 각각의 이미지를 import 한 다음 이미지 태그의 src속성에 적용(번거로움...)
        ex) import gogo from "./img/aaa.jpg"
        <img src={gogo} />

    2. public 폴더 사용 : public폴더 안쪽에 이미지를 배치 후, 
        2-1. process.env.PUBLIC_URL 구문 사용 (추천방법)
        2-2. public 폴더 절대경로를 구해서 직접 출력
*/

import { useNavigate } from "react-router";

const Members = ({ members }) => {
    //uri경로를 이동할 수 있는  Hook
    const navigate = useNavigate();
    //사용법 : navigate(경로, 옵션)
    const goHome = () => {
        // //navigate를 이용해서 정보를 전달하고 싶다.
        // // state옵션에 객체를 정의해서 전달 해 준다.
        // navigate("/", { state: { from: "/members", age: 30 } });
        navigate("/");
    };


    // location의 state 활용하기
    // const showInfo = (_who, _img) => {
    //     navigate("/about", { state: { singer: _who, photo: _img } });
    // };

    const path = process.env.PUBLIC_URL;
    const imgStyle = {
        width: 90,
        height: 80,
    };
    // 반복문 : .map은 새로운 배열을 만들어준다. (횟수만큼 반복함)
    const list = members.map((item, index) => {
        return (
            // jsx에서는 반복문 사용 시 key = unique ID가 있어야 한다.
            <div key={index} className="col-6 col-md-4 col-lg-3">
                <img
                    src={`${path}/${item.photo}`}
                    alt={item.name}
                    className="img-thumnail"
                    style={imgStyle}
                />
                <br />
                <h5>{item.name}</h5>
                <br />
                <br />
            </div>
        );
    });
    return (
        <>
            <div className="card card-body">
                <h3>members</h3>
                <div className="Container">
                    <div className="row">{list}</div>
                </div>
                <button className="btn btn-secondary" onClick={goHome}>
                    HOME
                </button>
            </div>
        </>
    );
};
export default Members;
