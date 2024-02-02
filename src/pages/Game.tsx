import GameCard from "@/components/game/Card";
import Skeleton from "@/components/game/Skeleton";
import { useFetch } from "@/lib/utils";
import {
  groupByDatePara,
  useFetchResponse,
  groupByDate,
  groupByDateReturn,
} from "@/lib/utils";
import { useState, useEffect } from "react";
import "@/style/index.css";
function Game() {
  const [data, setData] = useState<groupByDateReturn[]>([]);
  useEffect(() => {
    // @ts-ignore
    useFetch<useFetchResponse<groupByDatePara[]>>(
      "http://101.43.206.247:3230/game-files/list",
    ).then((res) => {
      setData(groupByDate(res.data));
    });
  }, []);
  return (
    <>
      {!data.length && <Skeleton />}

      {data.map((item) => (
        <div key={item.date}>
          <>
            <div key={item.date}>
              <h2 className="my-3 font-black text-2xl">{item.date}</h2>
              <div className="game-list flex flex-wrap gap-3 justify-center">
                {item.items.map((game) => (
                  <GameCard value={game} key={game.folderName} />
                ))}
              </div>
            </div>
          </>
        </div>
      ))}
    </>
  );
}

export default Game;
