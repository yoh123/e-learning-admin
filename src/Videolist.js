import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
function Videolist(props) {
    const Course={
        reactjs:[
            {title:'react js tittle 1',vid:'https://youtu.be/zdp0zrpKzIE'},
            {title:'react js tittle 2',vid:'zdp0zrpKzIE'},
            {title:'react js tittle 3',vid:'zdp0zrpKzIE'}
        ]
    }
    const [vid,uid]=useState(Course[0].vid)
    const [title,utit]=useState(Course[0].title)
    const renderVideo=()=>{
        return(
            <div class="video-container">
              <iframe width="853" height="480" src={"//www.youtube.com/embed/"+vid+"?rel=0"} frameorder="0" allowfullscreen></iframe>
            </div>
              )
    }
    return (
        <div>
        {renderVideo()}
        <div class="collection">{
            Course.map(item=>{
                return <a href="#!" class="collection-item">{item.title}</a>
            })
}
        
      </div>
        </div>
    );
}

export default Videolist;