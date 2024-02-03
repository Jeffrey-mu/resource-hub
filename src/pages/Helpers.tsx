import HelpersCard, {
  HelpersCardInfo,
  formatCountTags,
} from "@/components/helpers/Card";
import { useFetch } from "@/lib/utils";
import { useState, useEffect } from "react";
import "@/style/index.css";
import HelpersSkeleton from "@/components/helpers/Skeleton";
import TagFilter from "@/components/helpers/TagFilter";
import { Card, CardBody, Pagination } from "@nextui-org/react";
import { useWindowScroll, useMediaQuery } from "@uidotdev/usehooks";
const limit = 8;
function Helpers() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const [, scrollTo] = useWindowScroll();
  const [data, setData] = useState<HelpersCardInfo[]>([]);
  const [renderData, setRanderData] = useState<HelpersCardInfo[]>([]);
  const [countTags, setCountTags] = useState<Record<string, number>>({});
  const [page, setPage] = useState(0);
  useEffect(() => {
    useFetch<HelpersCardInfo[]>("/data.json").then((res) => {
      setTimeout(() => {
        setData(res);
        setRanderData(res);
      }, 200);
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
    scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }
  function getTotalPages() {
    return Math.ceil(renderData.length / limit);
  }
  return (
    <>
      <div className="fixed z-30 bottom-5 w-full flex justify-center pointer-events-none">
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
          shadow="lg"
        >
          <CardBody>
            <div className="flex gap-2 flex-shrink-0 items-center rounded-xl shadow-sm pointer-events-auto">
              <TagFilter
                countTags={countTags}
                onChildDataChange={(value) => set(value)}
              />
              {getTotalPages() ? (
                <Pagination
                  loop
                  isCompact={isSmallDevice}
                  showControls
                  total={getTotalPages()}
                  initialPage={1}
                  page={page + 1}
                  onChange={changePagination}
                />
              ) : (
                <></>
              )}
            </div>
          </CardBody>
        </Card>
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
