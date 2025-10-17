import DreamDestinations from '@/components/landpage/DreamDestinations'
import GetInTouch from '@/components/landpage/GetInTouch'
import Hero from '@/components/landpage/Hero'
import SuccessStories from '@/components/landpage/SuccessStories'
import WhatWeOffer from '@/components/landpage/WhatWeOffer'
import WhyTrusted from '@/components/landpage/WhyTrusted'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <section className=''>
        <Hero />
      </section>
      <section>
        <WhyTrusted />
      </section>
      <section>
        <WhatWeOffer/>
      </section>
      <section>
        <DreamDestinations/>
      </section>   
      <section>
        <SuccessStories/>
      </section>      
    </div>
  )
}
