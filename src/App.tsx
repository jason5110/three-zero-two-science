import '@/App.css'

import Qrcode from '@/components/Qrcode'
import ScienceContainer from '@/components/ScienceContainer'
import AppWrapper from '@/containers/AppWrapper'
import { useOnMountUnsafe } from '@/hooks/useOnMountUnsafe'
import useStudents from '@/hooks/useStudents'

const App = () => {
  const { requestStudents } = useStudents()

  useOnMountUnsafe(() => {
    requestStudents()
  })

  return (
    <AppWrapper>
      <Qrcode />
      <ScienceContainer />
    </AppWrapper>
  )
}

export default App
