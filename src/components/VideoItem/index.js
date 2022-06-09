import "./index.css";

const VideoItem = (props) => {
  const { eachVideoDetails, onClickingVideoTitle } = props;
  const { title, URL } = eachVideoDetails;

  const changeVideoUrl = () => {
    onClickingVideoTitle(URL);
  };

  return (
    <li className="list-item">
      <button className="btn-element" onClick={changeVideoUrl} type="button">
        <p>{title}</p>
      </button>
    </li>
  );
};

export default VideoItem;
