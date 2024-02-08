import { Card, Skeleton } from "@nextui-org/react";
const array = new Array(20).join(",").split(",");

export default function ResourcesSkeleton() {
  return (
    <>
      {array.map((_, index) => {
        return (
          <Card key={index} className="w-full space-y-5 p-4" radius="lg">
            <Skeleton className="rounded-lg">
              <div className="h-[200px] rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="space-y-3">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-4/5 rounded-lg">
                <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-2/5 rounded-lg">
                <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
              </Skeleton>
              <Skeleton className="w-2/5 rounded-lg">
                <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
              </Skeleton>
              <Skeleton className="w-2/5 rounded-lg">
                <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
              </Skeleton>
            </div>
          </Card>
        );
      })}
    </>
  );
}
