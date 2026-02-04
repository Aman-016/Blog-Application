import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex border border-teal-500 p-3 justify-center items-center rounded-tl-3xl rounded-br-3xl flex-col sm:flex-row text-center'>
      <div className='flex-1 justify-center flex flex-col'>
        <h2 className='text-2xl'>
          Want to share your ideas on this platform? Then contact me — I’m always open to new thoughts and collaborations.
        </h2>
        <p className='text-gray-500 my-2'>
          I am Aman Kumar
        </p>
        <a
          href='https://www.instagram.com/aman_mehta_016/?hl=en'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button
            gradientDuoTone='purpleToPink'
            className='rounded-tl-xl rounded-bl-none rounded-br-xl w-full'
          >
            Contact me
          </Button>
        </a>
      </div>
      <div className='flex-1 p-7'>
        <img src='https://www.pipelinesocialmedia.com/wp-content/uploads/2023/03/social-media-1.png' />
      </div>
    </div>
  );
}