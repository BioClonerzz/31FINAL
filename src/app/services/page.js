import Image from 'next/image'
import Navbar from '../about/components/Navbar'
import PageTitle from '../about/components/PageTitle'
import PageContent from '../about/components/PageContent'

export default function About() {
  return (
    <div>
      <a href="/about"></a>
      <div className="m-12">
        <Navbar />
        <PageTitle title="Services" />
        <PageContent />
      </div>
    </div>
  )
}
