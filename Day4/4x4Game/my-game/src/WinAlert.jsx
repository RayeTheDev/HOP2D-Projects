import "./index.css";
import { Button } from "@mantine/core";

export const WinAlert = ({ Retry }) => {
  return (
    <div className="WinCont">
      <p>You won</p>
      <div>
        <Button
          variant="outline"
          sx={{ backgroundColor: "white" }}
          onClick={Retry}>
          Retry
        </Button>
      </div>
    </div>
  );
};
