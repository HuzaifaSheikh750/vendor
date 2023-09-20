import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home2/About"
import Banner from "@/components/sections/home2/Banner"
import Blog from "@/components/sections/home2/Blog"    
import Counter from "@/components/sections/home2/Counter"
import Cta from "@/components/sections/home2/Cta"
import Features from "@/components/sections/home2/Features"
import Services from "@/components/sections/home3/Services"
import About2 from "@/components/sections/home1/About"
import Services2 from "@/components/sections/home1/Services"
import Choose from "@/components/sections/home1/Choose"
import Seo from "@/components/layout/Seo"

export default function Home2() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={3}>
                <Seo pageTitle="Vendor Portal" />
                <Banner />

                <Features />

                <About />

                <Services />   

                <About2 />

                <Services2 />

                <Choose />

                <Counter />

                <Cta />

                <Blog />
                
            </Layout>
        </>
    )
}