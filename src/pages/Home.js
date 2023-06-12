import { useLocation } from "react-router";

const Home = () => {
    const location = useLocation();
    const state=location.state;

    // 1. state값이 없는 경우에 대한 처리
    // let fromData = "/";
    
    // 2. state에 from 의 속성이 있는지도 검사
    // if(state) {
    //     fromData = state.from ? state.from : "/";
    // }

    return (
        <>
            <div className="card card-body">
                <h3>Home</h3>
            </div>
        </>
    );
};
export default Home;
