

import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import * as dayjs from 'dayjs'
export interface ResourceCardType {
  name: string,
  data: {
    name: string,
    desc: string,
    url: string,
    tags: string[],
    maintainers: string[],
    addedAt: string
  }
}
export interface ResourceCardrops {
  value: ResourceCardType
}
export default function ResourceCard({ value }: ResourceCardrops) {
  const { name, desc, url, tags, maintainers, addedAt } = value.data;
  return (
    <>
      <div className=" bg-white p-2 delay-100 transition-all hover:scale-105 delay-100">
        <Card className="w-[300px] justify-between">
          <CardBody>
            <div className="w-full flex">
              <Image
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

                {dayjs(addedAt).format('MMM')}
                &nbsp;
                {dayjs(addedAt).format('YYYY')}
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="flex-1 py-2">
            <p className="text-stone-600 line-clamp-2 h-[44px]" title={desc}>{desc}
            </p>
          </CardBody>
          <Divider />
          <CardBody>
            <div className="flex gap-3  py-2">
              {
                tags.map(item => {
                  return <span className="px-2 bg-slate-100 text-blue-950"> {item} </span>
                })
              }
            </div>
          </CardBody>
          <Divider />

          <CardFooter className="h-10  py-2 shrink-0 text-teal-700">
            <Link
              className="flex gap-1"
              isExternal
              showAnchorIcon
              href={url}
            > visit a website
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
