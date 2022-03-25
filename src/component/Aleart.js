export default function Aleart(props) {
  return (
    props.aleart && (
      <div
        className={`alert alert-${props.aleart.status} alert-dismissible fade show`}
        role="alert"
        style={{position : "fixed"}}
      >
        <strong>{props.aleart.status.toUpperCase()} </strong> {props.aleart.msg}
      </div>
    )
  );
}
