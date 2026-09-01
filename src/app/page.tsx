'use client'

import About from "@/components/About"
import AboutSection from "@/components/AboutSection"
import CommunityStory from "@/components/CommunityStory"
import CommunityStory0 from "@/components/CommunityStory0"
import Hero from "@/components/Hero"
import Hero0 from "@/components/Hero0"
import LocalMiningStory from "@/components/LocalMiningStory"
import MiningToLaboratory from "@/components/MiningToLaboratory"
import Stats from "@/components/Stats"

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <Hero0 />
      <Stats />

       <AboutSection />
        <CommunityStory0 />

         <LocalMiningStory />
          <MiningToLaboratory />
      
    </>
  )
}

const services = [
  {
    title: "Gold Assay & Purity Testing",
    description: "Accurate determination of gold purity using fire assay and XRF technology",
    icon: "🥇"
  },
  {
    title: "Precious Metals Analysis",
    description: "Comprehensive analysis of silver, platinum, and other precious metals",
    icon: "🔬"
  },
  {
    title: "Export Certification",
    description: "Certified documentation for international trade and export compliance",
    icon: "📜"
  }
]