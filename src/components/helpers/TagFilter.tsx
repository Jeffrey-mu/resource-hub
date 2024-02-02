import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Chip,
} from "@nextui-org/react";

import { ChevronDownIcon } from "./ChevronDownIcon";
import { useState } from "react";

export default function TagFilter({
  countTags,
  onChildDataChange,
}: {
  countTags: Record<string, number>;
  onChildDataChange: (value: string) => void;
}) {
  const [active, setActive] = useState("");
  function handleClick(value: string) {
    setActive(value);
    onChildDataChange(value);
    handleClose();
  }
  function handleClose() {}
  return (
    <Popover
      backdrop="opaque"
      onClose={handleClose}
      placement="bottom"
      offset={10}
    >
      <PopoverTrigger>
        <Button className="mb-2" color="secondary">
          <b>Tags:</b> {active || "All"}
          <ChevronDownIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="font-bold pt-3">Choose tags that interest you.</div>
        <div className="flex flex-wrap gap-2 w-full p-3">
          {Object.keys(countTags)
            .sort()
            .map((key) => {
              return (
                <Chip
                  onClick={() => handleClick(key)}
                  className="hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-pointer"
                  color={active === key ? "primary" : "default"}
                  key={key}
                >
                  {key}
                  &nbsp;
                  <span>({countTags[key]})</span>
                </Chip>
              );
            })}
        </div>
      </PopoverContent>
    </Popover>
  );
}
