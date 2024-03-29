import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <Button
      type="back"
      onClick={(e) => {
        navigate("/app/cities");
        e.preventDefault();
      }}
    >
      &larr; Back
    </Button>
  );
}
