import HelpersCard, {
  HelpersCardInfo,
  formatCountTags,
} from "@/components/helpers/Card";
import { useFetch } from "@/lib/utils";
import { useState, useEffect } from "react";
import "@/style/index.css";
import HelpersSkeleton from "@/components/helpers/Skeleton";
import Tag from "@/components/helpers/TagFilter";

function Helpers() {
  const [data, setData] = useState<HelpersCardInfo[]>([]);
  const [renderData, setRanderData] = useState<HelpersCardInfo[]>([]);
  const [countTags, setCountTags] = useState<Record<string, number>>({});
  useEffect(() => {
    useFetch<HelpersCardInfo[]>("/data.json").then((res) => {
      setTimeout(() => {
        setData(res);
        setRanderData(res);
      }, 400);
      setCountTags(formatCountTags(res));
    });
  }, []);
  function set(value: string) {
    setRanderData(data.filter((item) => item.data.tags.includes(value)));
  }
  return (
    <>
      <Tag countTags={countTags} onChildDataChange={(value) => set(value)} />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {!data.length && <HelpersSkeleton />}
        {renderData.map((item, index) => {
          return <HelpersCard value={item} key={index} />;
        })}
      </div>
    </>
  );
}

export default Helpers;
