import type { IActivityIndicatorProps } from "./ActivityIndicator.types";
import { ThreeDot } from "react-loading-indicators";

const ActivityIndicator: React.FC<IActivityIndicatorProps> = () => {
  return (
    <div role="status" className="flex justify-center items-center">
      <ThreeDot
        color={"rgba(226, 55, 68, 1)"}
        size="small"
        text=""
        textColor=""
      />
    </div>
  );
};

export default ActivityIndicator;
