import highlighBg from '../../assets/images/highlightBg.jpeg';
import HighlightPlayButton from '../../components/ui/HighlightPlayButton';

function HightlightMain() {
  return (
    <div className="w-full px-0 relative pt-[56.25%] overflow-hidden">
      <img src={highlighBg} className="absolute top-0 left-0 w-auto h-full " />
      <div className="absolute top-0 left-0 w-full h-full flex bg-gradient-to-l from-black">
        <div className="w-1/2 h-full relative">
          <div className="absolute bottom-[33%] left-[10%] cursor-pointer">
            <HighlightPlayButton />
          </div>
        </div>
        <div className="w-1/2 pl-10 pr-4 pt-20 text-snow-white">
          <div className="text-7xl leading-[6rem]">
            Fullmetal Alchemist: Brotherhood
          </div>
          <p className="text-2xl mt-6">
            After a horrific alchemy experiment goes wrong in the Elric
            household, brothers Edward and Alphonse are left in a catastrophic
            new reality. Ignoring the alchemical principle banning human
            transmutation,...
          </p>
          <p className="mt-6 text-lg">
            <span className="fw-bold">Ratings:</span> 9.1 | 17+
          </p>
          <div className="text-lg my-2 flex items-center gap-2">
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
          <p className="text-lg my-3">
            <span className="fw-bold">Duration:</span> 24 mins per Ep | 64 Ep
          </p>
        </div>
      </div>
    </div>
  );
}

export default HightlightMain;
