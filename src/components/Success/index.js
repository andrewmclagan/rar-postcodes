import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const deliveryOptions = window.__options;

const config = window.__config;

const Success = ({ address, deliveryArea }) => (
  <>
    <DialogContent>
      <div className="da-result suggest suggest-success">
        <Typography className="da-result da-result-title" variant="h5">
          {config.success.title.replace("{address}", address)}
        </Typography>
        <Typography className="da-result da-result-sub-title" variant="h6">
          {config.success.sub_title.replace("{address}", address)}
        </Typography>
        <ul className="da-result da-result-options">
          {deliveryArea.options.map((id) => {
            const option = deliveryOptions[id];
            return (
              <li key={id} className="da-result da-result-option">
                {option}
              </li>
            );
          })}
        </ul>
        <p className="da-result da-result-note">{deliveryArea.note}</p>
      </div>
    </DialogContent>
    <DialogActions>
      <Button
        href={config.success_url}
        color="primary"
        variant="contained"
        disableElevation
      >
        {config.success.button_text}
      </Button>
    </DialogActions>
  </>
);

export default Success;
