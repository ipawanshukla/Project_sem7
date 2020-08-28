import React from "react";
import { Box, Typography, Container, Button } from "@material-ui/core";
// import { dataURLtoBlob } from "blueimp-canvas-to-blob";
import vid from "./vid2.mp4";

const AWS = require("aws-sdk/dist/aws-sdk-react-native");
class CCTV extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vid: vid,
      dis: false,
    };
    this.showImageAt.bind(this);
    this.getVideoImage.bind(this);
    this.displayFrame.bind(this);
    this.processImage.bind(this);
    // this.detectFaces.bind(this);
    this.anonLog.bind(this);
  }

  displayFrame = () => {
    this.setState((state) => ({
      dis: true,
    }));
  };

  render() {
    return (
      <Container>
        <Box>
          <Typography variant="h6" color="textSecondary">
            Inside CCTV
            <Box>
              <video width="400" controls>
                <source src={vid} type="video/mp4" />
                <Typography>
                  Your browser does not support HTML5 video.
                </Typography>
              </video>
              <Button
                variant="contained"
                color="primary"
                onClick={this.displayFrame}
              >
                Get Frames
              </Button>
            </Box>
          </Typography>
          {this.state.dis ? this.showImageAt(0) : console.log("Avoided")}
          {this.state.dis ? <div id="frames"></div> : <div></div>}
        </Box>
      </Container>
    );
  }

  getVideoImage = (path, secs, callback) => {
    var me = this,
      video = document.createElement("video");
    video.onloadedmetadata = function () {
      if ("function" === typeof secs) {
        secs = secs(this.duration);
      }
      this.currentTime = Math.min(
        Math.max(0, (secs < 0 ? this.duration : 0) + secs),
        this.duration
      );
    };
    video.onseeked = function (e) {
      var canvas = document.createElement("canvas");
      canvas.height = 640;
      canvas.width = 480;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, 640, 480);
      var img = new Image();
      img.src = canvas.toDataURL();

      callback.call(me, img, this.currentTime, e);
    };
    video.onerror = function (e) {
      callback.call(me, undefined, undefined, e);
    };
    video.src = path;
  };

  showImageAt = (secs) => {
    var duration;
    this.getVideoImage(
      this.state.vid,
      function (totalTime) {
        duration = totalTime;
        return secs;
      },
      function (img, secs, event) {
        if (event.type == "seeked") {
          this.processImage(img.src);
          // this.detectFaces(img.src);
          var li = document.createElement("li");
          li.innerHTML += "<b>Frame at second " + secs + ":</b><br />";
          li.appendChild(img);
          document.getElementById("frames").appendChild(li);
          secs += 10;
          if (duration >= secs) {
            this.showImageAt(secs);
          }
        }
      }
    );
  };

  convertFile = (e) => {};

  processImage = (im) => {
    this.anonLog();
    var img = document.createElement("img");
    var image = null;
    img.src = im;
    var jpg = true;
    try {
      image = atob(im.split("data:image/jpeg;base64,")[1]);
    } catch (e) {
      jpg = false;
    }
    if (jpg == false) {
      try {
        image = atob(im.split("data:image/png;base64,")[1]);
      } catch (e) {
        alert("Not an image file Rekognition can process");
        return;
      }
    }
    //unencode image bytes for Rekognition DetectFaces API
    var length = image.length;
    var imageBytes = new ArrayBuffer(length);
    var ua = new Uint8Array(imageBytes);
    for (var i = 0; i < length; i++) {
      ua[i] = image.charCodeAt(i);
    }
    //Call Rekognition
    this.detectFaces(imageBytes);
  };

  anonLog = () => {
    // Configure the credentials provider to use your identity pool
    AWS.config.region = "us-east-1"; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: "us-east-1:16225f41-e3f4-4861-92d4-baf127091ee8",
    });
    // Make the call to obtain credentials
    AWS.config.credentials.get(function () {
      // Credentials will be available when this function is called.
      var accessKeyId = AWS.config.credentials.accessKeyId;
      var secretAccessKey = AWS.config.credentials.secretAccessKey;
      var sessionToken = AWS.config.credentials.sessionToken;
    });
  };

  detectFaces = (imageData) => {
    // AnonLog();
    AWS.region = "us-east-1";
    var rekognition = new AWS.Rekognition();
    var params = {
      Image: {
        Bytes: imageData,
      },
    };
    rekognition.detectLabels(params, function (err, data) {
      if (err) console.log(err, err.stack);
      // an error occurred
      else {
        console.log("Success", data);
        data.Labels.map((value) => {
          // console.log(value);
          if (value.Name == "Person") {
            console.log("map", value);
          }
        });
      } // successful response
    });
  };

  componentWillUnmount = () => {
    this.setState((state) => ({
      dis: false,
    }));
  };
}

// #endregion

export default CCTV;
