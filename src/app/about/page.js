import Image from 'next/image'
import Navbar from './components/Navbar'
import PageTitle from './components/PageTitle'
import PageContent from './components/PageContent'

export default function About() {
  return (
    <div>
      <a href="/about"></a>
      <div className="m-12">
        <Navbar />
        <PageTitle title="About" />
        <PageContent />
      </div>
    </div>
  )
}
