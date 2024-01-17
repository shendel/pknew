import { GetStaticProps } from 'next'
import Lottery from '../views/Lottery'

const IndexPage = () => {
  return <Lottery />
}


export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 24 * 30, // 30 days
  }
}

IndexPage.chains = []

export default IndexPage
