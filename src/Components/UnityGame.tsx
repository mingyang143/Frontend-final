import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styles from "./UnityGame.module.css";

const UnityGame: React.FC = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/BuildUnity.loader.js",
    dataUrl: "Build/BuildUnity.data.br",
    frameworkUrl: "Build/BuildUnity.framework.js.br",
    codeUrl: "Build/BuildUnity.wasm.br",
  });

  return <Unity unityProvider={unityProvider} className={styles.gameView} />;
};

export default UnityGame;
