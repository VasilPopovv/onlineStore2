import system from "../../mobX/system";
import Styles from "./ToggleButton.module.css";
import { observer } from "mobx-react-lite";

const ToggleButton: React.FC<{ children: string; isChacked: boolean }> =
  observer(({ children, isChacked }) => {
    return (
      <div className={Styles.toggleButton}>
        <label htmlFor="button">
          <div>
            <input
              type="checkbox"
              id="button"
              checked={isChacked}
              onChange={() => system.changeThem()}
            />
            <span></span>
          </div>
          {children}
        </label>
      </div>
    );
  });

export default ToggleButton;
