import TickRow from "./TickRow";
export default function TickTable(props) {
  const rows = [];
  if (typeof props === "object") {
    var objects = Object.entries(props);
    console.log("objects");
    console.log(objects);
    const result = objects.map((object, i) => {
      const result = TickRow({ object: object, index: i });
      //console.log(object);
      //console.log(i);
      //console.log(result);
      rows.push(result);
    });
  } else {
    console.log("props is not an object: " + typeof props);
  }

  return (
    <div>
      <table className="cryptotable">
        <tbody className="cryptotbody">{rows}</tbody>
      </table>
    </div>
  );
}
