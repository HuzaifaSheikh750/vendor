import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Vendor Portal"}
                </title>
            </Head>
        </>
    )
}

export default PageHead