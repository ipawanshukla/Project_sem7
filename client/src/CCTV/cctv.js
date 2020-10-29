import React from "react";
import { Box, Typography, Container, Button } from "@material-ui/core";
// import { dataURLtoBlob } from "blueimp-canvas-to-blob";
import vid from "./vid3.mp4";
import Async from 'react-promise';
const AWS = require("aws-sdk/dist/aws-sdk-react-native");


class CCTV extends React.Component {
  constructor(props) {
    super(props);  

    this.state = {
      vid: vid,
      distanceFromCamera:[],
      show:[],
      allXy:[],
      oneMrDisInpixel:105,
      focal:3,
      dis: false,
      res: [],
      roi:[],
      lists:[],
      canva:null,
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

  displayFrame = () => {
    this.setState((state) => ({
      dis: true,
    }));
  };

  displayBoundingBox = () =>{
    if(this.state.gotres){
      // setTimeout(function(){ console.log("Timeout"); }, 3000);
      // var canvas = document.createElement("canvas");
      // var img = this.state.lists[this.state.updatedsec/5];
      // canvas.height = this.state.videoHeight;
      // canvas.width = this.state.videoWidth;
      // var ctx = canvas.getContext("2d");
      // ctx.drawImage(img, 0, 0, this.state.videoWidth,this.state.videoHeight);
      // console.log("INside Display bounding",this.state.res[this.state.updatedsec/5]);
      
      for( var i=0;i<this.state.res.length;i++){
        console.log("Elelment",this.state.res[i].values().next());
      }
     

      // var left = img_width * aws_op.Left;
      // var top = img_height * aws_op.Top;
      // var height = img_height * aws_op.Height;
      // var width = img_width * aws_op.Width;


      // ctx.rect(100,200,300,400);
      

      // console.log("Image for frame ",this.state.lists[this.state.updatedsec/5]);
      // console.log("Updated sec",this.state.updatedsec);
      // console.log("Displaying Updated Sec's data",this.state.res[this.state.updatedsec/5]);
    //    for (let i = 0; i < this.state.res.length; i++) {
    //   console.log("Displaying the bounding boxes of ",this.state.res);
    //   // for(let j=0;j<this.state.res[i][0].length;j++){
    //   //   console.log("Displaying the bounding boxes of ",this.state.res[i][0][j]);
    //   // }
       
    // }

    }
   
  }
  

  render() {
    return (
      <Container>
        <Box>
          <Typography variant="h6" color="textSecondary">
            Inside CCTV
            <Box>
              <video width="480" controls>
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

              <Button
              variant="contained"
                color="primary"
                onClick={this.seeState}
              >
                See State

              </Button>
            </Box>
          </Typography>
          {
            this.displayBoundingBox()
          }

          {this.state.dis && !this.state.gotres ? this.showImageAt(0) : console.log("Avoided")}
          {this.state.dis ? <div id="frames"></div> : <div></div>}
        </Box>
      </Container>
    );
  }

 drrec = () =>{
//    var canvas = document.createElement("canvas");
//       var img = this.state.lists[this.state.updatedsec/5];
//       canvas.height = this.state.videoHeight;
//       canvas.width = this.state.videoWidth;
//       var ctx = canvas.getContext("2d");

//       var img_width = this.state.videoWidth;
//       var img_height = this.state.videoHeight;
//       const rec=[];
//       var colors = ["#00ff00","#ff0000"];
//       // ctx.strokeStyle("#009900");
//       // ctx.strokeStyle = "#009900";
//       ctx.drawImage(img, 0, 0, this.state.videoWidth,this.state.videoHeight);
//       var timg= new Image();
//       var i=0;
//       this.state.show.forEach(k=>{
//         var l = this.state.allXy(i);
//         i++;
//         var t = this.state.allXy(i);
//         i++;
//         var h = this.state.allXy(i);
//         i++;
//         var w = this.state.allXy(i);
//         i++;
//         var col=0;

//         if(k<this.state.oneMrDisInpixel){
//           col=1;
//         }else{
//           col=0;
//         }
//         ctx.strokeStyle=colors[col];
//         ctx.strokeRect(l,t,w,h);
//       })
// timg.src= canvas.toDataURL();

 }

 seeState = () =>{
   console.log(this.state.res[this.state.updatedsec/5][0]);
  if(this.state.res[this.state.updatedsec/5][0]!=null){
      var canvas = document.createElement("canvas");
      var img = this.state.lists[this.state.updatedsec/5];
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
      for(var i=0;i<this.state.res.length;i++){
        var cc = i%colors.length;
        ctx.strokeStyle= colors[cc];
        var arr2=[];
        for (let j = 0; j < this.state.res[i][0].length; j++) {
          // console.log("Res.state",this.state.res[i][0][j].BoundingBox.Left);

        var left = img_width * this.state.res[i][0][j].BoundingBox.Left;
        var top = img_height * this.state.res[i][0][j].BoundingBox.Top;
        var height = img_height * this.state.res[i][0][j].BoundingBox.Height;
        var width = img_width * this.state.res[i][0][j].BoundingBox.Width;
        this.state.allXy.push(left);
        this.state.allXy.push(top);
        this.state.allXy.push(height);
        this.state.allXy.push(width);
        var midpoint_x = Math.floor((left+width)/2);
        var midpoint_y = Math.floor((top+height)/2);
        if(i==0){
          prevx=midpoint_x;
          prevy= midpoint_y;
        }else{
          var a = midpoint_x-prevx;
          var b= midpoint_y-prevy;
          var distance=(this.state.focal*(165))/ height;
          console.log("Distance from camers",distance*100);
          arr2.push(distance);
          async function tr  (a,b) {
            var dis=-1;
            await (dis = Math.sqrt( a*a + b*b ));
            if(dis!=-1){
              return dis;
            }else{
              return 0;
            }
          }
          var dis = tr(a,b).then((resolve,reject) =>{
            if(resolve!=null){
              console.log("Inside promise resolve",resolve);
              this.state.show.push(resolve);
              Promise.resolve(resolve);
            }
            console.log("State after promise",this.state);
            this.drrec();

          });


           prevx=midpoint_x;
          prevy= midpoint_y;
          // console.log("Distance Between Midpoint ",dis);
        }

        console.log("Obtained Midpoint x ",midpoint_x);
        console.log("Obtained Midpoint y ",midpoint_y);
        ctx.strokeRect(left,top,width,height);
        }
        this.state.distanceFromCamera.push(arr2);
        
      }
      timg.src= canvas.toDataURL();
      var li = document.createElement("li");
      li.innerHTML += "<b>Frame at second "  + ":</b><br />";
      li.appendChild(timg);
      var fr = document.getElementById("frames").childNodes[0];
      document.getElementById("frames").replaceChild(li,fr);
      console.log("INside Display bounding",this.state.res[this.state.updatedsec/5]);
      
  }

      // ctx.rect(100,200,300,400);
      

   console.log("INside Display bounding",this.state.res[this.state.updatedsec/5][0]);
  //  alert(this.state);

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
    console.log("Checking state afetr detect faces",this.state.res);
    this.setState({
      gotres:true,
      updatedsec:secs,
    });   
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
