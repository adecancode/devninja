import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="">
      <div className="hidden sm:hidden lg:flex xl:flex 2xl:flex flex items-center flex-row">
        <Link href="/">
          <Image 
            src="/me.png"
            width="100"
            height="100"
            style=""
          />
        </Link>
        <div className="flex align-center flex-row ml-auto">
          <a href="https://github.com/adecancode">
            <Image 
              src="/svg/github.svg"
              width="26"
              height="26"
            />
          </a>
          <a href="https://twitter.com/DevNinjaAde" className="mx-8">
            <Image 
              src="/svg/twitter.svg"
              width="26"
              height="26"
            />
          </a>
          <a href="https://www.linkedin.com/in/adecancode/">
            <Image 
              src="/svg/linkedin.svg"
              width="26"
              height="26"
            />
          </a>
        </div>
      </div>
      <div className="block sm:block lg:hidden xl:hidden 2xl:hidden items-center flex-row">
        <div className="flex justify-center">
          <Link href="/">
            <Image 
              src="/me.png"
              width="100"
              height="100"
              style=""
            />
          </Link>
        </div>
        <div className="flex align-center flex-row justify-center mt-8">
          <a href="https://github.com/adecancode">
            <Image 
              src="/svg/github.svg"
              width="26"
              height="26"
            />
          </a>
          <a href="https://twitter.com/DevNinjaAde" className="mx-8">
            <Image 
              src="/svg/twitter.svg"
              width="26"
              height="26"
            />
          </a>
          <a href="https://www.linkedin.com/in/adecancode/">
            <Image 
              src="/svg/linkedin.svg"
              width="26"
              height="26"
            />
          </a>
        </div>
      </div>
      <div className="my-20 sm:my-20 lg:my-20 xl:my-36 2xl:my-36">
        <p className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl text-center sm:text-center lg:text-left xl:text-left font-bold text-white italic tracking-tighter mb-2 text-sizing">Hey! I’m Ade</p>
        <p className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl text-center sm:text-center lg:text-left xl:text-left font-bold text-white text-gray-600 italic tracking-tighter text-sizing">I’m a <span className="opacity-100 text-white">Front End & Mobile Developer.</span> I build <span className="opacity-100 text-white">Digital Products</span> and also implement <span className="opacity-100 text-white">Pixel Perfect Designs.</span></p>
        <div className="flex items-center flex-row mt-8 justify-center sm:justify-center lg:justify-start xl:justify-start">
          <Link href="/contact">
            <a className="text-lg sm:text-lg lg:text-2xl xl:text-2xl text-gray-600 hover:text-white font-light tracking-tighter mr-4">Contact</a>
          </Link>
          <a href="https://docs.google.com/document/d/1JWb1N9woOkBPW-B9O-mvn9t7CPfCUw6W-VPN9CIRGWQ/edit?usp=sharing" className="text-lg sm:text-lg lg:text-2xl xl:text-2xl text-gray-600 hover:text-white font-light tracking-tighter">Resume</a>
        </div>
      </div>
      <div className="mt-48">
        <p className="text-3xl font-bold text-white italic tracking-tighter mb-8 text-center sm:text-center lg:text-left xl:text-left">Works/Projects</p>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          <div className="p-6 bg-gray-800 rounded-2xl">
            <div className="flex items-center flex-row">
              <p className="text-2xl font-bold text-white italic tracking-tighter">Birdbox</p>
              <div className="flex align-center flex-row ml-auto">
                <a href="https://github.com/adecancode/birdbox-app" className="text-gray-600 hover:text-white font-light tracking-tighter text-lg">Repo</a>
              </div>
            </div>
            <p className="text-gray-400 font-light tracking-tighter">React Native + Socket.io (In Development)</p>
            <p className="text-white tracking-tighter text-lg mt-8">A real time messaging social app</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-2xl">
            <div className="flex items-center flex-row">
              <p className="text-2xl font-bold text-white italic tracking-tighter">Clubzone</p>
              <div className="flex align-center flex-row ml-auto">
                <a href="https://github.com/adecancode/clubzone" className="text-gray-600 hover:text-white font-light tracking-tighter text-lg">Repo</a>
              </div>
            </div>
            <p className="text-gray-400 font-light tracking-tighter">React Native</p>
            <p className="text-white tracking-tighter text-lg mt-8">A ClubHouse Clone</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-2xl">
            <div className="flex items-center flex-row">
              <p className="text-2xl font-bold text-white italic tracking-tighter">Afrogene Ent</p>
              <div className="flex align-center flex-row ml-auto">
                <a href="https://www.afrogene.org/" className="text-gray-600 hover:text-white font-light tracking-tighter text-lg">Live</a>
              </div>
            </div>
            <p className="text-gray-400 font-light tracking-tighter">React + Tailwind + FormSpree</p>
            <p className="text-white tracking-tighter text-lg mt-8">A Music Record Label Landing Page</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-2xl">
            <div className="flex items-center flex-row">
              <p className="text-2xl font-bold text-white italic tracking-tighter">Ear1 Social</p>
              <div className="flex align-center flex-row ml-auto">
                <a href="https://expo.io/@adecancode/projects/ear-one" className="text-gray-600 hover:text-white font-light tracking-tighter text-lg mr-4">Live</a>
                <a href="https://github.com/adecancode/ear1" className="text-gray-600 hover:text-white font-light tracking-tighter text-lg">Repo</a>
              </div>
            </div>
            <p className="text-gray-400 font-light tracking-tighter">React Native</p>
            <p className="text-white tracking-tighter text-lg mt-8">Implemented A Design In The Competition</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-2xl">
            <div className="flex items-center flex-row">
              <p className="text-2xl font-bold text-white italic tracking-tighter">FitWell</p>
              <div className="flex align-center flex-row ml-auto">
                <a href="https://fitwell-git-master-adecancode.vercel.app/" className="text-gray-600 hover:text-white font-light tracking-tighter text-lg mr-4">Live</a>
                <a href="https://github.com/adecancode/fitwell" className="text-gray-600 hover:text-white font-light tracking-tighter text-lg">Repo</a>
              </div>
            </div>
            <p className="text-gray-400 font-light tracking-tighter">React + Tailwind</p>
            <p className="text-white tracking-tighter text-lg mt-8">Implemented A Fitness Web App Landing Page</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-2xl">
            <div className="flex items-center flex-row">
              <p className="text-2xl font-bold text-white italic tracking-tighter">Snax</p>
              <div className="flex align-center flex-row ml-auto">
                <a href="https://snax.netlify.app/" className="text-gray-600 hover:text-white font-light tracking-tighter text-lg mr-4">Live</a>
                <a href="https://github.com/adecancode/snax" className="text-gray-600 hover:text-white font-light tracking-tighter text-lg">Repo</a>
              </div>
            </div>
            <p className="text-gray-400 font-light tracking-tighter">Nuxt + Tailwind + FormSpree</p>
            <p className="text-white tracking-tighter text-lg mt-8">Implemented A SAAS Landing Page</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-2xl">
            <div className="flex items-center flex-row">
              <p className="text-2xl font-bold text-white italic tracking-tighter">Reno Store</p>
              <div className="flex align-center flex-row ml-auto">
                <a href="https://reno.vercel.app/" className="text-gray-600 hover:text-white font-light tracking-tighter text-lg mr-4">Live</a>
                <a href="https://github.com/adecancode/renostore" className="text-gray-600 hover:text-white font-light tracking-tighter text-lg">Repo</a>
              </div>
            </div>
            <p className="text-gray-400 font-light tracking-tighter">React + Chakra UI</p>
            <p className="text-white tracking-tighter text-lg mt-8">An E-commerce Store</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-2xl">
            <div className="flex items-center flex-row">
              <p className="text-2xl font-bold text-white italic tracking-tighter">Github Users</p>
              <div className="flex align-center flex-row ml-auto">
                <a href="https://github-users-adecancode.vercel.app/" className="text-gray-600 hover:text-white font-light tracking-tighter text-lg mr-4">Live</a>
                <a href="https://github.com/adecancode/github-users" className="text-gray-600 hover:text-white font-light tracking-tighter text-lg">Repo</a>
              </div>
            </div>
            <p className="text-gray-400 font-light tracking-tighter">React + Tailwind + Axios</p>
            <p className="text-white tracking-tighter text-lg mt-8">Search For Github Users</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-2xl">
            <div className="flex items-center flex-row">
              <p className="text-2xl font-bold text-white italic tracking-tighter">Image Compressor</p>
              <div className="flex align-center flex-row ml-auto">
                <a href="https://image-compressor-adecancode.vercel.app/" className="text-gray-600 hover:text-white font-light tracking-tighter text-lg mr-4">Live</a>
                <a href="https://github.com/adecancode/image-compressor" className="text-gray-600 hover:text-white font-light tracking-tighter text-lg">Repo</a>
              </div>
            </div>
            <p className="text-gray-400 font-light tracking-tighter">React + Tailwind</p>
            <p className="text-white tracking-tighter text-lg mt-8">Used browser-image-compression Package</p>
          </div>
        </div>
      </div>
    </div>
  )
}
