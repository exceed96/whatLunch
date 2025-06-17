// 로딩 컴포넌트

import loadingImage from "@/assets/icon/lunchIcon.svg";

export default function Loading() {
  return (
    <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
      <div className="w-full h-full flex flex-col gap-4 lg:gap-8 justify-center items-center bg-[rgba(0,0,0,0.4)]">
        <img
          src={loadingImage}
          alt="loading icon"
          className="w-20 h-20 animate-spin z-10"
        />
        <p className="z-20 text-black text-2xl lg:text-5xl font-bold">
          <span className="inline-block animate-[bounce_1s_infinite_100ms]">
            최
          </span>
          <span className="inline-block animate-[bounce_1s_infinite_200ms]">
            고
          </span>
          <span className="inline-block animate-[bounce_1s_infinite_300ms]">
            의
          </span>
          <span> </span>
          <span className="inline-block animate-[bounce_1s_infinite_400ms]">
            맛
          </span>
          <span className="inline-block animate-[bounce_1s_infinite_500ms]">
            집
          </span>
          <span className="inline-block animate-[bounce_1s_infinite_600ms]">
            을
          </span>
          <span> </span>
          <span className="inline-block animate-[bounce_1s_infinite_700ms]">
            찾
          </span>
          <span className="inline-block animate-[bounce_1s_infinite_800ms]">
            는
          </span>
          <span> </span>
          <span className="inline-block animate-[bounce_1s_infinite_900ms]">
            중
          </span>
          <span className="inline-block animate-[bounce_1s_infinite_1000ms]">
            .
          </span>
          <span className="inline-block animate-[bounce_1s_infinite_1100ms]">
            .
          </span>
          <span className="inline-block animate-[bounce_1s_infinite_1200ms]">
            .
          </span>
        </p>
      </div>
    </div>
  );
}
