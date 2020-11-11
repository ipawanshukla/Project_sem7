import React,{Component} from "react";
import { Box, Container, Typography ,Button} from "@material-ui/core";
import img from "../getroi/696.jpg";
import ReactDOM from 'react-dom';
class DistanceCaliberate extends React.Component {
   constructor(props) {
       super(props);
        this.state={
            isDown: false,
            previousPointX:0,
            previousPointY:0,
            currentX:0,
            currentY:0
        }
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.clearScreen = this.clearScreen.bind(this);
        this.submitDistance = this.submitDistance.bind(this);
    }



    render() {
        return (
            <Container>
                <Box>
                <canvas id="canvas" ref="canvas"
                        width={640}
                        height={425}
                        onMouseDown={
                            e => {
                                let nativeEvent = e.nativeEvent;
                                this.handleMouseDown(nativeEvent);
                            }}
                        onMouseMove={
                            e => {
                                let nativeEvent = e.nativeEvent;
                                this.handleMouseMove(nativeEvent);
                            }}    
                        onMouseUp={
                            e => {
                                let nativeEvent = e.nativeEvent;
                                this.handleMouseUp(nativeEvent);
                            }}
                />
                </Box>
                <Box>
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={this.submitDistance}
                    >
                        <Typography> Submit </Typography>
                    </Button>
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={this.clearScreen} >
                        <Typography> Clear Screen </Typography>
                    </Button>
                </Box>
            </Container>    
        );
    }

    clearScreen = () =>{
        const canvas = ReactDOM.findDOMNode(this.refs.canvas);
        var ctx = canvas.getContext("2d");
        const image = new Image();
        image.src= img;
        ctx.strokeStyle = '#ff0000';
        image.onload = () =>{
        ctx.drawImage(image, 0, 0, 640, 425);
        }
    }


    submitDistance = () =>{
        console.log(this.state);
    }

    handleMouseDown(event){ //added code here
        console.log(event);    
        this.setState({
            isDown: true,
            previousPointX:event.offsetX,
            previousPointY:event.offsetY
        },()=>{    
            const canvas = ReactDOM.findDOMNode(this.refs.canvas);    
            var x = event.offsetX;
            var y = event.offsetY;
            var ctx = canvas.getContext("2d");
            
            console.log(x,y);
            ctx.moveTo(x,y);
            ctx.lineTo(x+1,y+1);
            ctx.stroke();
        })
    }
    handleMouseMove(event){

    }
    handleMouseUp(event){
        
        //if(this.state.isDown){
            const canvas = ReactDOM.findDOMNode(this.refs.canvas);
            var x = event.offsetX;
            var y = event.offsetY;
            var ctx = canvas.getContext("2d");
            this.setState({
            isDown: false,
            currentX:x,
            currentY:y
        });

            ctx.moveTo(this.state.previousPointX,this.state.previousPointY);
            ctx.lineTo(x,y);

            ctx.stroke();
            ctx.closePath();
        //}
    }
    componentDidMount() {
        const canvas = ReactDOM.findDOMNode(this.refs.canvas);
        const ctx = canvas.getContext("2d");
        const image = new Image();
        image.src= img;
        ctx.strokeStyle = '#ff0000';
        image.onload = () =>{
        ctx.drawImage(image, 0, 0, 640, 425);
        }
        
        // ctx.fillStyle = 'rgb(200,255,255)';
        // ctx.fillRect(0, 0, 640, 425);
    }
}

// #endregion

export default DistanceCaliberate;
