import TickRow from "./TickRow";
import TickTable from "./TickTable";

export default function FormatTick(props) {
  console.log(props);
  const ticker = props.ticker;
  console.log(typeof ticker);
  console.log(ticker);

  for (const name in props) {
    const value = props[name];
    console.log(`props ${name}: ${value}`);
  }

  for (const name in ticker) {
    const value = ticker[name];
    console.log(`ticker ${name}: ${value}`);
  }

  return TickTable(ticker);
}
