import { Box, CircularProgress, Typography } from "@mui/material";
import { useUIStore } from "../../store/ui.store";

function CircularProgressWithLabel({ value }: { value: number }) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        value={value}
        size={150}
        sx={{ color: "#E23744" }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{ color: "" }}
          fontSize={"28px"}
          fontWeight={"700"}
        >
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

const LoaderWrapper = ({
  children,
  progress,
}: {
  children: React.ReactNode;
  progress?: number; // made optional
}) => {
  const { globalLoader } = useUIStore();
  return (
    <div style={{ height: "100%", overflow: "auto" }}>
      {globalLoader && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 2000,
          }}
        >
          {typeof progress === "number" ? (
            <CircularProgressWithLabel value={progress} />
          ) : (
            <CircularProgress size={150} sx={{ color: "#E23744" }} />
          )}
        </Box>
      )}
      {children}
    </div>
  );
};

export default LoaderWrapper;
