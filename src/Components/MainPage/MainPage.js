import React, { Component } from 'react';
import "./MainPage.css";
import Post from '../Post/Post';
import postimage from "../../images/post.jpg";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postArray: []
        }
    }

    componentDidMount() {
        this.getPost();
    }

    getPost = () => {
        let data = [
            {
                "postId": "1234",
                "userName": "asd",
                "postImageURL": "https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
                "timeStamp": "12345",
                "likes": "1234",
            },
            {
                "postId": "12",
                "userName": "hhah",
                "postImageURL": "https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
                "timeStamp": "12345",
                "likes": "94",
            },
        ]
        this.setState({ postArray: data });
    }

    render() {
        return (
            <div>
                {
                    this.state.postArray.map((item, index) => (
                        <Post id={item.postId} userName={item.userName} postImage={item.postImageURL} likes={item.likes} />
                    ))
                }
            </div>
        );
    }
}

export default MainPage;