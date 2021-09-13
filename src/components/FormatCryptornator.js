import React, { useEffect, useState } from "react";
import FetchExample from "./FetchExample";
import FormatTick from "./FormatTick";

export default function FormatCryptonator(props) {
  const hero = "https://cors-anywhere.herokuapp.com/";
  const text = "https://api.cryptonator.com/api/ticker/btc-usd";
  const raw = FetchExample({ url: hero + text });
  const formatted = FormatTick(raw);
  return <div>{formatted}</div>;
}
