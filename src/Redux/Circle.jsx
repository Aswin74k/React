import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "./colorSlice";

export default function Circle() {
  const dispatch = useDispatch();
  const { currentColor, colors } = useSelector((state) => state.color);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <div
        style={{
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          backgroundColor: currentColor,
          margin: "auto",
          transition: "0.3s",
        }}
      ></div>

      <select
        style={{
          marginTop: "20px",
          padding: "10px",
          fontSize: "16px",
          cursor: "pointer",
        }}
        value={currentColor}
        onChange={(e) => dispatch(changeColor(e.target.value))}
      >
        {colors.map((c) => (
          <option key={c} value={c}>
            {c.charAt(0).toUpperCase() + c.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}