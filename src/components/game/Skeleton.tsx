import { Card, Skeleton } from "@nextui-org/react";
const array = new Array(30).join(",").split(",");
export default function GameSkeleton() {
  return (
    <>
      <h2 className="my-3 font-black text-2xl">
        <Skeleton className="w-[200px] rounded-lg">
          <div className="h-3 w-[200px] rounded-lg bg-default-200"></div>
        </Skeleton>
      </h2>
      <div className="game-list flex flex-wrap gap-3 justify-center">
        {array.map((_, index) => {
          return (
            <Card key={index} className="game-card p-4" radius="lg">
              <Skeleton className="rounded-lg">
                <div className="h-[120px] rounded-lg bg-default-300"></div>
              </Skeleton>
              <div className="space-y-3 mt-2">
                <Skeleton className="w-full rounded-lg">
                  <div className="h-3 w-full rounded-lg bg-default-200"></div>
                </Skeleton>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
}
