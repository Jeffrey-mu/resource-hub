import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Chip,
} from "@nextui-org/react";
import dayjs from "dayjs";
export interface HelpersCardInfo {
  name: string;
  data: {
    name: string;
    desc: string;
    url: string;
    tags: string[];
    maintainers: string[];
    addedAt: string;
  };
}
export interface HelpersCardrops {
  value: HelpersCardInfo;
}

export function formatCountTags(
  packageList: HelpersCardInfo[],
): Record<string, number> {
  const tagCount: Record<string, number> = {};
  tagCount["All"] = packageList.length;
  packageList.forEach((packageInfo) => {
    const { tags } = packageInfo.data;

    tags.forEach((tag) => {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    });
  });

  return tagCount;
}

export default function HelpersCard({ value }: HelpersCardrops) {
  const { name, desc, url, tags, addedAt } = value.data;

  function formatData(time: string, format: string): string {
    return dayjs(time).format(format);
  }
  return (
    <>
      <Card className="flex-shrink w-full">
        <CardBody>
          <div className="w-full flex">
            <Image
              isZoomed
              className="w-full h-full"
              alt="网站截图"
              radius="sm"
              loading="lazy"
              src={`https://tiny-helpers.dev/api/screenshot/?url=${url}&ratio=1`}
              fallbackSrc="https://via.placeholder.com/300x200"
            />
          </div>
        </CardBody>
        <Divider />
        <CardHeader className="flex gap-3 py-2">
          <div className="flex flex-col">
            <p className="text-md text-lg">{name}</p>
            <p className="text-small text-default-500">
              {`${formatData(addedAt, "MMM")} ${formatData(addedAt, "YYYY")}`}
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="line-clamp-2" title={desc}>
            {desc}
          </p>
        </CardBody>
        <Divider />
        <CardBody>
          <div className="flex gap-3">
            {tags.map((item) => {
              return (
                <Chip color="secondary" key={item}>
                  {" "}
                  {item}{" "}
                </Chip>
              );
            })}
          </div>
        </CardBody>
        <Divider />

        <CardFooter className="h-10 py-2 shrink-0">
          <Link
            className="flex gap-1 text-teal-700"
            isExternal
            showAnchorIcon
            href={url}
          >
            {" "}
            visit a website
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}
