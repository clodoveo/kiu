import React from "react";
import useLabels from "../hooks/useLabels";

export default function GuideSelector() {
  const { data: label } = useLabels();

  return <div>{label?.btnVideorTitle}</div>;
}
