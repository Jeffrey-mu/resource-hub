import { useParams } from 'react-router-dom'
import ResourcesList from '@/components/Awesome/List'

export default function App() {
  const { type } = useParams()
  return (
    <>
      <ResourcesList render_data={`awesome-${type}`} />
    </>
  )
}
