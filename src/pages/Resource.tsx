import ResourceCard, {
  ResourceCardInfo,
  formatCountTags,
} from "@/components/resource/Card";
import { useFetch } from "@/lib/utils";
import { useState, useEffect } from "react";
import "@/style/index.css";
import ResourceSkeleton from "@/components/resource/Skeleton";

function Game() {
  const [data, setData] = useState<ResourceCardInfo[]>([]);
  // const [renderData, setRanderData] = useState<ResourceCardInfo[]>([])
  const [countTags, setCountTags] = useState<Record<string, number>>({});
  const array = new Array(20).join(",").split(",");
  useEffect(() => {
    useFetch<ResourceCardInfo[]>("/data.json").then((res) => {
      setTimeout(() => {
        setData(res);
      }, 400);
      setCountTags(formatCountTags(res));
      console.log(countTags);
    });
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {!data.length &&
          array.map(() => {
            return <ResourceSkeleton />;
          })}
        {data.map((item) => {
          return <ResourceCard value={item} />;
        })}
      </div>
    </>
  );
}

export default Game;
