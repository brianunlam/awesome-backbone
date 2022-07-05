import Link from 'next/link'
import Layout from '../components/Layout'
import { MyWelcome } from '@awesome-backbone/core.ui.my-welcome';
import dynamic from 'next/dynamic';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    a
    <MyWelcome>dsdff</MyWelcome>
    b
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default dynamic(() => Promise.resolve(IndexPage), {
  ssr: false
})
