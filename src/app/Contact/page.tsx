import './Contact.scss'
import { ImageHeader } from '../components/Contact/ImageHeader/ImageHeader'
import { Followus } from '../components/Contact/Followus/Followus'

const Contact = () => {
  return (
    <>
      <div className='wrapper background'>
        <div className='wrapper-assist'>
          <ImageHeader />
          <Followus />
        </div>
      </div>
    </>
  )
}

export default Contact
