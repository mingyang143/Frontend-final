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
      <h2>Game Instructions. Please scroll down to read everything</h2>
      <p>
        <strong>Notes:</strong> The game is slightly buggy. If the webpage reads
        “PAGE NOT FOUND”, please go to the address bar and ensure that the URL
        is exactly{" "}
        <a href="https://orbital-cyborg-boys.netlify.app/">
          https://orbital-cyborg-boys.netlify.app/
        </a>
        .
      </p>
      <p>
        The game is best played on fullscreen, which you can toggle on and off
        easily (on by pressing the fullscreen button on the webpage and off by
        pressing the ESC button).
      </p>
      <p>
        Try not to refresh the webpage as the game progress will be reset. We
        have not saved the game state to any database.
      </p>

      <h2>Gameplay Instructions</h2>
      <ul className={styles.instructions}>
        <li>
          Buildings can only be placed right beside roads. Hence, you need to
          place down roads first before building anything.
        </li>
        <li>
          Roads do not cost any gold to be put down, but buildings cost gold.
        </li>
        <li>
          To place down roads, click the road option in the building menu, then
          place your mouse on the city tiles and click once and do not let go.
          While clicking, drag your mouse to customize how you want the road to
          look like.
        </li>
        <li>
          Houses can be placed now only beside a tile with a road. Each house
          cost is written in the building menu.
        </li>
        <li>
          If any house/road is not placed to your liking, toggle the delete
          button on the bottom right and click the house/road to be removed
        </li>
        <li>
          After spending all your gold, it's time to earn more! To earn more
          gold, you need to complete tasks.
        </li>
        <li>
          Press the To-Do orange button on the top left of the game window to
          enter the To-do window.
        </li>
        <li>
          To create a task, just fill in its name at the bottom input area.
        </li>
        <li>
          If you are not comfortable with a time limit, you can choose not to
          fill in a time. However, if you are on a tight schedule, it is
          recommended to put a time limit for your task.
        </li>
        <li>
          The time limit on each task must be filled in HHMM, e.g., 1930, which
          represents 19 hours and 30 minutes.
        </li>
        <li>
          When your deadline is drawing close, a fire will start breaking out in
          your city. Complete the task to save your buildings!
        </li>
        <li>
          Lastly, to complete a task, in the To-do window, each task will have
          an oval shape on the left of the task name. You can click on it to see
          a checkmark which indicates that the task is completed.
        </li>
      </ul>
      <p>Enjoy the game with increased productivity!</p>
    </div>
  );
}
