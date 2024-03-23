import {
  Badge,
  Button,
  Chip,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react'
import { useState } from 'react'
import { useMediaQuery } from '@uidotdev/usehooks'
import { ChevronDownIcon } from './ChevronDownIcon'

export default function TagFilter({
  countTags,
  onChildDataChange,
}: {
  countTags: Record<string, number>
  onChildDataChange: (value: string) => void
}) {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)')
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('All')
  function handleClick(value: string) {
    setActive(value)
    onChildDataChange(value)
    setIsOpen(false)
  }
  return (
    <Popover
      isOpen={isOpen}
      onOpenChange={open => setIsOpen(open)}
      backdrop="opaque"
      placement="bottom"
    >
      <PopoverTrigger>
        <Button color="secondary" size={isSmallDevice ? 'sm' : 'md'}>
          {isSmallDevice
            ? (
              <></>
              )
            : (
              <>
                <b>Tags:</b>
                {active || 'All'}
              </>
              )}
          <ChevronDownIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="font-bold mb-2">Choose tags that interest you.</div>
        <div className="flex flex-wrap gap-2 w-full p-2 ">
          {Object.keys(countTags)
            .sort((a, b) => {
              if (a === 'All')
                return -1
              if (b === 'All')
                return 1
              return a.localeCompare(b)
            })
            .map((key) => {
              return (
                <Badge
                  key={key}
                  content={countTags[key]}
                  color={active === key ? 'success' : 'secondary'}
                  shape="rectangle"
                  className="text-xs"
                  showOutline={false}
                >
                  <Chip
                    className="mx-1.5 mb-2 cursor-pointer text-xs"
                    onClick={() => handleClick(key)}
                    key={key}
                    color={active === key ? 'success' : 'secondary'}
                  >
                    {key}
                  </Chip>
                </Badge>
              )
            })}
        </div>
      </PopoverContent>
    </Popover>
  )
}
