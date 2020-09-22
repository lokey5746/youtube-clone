import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";
function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="How to use Uber Search Extension in chrome"
          views="1M Views"
          timestamp="1 year ago"
          channelImage="https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/a7xekyavj0dmwq9g_1586762992.jpeg?tr=w-812,h-464"
          channel="Anupama"
          image="https://media.graphcms.com/aVrJ1JlvSHeyJIE60VI5"
        />
        <VideoCard
          title="Yoga To Heal Stress"
          views="1M Views"
          timestamp="2 month ago"
          channelImage="https://www.tollywood.net/wp-content/uploads/2019/08/Pragya-Jaiswal-4-1.jpg"
          channel="Pragya Jaiswal"
          image="https://media.graphcms.com/TlUmfJGCRAaiepkuTeGM"
        />
        <VideoCard
          title="Climbing Ireland"
          views="4M Views"
          timestamp="3 year ago"
          channelImage="https://pbs.twimg.com/profile_images/1096421349260738560/7421J12a.jpg"
          channel="Bear Grylls"
          image="https://media.graphcms.com/CG0R4tPRiO7fH6V9PmJw"
        />
        <VideoCard
          title="How To Evaluate Your Current Facebook Marketing Strategy"
          views="10m Views"
          timestamp="7 year ago"
          channelImage="https://i.pinimg.com/originals/00/f3/ba/00f3baed741806ab1cc74e094b30824b.jpg"
          channel="Online Marketing"
          image="https://media.graphcms.com/WIDRW7EmShKSTnXeX79Q"
        />
        <VideoCard
          title="How to use Uber Search Extension in chrome"
          views="1M Views"
          timestamp="1 year ago"
          channelImage="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/11/14/15737172127732.jpg"
          channel="Mia Khalifia"
          image="https://media.graphcms.com/MAJ7wxpNSMiuVqjqeQzR"
        />
        <VideoCard
          title="How to use Uber Search Extension in chrome"
          views="1M Views"
          timestamp="1 year ago"
          channelImage="https://pbs.twimg.com/media/DWCQszMU8AALOFl.jpg"
          channel="Jonny Sin"
          image="https://media.graphcms.com/Ftqw7Yi2RRmRLqgEAXI1"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
