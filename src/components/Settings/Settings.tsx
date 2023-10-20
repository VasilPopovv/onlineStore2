import Styles from "./Setings.module.css";
import ToggleButton from "../../UI/ToggleButton/ToggleButton";
import System from "../../mobX/system";
import { observer } from "mobx-react-lite";

const Settings = observer(() => {
  return (
    <div className={Styles.settings}>
      <h2>Settings</h2>
      <div className={Styles.toggleSection}>
          <ToggleButton isChacked={!!System.isDarkTheme}>
            Dark theme
          </ToggleButton>
      </div>
    </div>
  );
});

export default Settings;
