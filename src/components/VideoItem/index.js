import "./index.css";

const VideoItem = (props) => {
  const { eachVideoDetails, onClickingVideoTitle } = props;
  const { title, URL } = eachVideoDetails;

  const changeVideoUrl = () => {
    onClickingVideoTitle(URL);
  };

  return (
    <div className="list-item-container">
      <button className="btn-element" onClick={changeVideoUrl} type="button">
        <video src={URL} width="100" height="100" autoplays></video>
        <p className="video-name-para">{title}</p>
      </button>
    </div>
  );
};

export default VideoItem;
