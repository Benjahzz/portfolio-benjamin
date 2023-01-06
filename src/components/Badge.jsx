
export default function Badge({ label, content }) {
  return (
    <div className="badge">
      <div className="wrapper-content">
        <p className="badge__icon">{label}</p>
        <div className="badge__content">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
