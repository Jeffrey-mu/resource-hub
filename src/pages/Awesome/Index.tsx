import ResourcesList from "@/components/Awesome/List";
import { useParams } from "react-router-dom";
export default function App() {
  const { type } = useParams();
  return (
    <>
      <ResourcesList render_data={"awesome-" + type} />
    </>
  );
}
