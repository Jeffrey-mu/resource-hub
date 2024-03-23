import { useEffect, useState } from 'react'
import { Card, CardBody, Pagination } from '@nextui-org/react'
import { useMediaQuery, useWindowScroll } from '@uidotdev/usehooks'
import useSWR from 'swr'
import { fetcher } from '@/lib/utils'
import ResourcesCard, { formatCountTags } from '@/components/Awesome/Card'
import ResourcesSkeleton from '@/components/Awesome/Skeleton'
import TagFilter from '@/components/Awesome/TagFilter'
import '@/style/index.css'

import type {
  ResourcesCardInfo,
} from '@/components/Awesome/Card'

const limit = 8
function App({ render_data }: { render_data: string }) {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)')
  const [, scrollTo] = useWindowScroll()
  const [renderData, setRanderData] = useState<ResourcesCardInfo[]>([])
  const [countTags, setCountTags] = useState<Record<string, number>>({})
  const [page, setPage] = useState(0)
  const { data } = useSWR<ResourcesCardInfo[]>(
    `/awesome/${render_data}.json`,
    fetcher,
  )

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setRanderData(data)
        setCountTags(formatCountTags(data))
      }, 200)
    }
  }, [data])
  function set(value: string) {
    setPage(0)
    if (data) {
      if (value === 'All')
        setRanderData(data)
      else
        setRanderData(data.filter(item => item.data.tags.includes(value)))
    }
  }
  function changePagination(number: number) {
    setPage(number - 1)
    scrollTo({ left: 0, top: 0, behavior: 'smooth' })
  }
  function getTotalPages() {
    return Math.ceil(renderData.length / limit)
  }
  return (
    <>
      <div className="mb-3 px-2">
        Tag:
        {' '}
        {renderData.length && renderData.length !== data?.length
          ? renderData[0].data.tags[0]
          : 'All'}
      </div>
      <div className="fixed z-30 left-0 bottom-5 w-full flex justify-center pointer-events-none">
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
          shadow="lg"
        >
          <CardBody>
            <div className="flex gap-2 flex-shrink-0 items-center rounded-xl shadow-sm pointer-events-auto">
              <TagFilter
                countTags={countTags}
                onChildDataChange={value => set(value)}
              />
              {getTotalPages()
                ? (
                  <Pagination
                    loop
                    isCompact={isSmallDevice}
                    showControls
                    total={getTotalPages()}
                    initialPage={1}
                    page={page + 1}
                    onChange={changePagination}
                  />
                  )
                : (
                  <></>
                  )}
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {!renderData.length
          ? (
            <ResourcesSkeleton />
            )
          : (
              renderData
                .slice(page * limit, (page + 1) * limit)
                .map((item, index) => {
                  return <ResourcesCard value={item} key={index} />
                })
            )}
      </div>
    </>
  )
}

export default App
