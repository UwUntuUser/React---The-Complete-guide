export default function Logs({ turns }) {
  return (
    <ol className="log">
      {turns.map((turn) => (
        <li key={`${turn.coordinates.row} - ${turn.coordinates.column}`}>
          {turn.player} selected ${turn.coordinates.row}, $
          {turn.coordinates.column}
        </li>
      ))}
    </ol>
  );
}
