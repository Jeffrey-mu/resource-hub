import { Card, CardContent } from "@/components/ui/card";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Image } from "@nextui-org/react";
import type { groupByDatePara } from "@/lib/utils";
import { game_service_path } from "@/lib/constant";
interface GameCardrops {
  value: groupByDatePara;
}
export default function GameCard({ value }: GameCardrops) {
  function get_game_path(path: string): string {
    return path.replace(".apps.minigame.vip", "");
  }
  return (
    <>
      <Card className="cursor-pointer">
        <CardContent className="p-3">
          <Drawer>
            <DrawerTrigger asChild>
              <div className="line-clamp-1 text-center">
                <Image
                  isZoomed
                  className="w-full rounded-lg"
                  src={`${game_service_path}/s-assets/H5-1/${get_game_path(value.folderName)}.png`}
                  alt=""
                  width="100"
                  height="100"
                />
                <div className="mt-2">{get_game_path(value.folderName)}</div>
              </div>
            </DrawerTrigger>
            <DrawerContent>
              <iframe
                src={`${game_service_path}/games/${value.folderName}/minigame-index.html`}
                className="play_box"
              />
            </DrawerContent>
          </Drawer>
        </CardContent>
      </Card>
    </>
  );
}
