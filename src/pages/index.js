// Developed for Anunzio International by Anzul Aqeel. Contact +971545822608 or +971585515742. Linkedin Profile: linkedin.com/in/anzulaqeel

import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
    const { data: session } = useSession()

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <h1 className="text-4xl font-bold text-center w-full mb-8">
                    Next.js + Tailwind + Auth Starter
                </h1>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
                {!session ? (
                    <>
                        <p className="mb-4 text-lg">You are not signed in.</p>
                        <button
                            onClick={() => signIn()}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Sign in
                        </button>
                    </>
                ) : (
                    <>
                        <p className="mb-4 text-lg">Signed in as {session.user.email}</p>
                        <button
                            onClick={() => signOut()}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Sign out
                        </button>
                    </>
                )}
            </div>

            <div className="mt-16 text-center text-gray-500">
                <p>Anunzio International</p>
            </div>
        </main>
    )
}

// Developed for Anunzio International by Anzul Aqeel. Contact +971545822608 or +971585515742. Linkedin Profile: linkedin.com/in/anzulaqeel
