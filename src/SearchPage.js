import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://i.pinimg.com/originals/78/cd/cc/78cdcc2308f8c661e1db9c492a06a6aa.png"
        channel="Prayga Jaiswal"
        verified
        subs="120k"
        noOfVideos={200}
        description="Pragya Jaiswal is an Indian film actress and model. She has appeared in Telugu cinema. Jaiswal was born and brought up in Jabalpur, Madhya Pradesh. She completed her study at the Symbiosis Law School at Pune. During her initial days at the Symbiosis University, she participated in various beauty pageants and became a successful model."
      />
      <hr />
      <VideoRow
        title="How to use Uber Search Extension in chrome"
        views="1M Views"
        subs="120K"
        description="How to search for appropriate extension in google chrome."
        timestamp="1 year ago"
        channel="Prayga jaiswal"
        image="https://media.graphcms.com/aVrJ1JlvSHeyJIE60VI5"
      />

      <VideoRow
        title="Yoga To Heal Stress"
        views="1M Views"
        timestamp="2 month ago"
        channel="Pragya Jaiswal"
        image="https://media.graphcms.com/TlUmfJGCRAaiepkuTeGM"
        subs="120K"
        description="How to search for appropriate extension in google chrome."
      />

      <VideoRow
        title="Climbing Ireland"
        views="4M Views"
        timestamp="3 year ago"
        channel="Bear Grylls"
        image="https://media.graphcms.com/CG0R4tPRiO7fH6V9PmJw"
        subs="120K"
        description="How to search for appropriate extension in google chrome."
      />

      <VideoRow
        title="How To Evaluate Your Current Facebook Marketing Strategy"
        views="10m Views"
        timestamp="7 year ago"
        channel="Online Marketing"
        image="https://media.graphcms.com/WIDRW7EmShKSTnXeX79Q"
        subs="120K"
        description="How To Evaluate Your Current Facebook Marketing Strategy."
      />
    </div>
  );
}

export default SearchPage;
