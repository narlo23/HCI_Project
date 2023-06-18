import React from "react";
import "./AdditionalInfo.css";
import share_img from "../../images/share_experience.png";
import notion_img from "../../images/notion.png";
import who_img from "../../images/who.png";
import github_img from "../../images/github.png";
import youtube_img from "../../images/youtube.png";

const AdditionalInfo = () => {
  return (
    <table class="right_table">
      <tr>
        <td colspan="2">
          <img className="share_img" src={share_img} alt="share_experience" />
        </td>
      </tr>
      <tr>
        <td>
          <img className="notion_img" src={notion_img} alt="notion" />
        </td>
        <td rowspan="3">
          <img className="who_img" src={who_img} alt="who" />
        </td>
      </tr>
      <tr>
        <td>
          <img className="github_img" src={github_img} alt="github" />
        </td>
      </tr>
      <tr>
        <td>
          <img className="youtube_img" src={youtube_img} alt="youtube" />
        </td>
      </tr>
    </table>
  );
};

export default AdditionalInfo;
