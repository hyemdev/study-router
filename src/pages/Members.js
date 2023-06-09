
/*
  리액트 컴포넌트에서 이미지소스 불러오는 법
  1. src : 각각의 이미지를 import 한 다음 이미지 태그의 src속성에 적용(번거로움...)
      ex) import gogo from "./img/aaa.jpg"
        <img src={gogo} />

  2. public 폴더 사용 : public폴더 안쪽에 이미지를 배치 후, 
    2-1. process.env.PUBLIC_URL 구문 사용 (추천방법)
    2-2. public 폴더 절대경로를 구해서 직접 출력
*/

const Members = ({ members }) => {
  const path= process.env.PUBLIC_URL;
    const imgStyle = {
        width: 90,
        height: 80,
    };
    const list = members.map((item, index) => {
        return (
            <div key={index} className="col-6 col-md-4 col-lg-3">
                <img src={`${path}/${item.photo}`} alt={item.name} className="img-thumnail" style={imgStyle} />
                <br />
                <h5>{item.name}</h5>
                <br />
                <br />
            </div>
        );
    });
    console.log(members);
    return (
        <>
            <div className="card card-body">
                <h3>members</h3>
                <div className="Container">
                    <div className="row">{list}</div>
                </div>
            </div>
        </>
    );
};
export default Members;
