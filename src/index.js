import React, { Component } from "react";

export default function({ message = "Michigan Wolverines" }) {
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
}
