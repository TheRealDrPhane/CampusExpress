import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Order/Request
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Anything</span>
    </h1>
    <p className='desc text-center'>
      Campus Express is an open source request system for University 
      individuals to order their daily activities. 
    </p>

    <Feed />
    <div className="pb-5 pt-10"><p className=" font-roboto font-normal text-zinc-500">Post will automatically delete in 1 hour</p></div>
    <div className="bg-slate-700"><p className=" font-roboto px-14 py-5 font-light text-white text-xs">© Campus Express. All rights reserved</p></div>
  </section>
  
);

export default Home;
