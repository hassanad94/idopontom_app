import "expo/build/Expo.fx";
import { AppRegistry, Platform } from "react-native";
// import withExpoRoot from "expo/build/launch/withExpoRoot";

import App from "./App";
import { createRoot } from "react-dom/client";

AppRegistry.registerComponent("main", () => App);
if (Platform.OS === "web") {
  const rootTag = createRoot(
    document.getElementById("root") ?? document.getElementById("main")
  );
  const RootComponent = App;
  rootTag.render(<RootComponent />);
}
