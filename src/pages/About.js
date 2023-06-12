import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const About = ({ title }) => {
    // 웹브라우저의 라우터를 강제로 변경하려면 useNavigate()를 활용해보자
    const navigate = useNavigate();
  
    // useSearchParams : ?a=1&b=2 쿼리 문자열 활용하기
    // useLocation : ?a=1&b=2 쿼리 문자열 활용하기
    const location = useLocation();

    //useLocation === window.location객체
    //useSearchParams는 쿼리스트링의 정보를 더 쉽게 취득할 수 있다(수월하게 쿼리 추출 가능)
    const [searchParams, setSearchParams] = useSearchParams();

    // 현재페이지
    const [page, setPage] = useState(1);
    useEffect(() => {
        // 문자열을 숫자로 바꿔줌
        const strPage = parseInt(searchParams.get("page"));

        //NaN !== NaN 
        //isNaN(값) : NaN인지 아닌지 검사
        //isNaN(값)의 결과가 true라면 값이 숫자가 아니고, 결과가 false라면 값이 숫자다.
        setPage(!isNaN(strPage) ? strPage : 1);
    }, [searchParams]);

    const goPrev = () => {
        if (page > 0) {
            // page가 0보다 클 때, 웹브라우저의 쿼리 스트링을 변경해보자
            // http://localhost:3000/about + ?page={변경할 객체}
            navigate(window.location.pathname + `?page=${page - 1}&total=5`);
        }
    };
    const goNext = () => {
        if (page > 0) {
            navigate(window.location.pathname + `?page=${page + 1}&total=5`);
        }
    };
    // const goHome = () => {
    //   //navigate를 이용해서 정보를 전달하고 싶다.
    //   // state옵션에 객체를 정의해서 전달 해 준다.
    //   navigate("/", { state: { from: "/about", age: 20 } });
    // };

    // const goNaver = () => {
    //   window.open("http://www.naver.com")
    // };


    return (
        <>
            <div className="card card-body">
                <h3>About {title}</h3>
                <div>
                    {/* 목록 산출 및 제어하기 */}
                    <div className="m-2"> 현재 페이지 : {page}</div>
                    <button className="btn btn-secondary m-1" onClick={goPrev}>
                        prev
                    </button>
                    <button className="btn btn-secondary m-1" onClick={goNext}>
                        next
                    </button>
                    {/* <button className="btn btn-danger m-1" onClick={goHome}>
                        goHome
                    </button> */}
                    {/* <button className="btn btn-danger m-1" onClick={goNaver}>
                        goNaver
                    </button> */}
                </div>
            </div>
        </>
    );
};
export default About;
