import '@/App.css'

import Qrcode from '@/components/Qrcode'
import ScienceContainer from '@/components/ScienceContainer'
import AppWrapper from '@/containers/AppWrapper'

const App = () => {
  return (
    <AppWrapper>
      <Qrcode />
      <ScienceContainer />
    </AppWrapper>
  )
}

export default App
