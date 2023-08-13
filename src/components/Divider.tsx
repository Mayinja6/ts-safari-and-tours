const Divider_ = ({ isWhite }: { isWhite?: boolean }) => {
  return (
    <span
      className={`block mb-[15px] relative -mt-3 ${
        isWhite ? 'text-white' : 'text-neutral'
      }`}
    >
      <i className="relative after:absolute after:-top-full after:-translate-y-[10%]  after:leading-none after:text-[40px] after:-right-1/2 after:content-['....']"></i>
      <i className='icon-briefcase font-black text-[20px] ml-2 mr-3'></i>
      <i className="relative after:absolute after:-top-full after:-translate-y-[10%]  after:leading-none after:text-[40px] after:content-['....']"></i>
    </span>
  );
};

export default Divider_;
