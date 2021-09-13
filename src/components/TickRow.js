export default function TickRow(props) {
  const object = props.object;
  const index = props.index;
  const name = index + "0";
  const value = index + "1";
  return (
    <tr key={index}>
      <td key={name} className="cryptocell">
        {object[0]}
      </td>
      <td key={value} className="cryptocell">
        {object[1]}
      </td>
    </tr>
  );
}
