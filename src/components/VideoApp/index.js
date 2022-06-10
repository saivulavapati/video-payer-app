import { Component } from "react";
import { v4 as uuidV4 } from "uuid";
import VideoItem from "../VideoItem";
import "./index.css";

const videosList = [
  {
    id: uuidV4(),
    title: "Campfire Embers",
    URL:
      "https://d262gd3sdzodff.cloudfront.net/2ebf5c04-6beb-4486-948f-4c044a27d994/mp4/Campfire_Mp4_Avc_Aac_16x9_1920x1080p_24Hz_8.5Mbps_qvbr.mp4",
    tags: ["Ember", "Fire", "Log"],
  },
  {
    id: uuidV4(),
    title: "Shuttle Launch",
    URL:
      "https://d262gd3sdzodff.cloudfront.net/15dc8353-5237-48c7-a021-b498851a844c/mp4/LaunchingOfRocket_Mp4_Avc_Aac_16x9_1920x1080p_24Hz_8.5Mbps_qvbr.mp4",
    tags: ["Space", "Fire", "Spark"],
  },
  {
    id: uuidV4(),
    title: "Smoke in the forest",
    URL:
      "https://d262gd3sdzodff.cloudfront.net/c85ac563-c092-41d4-938a-c61d2390ff56/mp4/Smoke_Mp4_Avc_Aac_16x9_1920x1080p_24Hz_8.5Mbps_qvbr.mp4",
    tags: ["Smoke", "Tree"],
  },
  {
    id: uuidV4(),
    title: "Cars Drifting",
    URL:
      "https://d262gd3sdzodff.cloudfront.net/e79c0f25-85cf-4ade-b9b6-ef9d2456222b/mp4/CarDriftRacing_Mp4_Avc_Aac_16x9_1280x720p_24Hz_8.5Mbps_qvbr.mp4",
    tags: ["Car", "Track", "Drifting"],
  },
  {
    id: uuidV4(),
    title: "Home Streight",
    URL:
      "https://d262gd3sdzodff.cloudfront.net/88119a33-e117-42d1-9e9b-104dfb7282b9/mp4/Carracing_Mp4_Avc_Aac_16x9_1920x1080p_24Hz_8.5Mbps_qvbr.mp4",
    tags: ["Car", "Racing", "Track"],
  },
  {
    id: uuidV4(),
    title: "Cycle Race",
    URL:
      "https://d262gd3sdzodff.cloudfront.net/f0e50064-c689-4a2f-9cc4-0ff9e6ddfb81/mp4/Cyclerace1_Mp4_Avc_Aac_16x9_1920x1080p_24Hz_8.5Mbps_qvbr.mp4",
    tags: ["Bike", "Racing", "Road"],
  },
  {
    id: uuidV4(),
    title: "Ice on the tree",
    URL:
      "https://d262gd3sdzodff.cloudfront.net/d7a6a3fe-85b4-4074-ad40-e29ddca34035/mp4/IceBranches_Mp4_Avc_Aac_16x9_1920x1080p_24Hz_8.5Mbps_qvbr.mp4",
    tags: ["Tree", "Ice", "Snow"],
  },
  {
    id: uuidV4(),
    title: "Ice on the river",
    URL:
      "https://d262gd3sdzodff.cloudfront.net/ad599d83-471f-42bc-8822-8c5b598cb4e0/mp4/IceFloating_Mp4_Avc_Aac_16x9_1920x1080p_24Hz_8.5Mbps_qvbr.mp4",
    tags: ["Ice", "River", "Snow"],
  },
  {
    id: uuidV4(),
    title: "Glacier Melting",
    URL:
      "https://d262gd3sdzodff.cloudfront.net/debe0e59-f65c-4aeb-8d4e-788d20090825/mp4/IceWater_Mp4_Avc_Aac_16x9_1920x1080p_24Hz_8.5Mbps_qvbr.mp4",
    tags: ["Ice", "River"],
  },
];

class VideoApp extends Component {
  state = {
    videoUrl:
      "https://d262gd3sdzodff.cloudfront.net/2ebf5c04-6beb-4486-948f-4c044a27d994/mp4/Campfire_Mp4_Avc_Aac_16x9_1920x1080p_24Hz_8.5Mbps_qvbr.mp4",
    searchInp: "",
  };

  getVideoUrl = (URL) => {
    this.setState({ videoUrl: URL });
  };

  searchVideoTitle = (event) => {
    this.setState({ searchInp: event.target.value });
  };

  render() {
    const { videoUrl, searchInp } = this.state;
    const filteredVideoList = videosList.filter((eachVideo) =>
      eachVideo.title.toLowerCase().includes(searchInp.toLowerCase())
    );
    return (
      <div className="bg-container">
        <div className="side-container">
          <div className="search-container">
            <label htmlFor="searchVideo" className="search-label">
              Search
            </label>
            <br />
            <input
              id="searchVideo"
              type="search"
              className="inp-search-ele"
              placeholder="Search Video"
              onChange={this.searchVideoTitle}
              value={searchInp}
            />
          </div>
          <div className="video-list-container">
            {filteredVideoList.map((eachVideo) => (
              <VideoItem
                eachVideoDetails={eachVideo}
                onClickingVideoTitle={this.getVideoUrl}
                key={eachVideo.id}
              />
            ))}
          </div>
        </div>
        <div className="video-container">
          <h1 className="video-heading">Video</h1>
          <video src={videoUrl} className="class-video" controls></video>
        </div>
      </div>
    );
  }
}

export default VideoApp;
