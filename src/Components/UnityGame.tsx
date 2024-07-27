import { useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styles from "./UnityGame.module.css";

export default function UnityGame() {
  const {
    unityProvider,
    isLoaded,
    loadingProgression,
    requestFullscreen,
    takeScreenshot,
  } = useUnityContext({
    loaderUrl: "Build/BuildUnity.loader.js",
    dataUrl: "Build/BuildUnity.data.unityweb",
    frameworkUrl: "Build/BuildUnity.framework.js.unityweb",
    codeUrl: "Build/BuildUnity.wasm.unityweb",
    webglContextAttributes: {
      preserveDrawingBuffer: true,
    },
  });

  const [screenshotDatas, setScreenshotDatas] = useState<string[]>([]);
  const handleClickFullscreen = () => {
    if (isLoaded === false) {
      return;
    }
    requestFullscreen(true);
  };

  const handleClickScreenshot = () => {
    if (isLoaded === false) {
      return;
    }
    const screenshotData = takeScreenshot();
    if (screenshotData !== undefined) {
      setScreenshotDatas([screenshotData, ...screenshotDatas]);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Please play on fullscreen for the best experience!</h2>
      <div className={styles.unityWrapper}>
        {isLoaded === false && (
          <div className={styles.loadingBar}>
            <div
              className={styles.loadingBarFill}
              style={{ width: loadingProgression * 100 }}
            />
          </div>
        )}
        <Unity
          unityProvider={unityProvider}
          style={{ display: isLoaded ? "block" : "none" }}
        />
      </div>
      <div className="buttons">
        <button onClick={handleClickFullscreen}>Fullscreen</button>
        <button onClick={handleClickScreenshot}>Screenshot</button>
      </div>
      <h2>Screenshots</h2>
      <div className={styles.screenshots}>
        {screenshotDatas.map((data, index) => (
          <img width={250} key={index} src={data} alt="Screenshot" />
        ))}
      </div>
    </div>
  );
}
