import HelpersCard, {
  HelpersCardInfo,
  formatCountTags,
} from "@/components/helpers/Card";
import { useFetch } from "@/lib/utils";
import { useState, useEffect } from "react";
import "@/style/index.css";
import HelpersSkeleton from "@/components/helpers/Skeleton";
import TagFilter from "@/components/helpers/TagFilter";
import { Pagination } from "@nextui-org/react";
const limit = 8;
function Helpers() {
  const [data, setData] = useState<HelpersCardInfo[]>([]);
  const [renderData, setRanderData] = useState<HelpersCardInfo[]>([]);
  const [countTags, setCountTags] = useState<Record<string, number>>({});
  const [page, setPage] = useState(0);
  useEffect(() => {
    useFetch<HelpersCardInfo[]>("/data.json").then((res) => {
      setData(res);
      setRanderData(res);
      setCountTags(formatCountTags(res));
    });
  }, []);
  function set(value: string) {
    if (value === "All") {
      setRanderData(data);
    } else setRanderData(data.filter((item) => item.data.tags.includes(value)));
  }
  function changePagination(number: number) {
    setPage(number - 1);
  }
  function getTotalPages() {
    return Math.ceil(renderData.length / limit);
  }
  return (
    <>
      <div className="flex gap-2">
        <TagFilter
          countTags={countTags}
          onChildDataChange={(value) => set(value)}
        />
        {getTotalPages() && (
          <Pagination
            showControls
            total={getTotalPages()}
            initialPage={1}
            page={page + 1}
            onChange={changePagination}
          />
        )}
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {!data.length && <HelpersSkeleton />}
        {renderData.slice(page, page + 1 * limit).map((item, index) => {
          return <HelpersCard value={item} key={index} />;
        })}
      </div>
    </>
  );
}

export default Helpers;
