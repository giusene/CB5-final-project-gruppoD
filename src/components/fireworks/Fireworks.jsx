import { Fireworks } from "@fireworks-js/react";

export default function FireworksComponent() {
  return (
    <>
      <Fireworks
        options={{
          rocketsPoint: {
            min: 20,
            max: 100,
          },
          acceleration: 1.03,
          sound: {
            enabled: true,
            files: ["explosion0.mp3", "explosion1.mp3", "explosion2.mp3"],
            volume: {
              min: 4,
              max: 8,
            },
          },
          explosion: 8,
        }}
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          background: "#000",
        }}
      />
    </>
  );
}
