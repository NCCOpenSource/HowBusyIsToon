import { Component } from "react";

export default class EmojicomWidget extends Component {
  componentDidMount() {
    if (window.emojicom_widget) return;

    window.emojicom_widget = { campaign: this.props.campaignId };

    const script = document.createElement("script");
    script.src = "https://cdn.emojicom.io/embed/widget.js";
    document.body.appendChild(script);
  }

  render() {
    return null;
  }
}
