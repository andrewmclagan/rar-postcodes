import React from "react";

const Result = ({ title, subTitle, url, actionText, address, deliveryArea }) => {
  return (
    <div className="da-result-root">
      <div>
        <div className="da-result suggest suggest-success">
          <h3 className="da-result da-result-title">
            {title.replace("##address##", address)}
          </h3>
          <h4 className="da-result da-result-sub-title">
            {subTitle.replace("##address##", address)}
          </h4>
          {deliveryArea && (
            <div className="da-result-list">
              <ul className="da-result da-result-options">
                {deliveryArea.options.map((id) => {
                  const option = window.__options[id];
                  return (
                    <li key={id} className="da-result da-result-option">
                      <p>{option}</p>
                    </li>
                  );
                })}
              </ul>
              <p className="da-result da-result-note">{deliveryArea.note}</p>
            </div>
          )}
        </div>
      </div>
      <div>
        <a className="btn btn-primary btn-block da-result-btn" href={url}>
          {actionText}
        </a>
      </div>
    </div>
  );
};

export default Result;
