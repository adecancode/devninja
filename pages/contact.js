import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Contact / Ade</title>
      </Head>
      <div>
        <p className="text-center mb-16 font-bold text-white italic tracking-tighter text-xl sm:text-xl lg:text-xl xl:text-3xl">Contact (Gigs, Contract Jobs etc.)</p>
        <form action="https://formspree.io/f/mwkvyyal" method="POST" className="max-w-xl mx-auto">
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
                <div className="w-full">
                    <span className="px-5 py-1.5 bg-gray-800 text-white rounded-full text-sm font-semibold tracking-tighter">Your Name*</span>
                    <input className="text-white py-3 px-5 rounded-2xl bg-gray-800 w-full mt-4 border-none outline-none appearance-none focus:ring-4 focus:ring-gray-400" type="text" name="Name" required/>
                </div>
                <div className="w-full">
                    <span className="px-5 py-1.5 bg-gray-800 text-white rounded-full text-sm font-semibold tracking-tighter">Your Email*</span>
                    <input className="text-white py-3 px-5 rounded-2xl bg-gray-800 w-full mt-4 outline-none appearance-none focus:ring-4 focus:ring-gray-400" type="email" name="Email" required/>
                </div>
            </div>
            <div className="w-full mt-8">
                <span className="px-5 py-1.5 bg-gray-800 text-white rounded-full text-sm font-semibold tracking-tighter">Your Message*</span>
                <textarea className="text-white py-3 px-5 rounded-2xl bg-gray-800 w-full mt-4 h-48 outline-none appearance-none focus:ring-4 focus:ring-gray-400" name="Message"></textarea>
            </div>
            <button type="submit" className="text-white p-4 font-bold tracking-tighter rounded-2xl bg-gray-800 w-full mt-8 outline-none appearance-none border-none focus:ring-4 focus:ring-gray-400">Send itt!</button>
        </form>
      </div>
    </div>
  )
}
