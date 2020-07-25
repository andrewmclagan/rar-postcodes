import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const config = window.__config;

const Failure = ({ address }) => (
  <>
    <DialogContent>
      <div className="da-result suggest suggest-failure">
        <Typography className="da-result da-result-title" variant="h5">
          {config.failure.title.replace("{address}", address)}
        </Typography>
        <Typography className="da-result da-result-sub-title" variant="body1">
          {config.failure.sub_title.replace("{address}", address)}
        </Typography>
      </div>
    </DialogContent>
    <DialogActions>
      <Button
        href={config.failure.url}
        color="primary"
        variant="contained"
        disableElevation
      >
        {config.failure.button_text}
      </Button>
    </DialogActions>
  </>
);

export default Failure;
