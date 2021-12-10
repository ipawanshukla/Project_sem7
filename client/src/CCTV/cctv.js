import React from "react";
import { Box, Typography, Container, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
// import { dataURLtoBlob } from "blueimp-canvas-to-blob";
import vid from "./vid3.mp4";
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Async from 'react-promise';
const AWS = require("aws-sdk/dist/aws-sdk-react-native");


class CCTV extends React.Component {
  constructor(props) {
    super(props);  

    this.state = {
      vid: vid,
      distanceFromCamera:[],
      show:[],
      k:0,
      framecount:0,
      allXy:[],
      oneMrDisInpixel:70,
      focal:3,
      dis: false,
      res: [],
      roi:[],
      lists:[],
      canva:null,
      displayAlert:false,
      avgWatTime:0,
      suggestion:"All Clear",
      updatedsec:0,
      gotres:false,
      videoHeight:0,
      videoWidth:0,
    };
    this.showImageAt.bind(this);
    this.getVideoImage.bind(this);
    this.displayFrame.bind(this);
    this.processImage.bind(this);
    this.seeState.bind(this);
    // this.detectFaces.bind(this);
    this.anonLog.bind(this);
  }
 useStyles = () => makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

  displayFrame = () => {
    this.setState((state) => ({
      dis: true,
    }));
  };

  displayBoundingBox = () =>{
   
  }
  

  render() {
    const classes = this.useStyles();
    return (
      
     <Box>
        <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="left" spacing={2}>
           <Grid item>
                    <Typography variant="h6" color="textSecondary">
                    Inside CCTV
                    </Typography>
            </Grid>
            <Grid item>
                     <Box >
          {this.state.dis && !this.state.gotres ? this.showImageAt(0) : console.log("Avoided")}
          {this.state.dis ? <div id="frames"></div> : <div></div>}
          </Box>
            </Grid>
            <Grid item>
              <Grid container justify="center" spacing={2}>
                <Grid item>
                          <Button
            
                            variant="contained"
                            color="primary"
                            onClick={this.displayFrame}
                          >
                            Get Frames
                          </Button>
                </Grid>

              </Grid>
              <Grid container justify="center" spacing={2}>
                <Grid item>
                           <Button
                          variant="contained"
                            color="primary"
                            onClick={this.seeState}
                          >
                            See Analysis

                          </Button>
                </Grid>

              </Grid>
              <Grid container justify="center" spacing={2}>
                <Grid item>
                  {
                    this.state.displayAlert? <Alert variant="outlined" severity="error">
                      Social Distancing Violated
                  </Alert> : console.log()
                  }
                 
                </Grid>

              </Grid>
              <Grid container justify="center" spacing={2}>
                <Grid item>
                  {
                    this.state.avgWatTime>10?
                     <Alert variant="outlined" severity="info">
                      Average Waiting Time: {this.state.avgWatTime}
                    </Alert> : console.log()
                  }
                 
                </Grid>

              </Grid>
              <Grid container justify="center" spacing={2}>
                <Grid item>
                  {
                    this.state.avgWatTime>10?
                     <Alert variant="outlined" severity="success">
                      Cutstomers may ask for new Counters.
                    </Alert> : console.log()
                  }
                 
                </Grid>

              </Grid>
            </Grid>
        </Grid>
      </Grid>
      </Grid>
        <Box  >
              <Box display="none" alignItems="left">
                <video width="480" controls>
                <source src={vid} type="video/mp4" />
                <Typography>
                  Your browser does not support HTML5 video.
                </Typography>
              </video>
              </Box>
             
                           
            </Box>
</Box>
    );
  }

 drrec = () =>{
 }
setTimeoutAsync = (cb, delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(cb());
    }, delay);
  });
 seeState = () =>{
  //  console.log(this.state.res[this.state.updatedsec/5][0]);
  if(this.state.res[this.state.updatedsec/5][0]!=null){
      var canvas = document.createElement("canvas");
      var k= this.state.k;
      var img = this.state.lists[k];
      canvas.height = this.state.videoHeight;
      canvas.width = this.state.videoWidth;
      var ctx = canvas.getContext("2d");
      var img_width = this.state.videoWidth;
      var img_height = this.state.videoHeight;
      const rec=[];
      var colors = ["#00ff00","#ff0000"];
      // ctx.strokeStyle("#009900");
      // ctx.strokeStyle = "#009900";
      ctx.drawImage(img, 0, 0, this.state.videoWidth,this.state.videoHeight);
      var timg= new Image();
      var prevx,prevy;
      console.log("Total Results Obtained",this.state.res.length);
        
        var cc = k%colors.length;
        ctx.strokeStyle= colors[cc];
        var arr2=[];
        console.log("Person Count",this.state.res[k][0].length);
        for (let j = 0; j < this.state.res[k][0].length; j++) {
          // console.log("Res.state",this.state.res[i][0][j].BoundingBox.Left);
        var left = img_width * this.state.res[k][0][j].BoundingBox.Left;
        var top = img_height * this.state.res[k][0][j].BoundingBox.Top;
        var height = img_height * this.state.res[k][0][j].BoundingBox.Height;
        var width = img_width * this.state.res[k][0][j].BoundingBox.Width;
        var midpoint_x = Math.floor((left+width)/2);
        var midpoint_y = Math.floor((top+height)/2);
        console.log("Mid X",midpoint_x);
        console.log("Mid X",midpoint_x);
        arr2.push(midpoint_x);
        rec.push(0);
      }
      var found= false;
      for( var i=0;i<arr2.length;i++){
          for( var j=0;j<arr2.length;j++){
              if(i==j) continue;
              var diff= Math.abs(arr2[i]-arr2[j]);
              console.log("Difference of "+i+" "+j,diff);
              if(diff<this.state.oneMrDisInpixel){
                  rec[i]= 1;
                  rec[j]= 1;
                  found= true;
              }
          }
      }

      // Coloring the rectanngle

      for(var j=0;j<rec.length;j++){
        console.log("Color Of ",j);
        console.log("Color ",rec[j]);
        
        var left = img_width * this.state.res[k][0][j].BoundingBox.Left;
        var top = img_height * this.state.res[k][0][j].BoundingBox.Top;
        var height = img_height * this.state.res[k][0][j].BoundingBox.Height;
        var width = img_width * this.state.res[k][0][j].BoundingBox.Width;
        ctx.strokeStyle= colors[rec[j]];
        ctx.strokeRect(left,top,width,height);
      }

      
      timg.src= canvas.toDataURL();
      var li = document.createElement("li");
      li.innerHTML += this.state.framecount++ +"<b>  Frame Result "  + ":</b><br />";
      li.appendChild(timg);
      var fr = document.getElementById("frames").childNodes[0];
      document.getElementById("frames").replaceChild(li,fr);
      if(found){
        k++;
        k = k%this.state.res.length;
        this.setTimeoutAsync(this.seeState,1000);

        this.setState({
          displayAlert:true,
          avgWatTime:rec.length*3,
          k:k
        });
      }   

  }else{
    alert("Frames are loading");
  }

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
      canvas.height = video.videoHeight;
      canvas.width = video.videoWidth;
      var ctx = canvas.getContext("2d");
     
      ctx.drawImage(video, 0, 0,video.videoWidth,video.videoHeight);
      // ctx.rect()
      // ctx.rect(30,40,30,40);

      var img = new Image();
      img.src = canvas.toDataURL();
      callback.call(me, img, this.currentTime, e,video.videoHeight,video.videoWidth,canvas);
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
      function (img, secs, event, h, width,canvas) {
        this.state.videoHeight=h;
        this.state.videoWidth=width;
        this.state.lists.push(img);
        if (event.type == "seeked" && this.state.dis) {
          this.processImage(img.src,secs);
          var li = document.createElement("li");
          li.innerHTML += "<b>Frame at second " + secs + ":</b><br />";
          li.appendChild(img);
          var fr = document.getElementById("frames").childNodes[0];
          if (fr != null) {
            document.getElementById("frames").replaceChild(li, fr);
          } else {
            document.getElementById("frames").appendChild(li);
          }
          // document.getElementById("frames").appendChild(li);
          secs += 5;
          if (duration >= secs) {
            this.showImageAt(secs);
          }
        }
      }
    );
  };

  convertFile = (e) => {};
  processImage = (im,secs) => {
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
    this.state.res.push(this.detectFaces(imageBytes));
    // console.log("Checking state afetr detect faces",this.state.res);
    this.setState({
      gotres:true,
      updatedsec:secs,
    });   
  };

  anonLog = () => {
    // Configure the credentials provider to use your identity pool
    AWS.config.region = "us-east-1"; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: "",
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
    var curr = [];
    // AnonLog();
    AWS.region = "us-east-1";
    var rekognition = new AWS.Rekognition();
    var params = {
      Image: {
        Bytes: imageData,
      },
    };
     rekognition.detectLabels(params,function (err, data) {
      if (err) console.log(err, err.stack);
      // an error occurred
      else {
        // console.log("Success", data);
        data.Labels.map((value) => {
          // console.log(value);
          if (value.Name == "Person") {
            curr.push(value.Instances);
          }
        });
      } // successful response
    });

    return curr;
  };

  componentWillUnmount = () => {
    console.log("Component UNmounted");
    this.setState((state) => ({
      dis: false,
    }));
  };
}

// #endregion

export default CCTV;
