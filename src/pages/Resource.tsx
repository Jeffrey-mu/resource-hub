import ResourceCard, { ResourceCardType } from '@/components/resource/Card';
import { useFetch } from '@/lib/utils';
import { useState, useEffect } from 'react';
import "@/style/index.css"

function Game() {
  const [data, setData] = useState<ResourceCardType[]>([])
  useEffect(() => {
    useFetch<ResourceCardType[]>('/data.json').then(res => {
      setData(res)
    })
  }, [])
  return (
    <>
      <h2>
        All tools
      </h2>
      <div className='flex flex-wrap gap-5'>
        {
          data.map(item => {
            return <ResourceCard value={item} />
          })
        }
      </div>
    </>
  )
}

export default Game
