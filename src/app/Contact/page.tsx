import { Flex } from 'antd'
import './Contact.scss'
import { ImageHeader } from '../components/Contact/ImageHeader/ImageHeader'
import { FormSection } from '../components/Contact/FormSection/FormSection'
import { FollowSection } from '../components/Contact/FollowSection/FollowSection'
export default function Contact() {
  return (
    <Flex className='contact-container' vertical>
      <ImageHeader />
      <FormSection />
      <FollowSection />
    </Flex>
  )
}
