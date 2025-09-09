import React from "react";

export default function FormattedDate({ date }) {
  let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let day = days[date.getDay()];
  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");

  return (
    <span>
      {day} {hours}:{minutes}
    </span>
  );
}
