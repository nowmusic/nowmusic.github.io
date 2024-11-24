import { useParams } from "react-router-dom";
import Button from "../atom/Button";
import playList from "../PlayLists.json";

export default function ChooseYourEmotion() {
  const { mood } = useParams();
  const data = playList[mood];
  return (
    <>
      <div className="btn-wrapper">
        {Object.values(data.emotion).map((condition, i) => (
          <Button key={i} path={condition[1]} message={condition[0]} />
        ))}
      </div>
    </>
  );
}
