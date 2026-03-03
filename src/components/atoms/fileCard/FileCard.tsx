import { MoreHorizontal } from "lucide-react";
import dayjs from "dayjs";
import { ICONS } from "../../../assets/exports";
import { formatFileSize } from "../../../utility/utili";

type FileCardProps = {
  fileName: string;
  fileSize: number;
  uploadDate: string;
  onMenuClick?: () => void;
};

export const FileCard = ({
  fileName,
  fileSize,
  uploadDate,
  onMenuClick,
}: FileCardProps) => {
  return (
    <div className="w-[32%] rounded-[10px] border border-divider bg-white py-1.75 pl-4 pr-2.5 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center gap-x-1.5">
        {/* File Icon */}
        <div className="w-8 h-8 rounded-md bg-lightRed flex items-center justify-center p-1.5">
          <img src={ICONS.Doc} alt="doc" className="w-full h-full" />
        </div>

        {/* File Info */}
        <div className="flex flex-col">
          <span className="text-sm text-black">{fileName}</span>
          <span className="text-[10px] leading-3.5 text-black">
            {dayjs(uploadDate).format("MMMM DD, YYYY")} |{" "}
            {formatFileSize(fileSize)}
          </span>
        </div>
      </div>

      {/* Right Menu Button */}
      <button
        onClick={onMenuClick}
        className="w-8 h-8 rounded-md flex items-center justify-center p-1.5 bg-background hover:bg-gray-300 transition"
      >
        <MoreHorizontal className="w-full h-full text-secondary-text" />
      </button>
    </div>
  );
};