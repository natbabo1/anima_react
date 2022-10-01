import highlighBg from '../../assets/images/highlightBg.jpeg';
import HighlightPlayButton from '../../components/ui/HighlightPlayButton';

function HightlightMain() {
  return (
    <div className="w-full px-0 relative pt-[46.25%] overflow-hidden">
      <img src={highlighBg} className="absolute top-0 left-0 w-full h-auto " />
      <div className="absolute top-0 left-0 w-full h-full flex bg-gradient-to-l from-black">
        <div className="w-1/2 h-full relative">
          <div className="absolute bottom-[15%] left-[10%] cursor-pointer">
            <HighlightPlayButton />
          </div>
        </div>
        <div className="w-1/2 pl-14 pt-20 text-snow-white">
          <div className="text-8xl leading-[7.5rem] w-4/5">
            Fullmetal Alchemist: Brotherhood
          </div>
          <p className="text-2xl mt-10 w-4/5 whitespace-normal ">
            After a horrific alchemy experiment goes wrong in the Elric
            household, brothers Edward and Alphonse are left in a catastrophic
            new reality. Ignoring the alchemical principle banning human
            transmutation,...
          </p>
          <p className="mt-10 text-xl">
            <span className="fw-bold">Ratings:</span> 9.1 | 17+
          </p>
          <div className="text-xl my-2 flex items-center gap-2">
            <span className="block mr-3">Genre:</span>
            <div className="bg-medium-gray/80 px-2 py-1 rounded-md">Action</div>
            <div className="bg-medium-gray/80 px-2 py-1 rounded-md">
              Adventure
            </div>
            <div className="bg-medium-gray/80 px-2 py-1 rounded-md">Drama</div>
            <div className="bg-medium-gray/80 px-2 py-1 rounded-md">
              Fantasy
            </div>
          </div>
          <p className="text-xl my-3">
            <span className="fw-bold">Duration:</span> 24 mins per Ep | 64 Ep
          </p>
        </div>
      </div>
    </div>
  );
}

export default HightlightMain;
