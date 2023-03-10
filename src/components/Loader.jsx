import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  // Accessing "progress" value using the "useProgress" hook
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        // Styling for the outer div container
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* A loading spinner element */}
      <span className="canvas-loader"></span>
      {/* A paragraph element to display loading progress */}
      <p
        style={{
          // Styling for the progress text
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {/* Displaying the progress percentage */}
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
