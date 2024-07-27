import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styles from "./UnityGame.module.css";

const UnityGame: React.FC = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/BuildUnity.loader.js",
    dataUrl: "Build/BuildUnity.data.unityweb",
    frameworkUrl: "Build/BuildUnity.framework.js.unityweb",
    codeUrl: "Build/BuildUnity.wasm.unityweb",
  });

  return <Unity unityProvider={unityProvider} className={styles.gameView} />;
};

export default UnityGame;
