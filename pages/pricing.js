import Layout from "@/components/layout/Layout"
import BrandSlider from "@/components/slider/BrandSlider"
import Price from "@/components/sections/home1/Pricing"
import Link from "next/link"
import Seo from "@/components/layout/Seo"
export default function Pricing() {
    return (
        <>
            <Layout headerStyle={8} footerStyle={3} breadcrumbTitle="Pricing">
                <Seo pageTitle="Vendor Portal | Pricing" />
                <div>
                    <Price/>
                </div>

            </Layout>
        </>
    )
}