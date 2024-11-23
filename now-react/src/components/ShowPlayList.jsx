import { useParams } from "react-router-dom";
import Iframe from "../atom/Iframe";
import playList from "../PlayLists.json";

export default function ShowPlayList() {
  const { mood, emotion } = useParams();
  const [data] = playList[mood].emotion.filter((item) => item[1] === emotion);
  console.log(data);
  return (
    <div className="iframe-wrapper">
      <div className="wrap_desc">
        <div className="list_descript">{data[0]}</div>
      </div>
      <Iframe url={data[2]} />
    </div>
  );
}
