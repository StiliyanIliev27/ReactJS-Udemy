import Input from "./Input";
import { INPUT_INFO } from "../constants/input-constants";

export default function UserInput() {
  return (
    <div id="user-input">
      <div className="input-group">
        <Input
          labelFor={INPUT_INFO[0].FOR_INITIAL_INVESTMENT}
          labelName={INPUT_INFO[0].NAME_INITIAL_INVESTMENT}
        />
        <Input
          labelFor={INPUT_INFO[1].FOR_ANNUAL_INVESTMENT}
          labelName={INPUT_INFO[1].NAME_ANNUAL_INVESTMENT}
        />
      </div>

      <div className="input-group">
        <Input
          labelFor={INPUT_INFO[2].FOR_EXPECTED_RETURN}
          labelName={INPUT_INFO[2].NAME_EXPECTED_RETURN}
        />
        <Input
          labelFor={INPUT_INFO[3].FOR_DURATION}
          labelName={INPUT_INFO[3].NAME_DURATION}
        />
      </div>
    </div>
  );
}
