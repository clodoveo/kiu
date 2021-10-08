import { useQuery } from "react-query";

const getLabels = async (postId) => {
  const res = await fetch("http://localhost:3000/labels");
  const data = await res.json();

  return data;
};

export default function useLabels() {
  return useQuery("labels", () => getLabels());
}
