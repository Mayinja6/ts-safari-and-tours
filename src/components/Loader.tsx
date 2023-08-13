import loader from '../assets/loader.webm';

export default function Loader() {
  return (
    <div className='fixed bg-base-100 w-[100vw] h-[100vh] top-0 left-0 z-10 text-center'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <video
          className='w-[150px] h-[150px] max-w-[95%] max-h-[95%]'
          src={loader}
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  );
}
