import React, { useEffect, useRef, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";

const mediaDevicesSupported = "mediaDevices" in navigator;

const videoConstraints = {
  audio: false,
  video: {
    width: {
      min: 800,
      max: 1280
    },
    height: {
      min: 600,
      max: 1080
    },
    facingMode: "environment"
  }
};

const styles = ({ spacing, transitions, breakpoints, palette, shape }) => ({
  root: {
    margin: "0px"
  },
  button: {
    "margin-left": "10px",
    "margin-right": "10px",
    width: "100%"
  }
});

const Camera = ({ height, width = "100%", classes, onPhotoCaptured }) => {
  const video = useRef();
  const canvas = useRef();
  const [stream, setStream] = useState(false);
  const [streamSettings, setStreamSettings] = useState(false);

  const handleClick = () => {
    let context = canvas.current.getContext("2d");

    context.drawImage(
      video.current,
      0,
      0,
      canvas.current.width,
      canvas.current.height
    );

    console.log("HERE");

    const dataUrl = canvas.current.toDataURL();
    const dataUrlJpeg = canvas.current.toDataURL("image/jpeg", 0.9);

    localStorage.setItem("face", dataUrlJpeg);

    console.log(`Data URL length: ${dataUrl.length}`);
    console.log(`JPEG: ${dataUrlJpeg.length}`);

    onPhotoCaptured(dataUrlJpeg);

    //player.current.srcObject.getVideoTracks().forEach(track => track.stop());
  };

  useEffect(() => {
    if (!stream) {
      navigator.mediaDevices
        .getUserMedia(videoConstraints)
        .then(stream => {
          setStream(stream);
        })
        .catch(err => console.log(`${err.name}: ${err.message}`));
    } else if (!streamSettings) {
      let { videoWidth, videoHeight } = video.current;
      // Attach the video stream to the video element and autoplay.
      video.current.srcObject = stream;

      const streamVideoSettings = stream.getVideoTracks()[0].getSettings();
      setStreamSettings(streamVideoSettings);
      console.log(
        `stream: ${streamVideoSettings.width} ${streamVideoSettings.height}`
      );
    }
  });

  return (
    <React.Fragment>
      {mediaDevicesSupported && stream && (
        <div className={classes.root}>
          <video ref={video} controls autoPlay width={width} height={height} />

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleClick}
          >
            Capture
          </Button>

          <canvas
            ref={canvas}
            width={streamSettings.width}
            height={streamSettings.height}
            hidden
          />
        </div>
      )}
      {!mediaDevicesSupported && (
        <Typography>Camera not supported on this device</Typography>
      )}
    </React.Fragment>
  );
};

Camera.propTypes = {};
Camera.defaultProps = {};

export default withStyles(styles)(Camera);
