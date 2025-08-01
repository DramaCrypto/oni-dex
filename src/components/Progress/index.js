"use client";

const Progress = ({
  color = "bg-[#07fccb]",
  progress = 30,
  bg = "bg-[#2C2C2C]",
  height = "h-[12px]",
  track,
}) => {
  return (
    <div className={`${bg} rounded-[150px] w-[100%] ${height} relative`}>
      <div
        className={`absolute ${color} rounded-[150px] h-full left-0 top-0 `}
        style={{
          width: `${progress >= 100 ? 100 : progress < 0 ? 0 : progress}%`,
        }}
      ></div>
      {track && (
        <div
          className={`absolute ${track} rounded-full h-[18px] w-[18px] top-[-3px] `}
          style={{
            right: `${
              100 - (progress >= 100 ? 100 : progress < 0 ? 0 : progress)
            }%`,
          }}
        ></div>
      )}
    </div>
  );
};
export default Progress;
