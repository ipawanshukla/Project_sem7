// import {App} from "./App";
import React from 'react';
import axios from 'axios';
import Showimg from './ShowImg.js';

import './App.css';

class Dash extends React.Component {
  
  state = {
    Count: 0,
    Image_name: '',
    posts: [{'':''}],
    img_dis : ""
  };

  componentDidMount = () => {
    console.log("componentDidMount...")
    this.getBlogPost();
  };


  getBlogPost = () => {
    axios.get('/api')
      .then((response) => {
        console.log("1234567890-=")
        const data = response.data;
        this.setState({ posts: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }


  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value ,img_dis:''});
  };


  find = (event) => {
    event.preventDefault();
    console.log('Before payload');
     console.log(this.state.Count);
    const payload = {
      Count: this.state.Count,
    };

    axios({
      url: '/api/find',
      method: 'POST',
      data: payload
    })
      .then(data => {
        console.log('After find');
        console.log(data.data);
        this.setState({
          Count: 0,
          Image_name: '',
          img_dis : '',
          posts : data.data
        });
      })
      .catch(() => {
        console.log('Internal server error');
      });

  };

  openImage = (e,name)=> {
    this.setState({img_dis:name})
  }

  displayBlogPost = (posts) => {
    if (!posts.length) return null;
    return posts.map((post, index) => (
      <div onClick = {(e) => this.openImage(e,post.Image_name)} key={index} className="blog-post__display">
        <h3>Image Name:- {post.Image_name}</h3>
        <h5>Person Count :- {post.Count}</h5>
      </div>
    ));
  };

  render() {
    console.log("Redering....",'State: ', this.state);
    var img;
    if(this.state.img_dis != ''){
      img = (<Showimg img_name = {this.state.img_dis}/>)
    }else{
      img = (<h1>Please Select Image</h1>)
    }
    //JSX
    return(
      
      <div>
        <div className = 'partical'>
        </div>
        <h2>WELCOME TO IMAGE DATASET</h2>
        <div className="app">
          
          <h4 id = 'welcome'>Enter the person count -</h4>
          <form onSubmit={this.find}>
            <div className="form-input">
              <input 
                type="Number"
                name="Count"
                placeholder="Count"
                onChange={this.handleChange}
              />
            </div>
            <button>Find</button>
          </form>
          <div className="blog-">
            {this.displayBlogPost(this.state.posts)}
          </div>
        </div>
        {img}
      </div>
    );
  }
}


export default Dash;