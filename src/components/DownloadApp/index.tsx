import Image from "next/image";

export function IOSDownload() {
  return (
    <button className="btn h-20 card md:w-60 bg-white flex flex-row p-3 drop-shadow-2xl">
      <Image
        alt=""
        src="/ic_baseline-apple.svg"
        className="rounded-full p-2 bg-gray-200 rounded-ful btn"
        height={50}
        width={50}
      />
      <div className="ml-2">
        <p className="text-start text-xs">Get on</p>
        <h6 className="text-start">Appstore</h6>
      </div>
    </button>
  );
}
export function PlaystoreDownload() {
  return (
    <button className="btn h-20 card md:w-60 bg-white flex flex-row p-3 drop-shadow-2xl">
      <Image
        alt=""
        src="/logos_google-play-icon.svg"
        className="rounded-full p-2 bg-gray-200 rounded-ful btn"
        height={50}
        width={50}
      />
      <div className="ml-2">
        <p className="text-start text-xs">Get on</p>
        <h6 className="text-start">Playstore</h6>
      </div>
    </button>
  );
}
