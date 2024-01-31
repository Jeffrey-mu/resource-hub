import {
  Card,
  CardContent,
} from '@/components/ui/card';
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"

import type { groupByDatePara } from '@/lib/utils';
interface GameCardrops {
  value: groupByDatePara;
}
export default function GameCard({ value }: GameCardrops) {
  return (
    <>
      <Card className="game-card">
        <CardContent className='px-3 py-3'>
          <Drawer>
            <DrawerTrigger asChild>
              <div>
                <img
                  className='m-auto rounded-lg'
                  src={`https://res.minigame.vip/gc-assets/${value.folderName.replace(
                    '.apps.minigame.vip',
                    '',
                  )}/${value.folderName.replace('.apps.minigame.vip', '')}_icon.png`}
                  alt=""
                  width="100"
                  height="100"
                />
                {value.folderName.replace('.apps.minigame.vip', '')}
              </div>
            </DrawerTrigger>
            <DrawerContent>
              <iframe src={`http://101.43.206.247:3230/games/${value.folderName}/minigame-index.html`} className="play_box" />
            </DrawerContent>
          </Drawer>
        </CardContent>
      </Card>
    </>
  );
}
