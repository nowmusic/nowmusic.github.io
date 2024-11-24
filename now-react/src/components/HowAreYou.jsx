import Button from "../atom/Button";

export default function HowAreYou() {
  const conditions = {
    good: { path: "good", message: "좋아요" },
    normal: { path: "normal", message: "보통이에요" },
    bad: { path: "bad", message: "나빠요" },
  };
  return (
    <>
      <p className="first_ques">당신의 현재 기분은 어떤가요?</p>
      <div className="btn-wrapper">
        {Object.values(conditions).map((condition, i) => (
          <Button key={i} path={condition.path} message={condition.message} />
        ))}
      </div>
    </>
  );
}
