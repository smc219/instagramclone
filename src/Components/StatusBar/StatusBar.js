import React, { Component } from 'react';
import "./StatusBar.css";
import Avatar from '@mui/material/Avatar';
import statusimg from "../../images/pp1.png";

class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusList: []
        }
    }

    componentDidMount(){
        this.getData();
    }

    getData = () => {
        let data = [
            {
                "username": "hhahahhha",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username": "kkkkkk",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username": "aaaaaa",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username": "hhahahhha",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username": "hhahahhha",
                "imageURL": "../../images/pp1.png"
            }, {
                "username": "hhahahhha",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username": "hhahahhha",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username": "hihihihi",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username": "hhahahhha",
                "imageURL": "../../images/pp1.png"
            },
        ]

        this.setState({ statusList: data });
    }

    render() {
        return (
            <div>
                <div className="statusbar__container">
                    {
                        this.state.statusList.map((item, index) => (
                            <div className="status">
                                <Avatar className="statusbar__status" src={statusimg} />
                                <div className="statusbar__text">{item.username}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default StatusBar;