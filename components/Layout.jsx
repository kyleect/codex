import Link from "next/link";
import Head from 'next/head'

export default function Layout({children}) {
    return (
        <>
            <Head>
                <title>Codex</title>
            </Head>


            <section>
                <h1><Link href="/"><a>Codex</a></Link></h1>

                <nav>
                    <ul>
                        <li><Link href="/beings"><a>Beings</a></Link></li>
                        <li><Link href="/locations"><a>Locations</a></Link></li>
                        <li><Link href="/things"><a>Things</a></Link></li>
                    </ul>
                </nav>
            </section>

            <main>
                {children}
            </main>
        </>
    )
}