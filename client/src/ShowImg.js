import React from 'react';
import './ShowImg.css';
import axios from 'axios';
import img from "./img1.jpg";
import { S3Control } from 'aws-sdk';

class ShowImg extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            temp : ""
        }
    }
    render(){
        this.getImg()
        return(
            this.displayImg()
        );
    }
    getImg = () => {
        if (this.state.temp == ""){
            var image_payload = {
                image_name : this.props.img_name
            }
            axios({
                url: '/api/s3',
                method: 'POST',
                data: image_payload
            }).then((data) => {
                if (this.state.temp == ""){
                    this.setState({temp : data.data})
                }
            }) .catch(() => {
                console.log('Internal server error');
            });
        }
    }
    componentDidUpdate(){
        this.state.temp ="";
    }

    displayImg = () =>{
        if ( this.state.temp == "" ){
            return (<p>Fetching Image....</p>)
        }else{
            return (<div className = 'image-display'>
                     <h3>{this.props.img_name}</h3>
                     <img src = {`data:image/png;base64,${this.state.temp}`} width = "800" height="600"/>
                    </div>)
        }
    }

}






















// const ShowImg = (props) => {
    
//     var data = axios({
//         url: '/api/s3',
//         method: 'POST',
//         data: image_payload
//       })
//         .then((data) => {
//             console.log("ShowImage data inside then data ",data)
//             return data;
//         })
//         .catch(() => {
//           console.log('Internal server error');
//         });

//     console.log("Printing Showimg data: ",data);


//     // var str = "'data:image/jpeg;base64,"+data+"'";
//     // console.log(str);
//     return(
//         <div className = 'image-display'>
//             {/* <img src = {str} width = "800" height="600"/> */}
//             <h3>{props.img_name}</h3>
//         </div>
//     );
// }

export default ShowImg;