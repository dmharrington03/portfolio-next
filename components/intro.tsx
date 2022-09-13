import { CMS_NAME } from '../lib/constants'

import Image from 'next/image'

import Headshot from '/public/assets/img/headshot.png'

const Intro = () => {
  return (
    <header className="header">
      <div className="flex items-center flex-col">
        <div className="w-full bg-neutral-300 h-36" ></div>
        <h1 className="mt-28 text-6xl">DANIEL HARRINGTON</h1>
          <div className='absolute top-12'>
            <Image
                className=""
                src={ Headshot }
                placeholder="blur"
                width={180}
                height={180}
                alt="Profile picture"
            />
          </div>
        </div>
      </header>
  )
}

export default Intro
