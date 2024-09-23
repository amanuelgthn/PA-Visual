import './virtualBlockchain.scss'
import Head from 'next/head'

export const VirtualBlockchain = () => {
  return (
    <>
      <Head>
        <title>Virtual Reality & Blockchain Technologies</title>
        <meta
          name='description'
          content='Leverage VR, AR, and Blockchain technologies to enhance user experiences.'
        />
      </Head>

      <div className='virtualBlockchain-container'>
        <div className='virtual_header'>
          <Section
            title='VIRTUAL REALITY & AUGMENTED REALITY'
            description='We leverage VR and AR technologies to provide immersive and interactive experiences for our clients, allowing them to virtually tour properties, visualize design concepts, and make informed decisions from anywhere in the world. These technologies enhance the buying and selling process by providing a more engaging and realistic representation of properties and designs.'
            sectionClass='virtual_section'
          />
        </div>

        <div className='blockchain_header'>
          <Section
            title='BLOCKCHAIN TECHNOLOGY'
            description='Blockchain technology is revolutionizing the real estate industry by providing a secure and transparent platform for property transactions, title deeds, and smart contracts. We explore the potential of blockchain to streamline transactions, reduce fraud, and increase trust and transparency in the real estate market.'
            sectionClass='blockchain_section'
          />
        </div>
      </div>
    </>
  )
}
interface SectionProps {
  title: string
  description: string
  sectionClass: string
}

const Section = ({ title, description, sectionClass }: SectionProps) => (
  <div className={sectionClass}>
    <h1>{title}</h1>
    <p className='description'>{description}</p>
  </div>
)
