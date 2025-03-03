export default function TimerChallange({ title, targetTime }) {
  
  
  
  return (
    <section className="challange">
      <h2>{title}</h2>
      <p className="challange-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button>Start Challenge</button>
      </p>
      <p className="">Tme is running... / Timer inactive</p>
    </section>
  );
}
