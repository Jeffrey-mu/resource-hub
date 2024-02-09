import ResourcesList from "@/components/Awesome/List";
import { useParams } from "react-router-dom";
export default function App() {
  let { type } = useParams();
  return (
    <>
      <ResourcesList render_data={"awesome-" + type} />
    </>
  );
}
