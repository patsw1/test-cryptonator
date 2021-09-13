import React, { useEffect, useState } from "react";

export default function FetchExample(props) {
  const url = props["url"];
  const [data, setData] = useState("");

  useEffect(() => {
    const headers = {
      method: "GET",
      mode: "cors",
      origin: "192.168.1.148:3000",
    };
    console.log("fetch " + url);
    fetch(url, headers)
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response.json();
        } else {
          console.log(response);
          throw new Error("response not OK");
        }
      })
      .then((data) => {
        //console.log("data");
        //console.log(data);
        setData(data);
      })
      .catch((error) => console.log(error));
  }, [url]);

  return data;
}
