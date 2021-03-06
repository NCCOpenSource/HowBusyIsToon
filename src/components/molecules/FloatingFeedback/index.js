import React, { useState } from "react";
import EmojicomWidget from "../../molecules/EmojicomWidget";
import styles from "./FloatingFeedback.module.css";

export default function FloatingFeedback() {
  const [isFloatShowing, setIsFloatShowing] = useState(true);

  const showFloat = (event) => {
    event.preventDefault();
    setIsFloatShowing(!isFloatShowing);
  };

  return (
    <>
      {isFloatShowing ? (
        <div className={styles.tellUsMore}>
          <EmojicomWidget campaignId={"ELdgTgG0K1caTq1TCINr"} />
          <a
            target="_blank"
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=wLSfsgQNn0q0YsEpSx4bRw6915Qqm9RJjDrXRTIs2UxURFJORlJOMTFDVU03TjlWWFZFSTE2R0cwQi4u"
          >
            Tell Us More...
          </a>
          <button onClick={showFloat}>x</button>
        </div>
      ) : null}
    </>
  );
}
