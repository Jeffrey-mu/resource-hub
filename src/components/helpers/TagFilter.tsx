import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Chip,
  Badge,
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
    <Popover backdrop="opaque" onClose={handleClose} placement="bottom">
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
                <Badge
                  key={key}
                  content={countTags[key]}
                  color={active === key ? "success" : "secondary"}
                  shape="rectangle"
                  showOutline={false}
                >
                  <Chip
                    className="mx-1.5 mb-2 cursor-pointer"
                    onClick={() => handleClick(key)}
                    key={key}
                    color={active === key ? "success" : "secondary"}
                  >
                    {key}
                  </Chip>
                </Badge>
              );
            })}
        </div>
      </PopoverContent>
    </Popover>
  );
}
