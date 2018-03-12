import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

import fetchStories from '../actions';

const StoryListItem = ({ story }) => {
    return (
        <tr>
            <td>
                <a href={story.url} target="_blank">
                    {story.title}
                </a>
            </td>
            <td>
                <Link to={`/author/${story.author}`}>
                    {story.author}
                </Link>  
            </td>
        </tr>  
    )
}

class StoryList extends Component {
    constructor(props) {
        super(props)

        this.loadAuthorStories();
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
          this.loadAuthorStories()
        }
      }
    
    loadAuthorStories(){
        const authorName = this.props.match.params.name;     

        if(!authorName){
            return;
        }
        this.props.fetchStories(authorName, true);
    }

    render() {
        const stories = this.props.stories;

        if(stories.length === 0){
            return <div>No results</div>;
        }

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                    </tr>    
                </thead>
                <tbody>
                    { 
                        stories.map( story =>  {
                            if(story.title !== null && story.title !== "" ){
                                return <StoryListItem key={story.objectID} story={story}  />     
                            }
                        })
                    }
                </tbody>
            </table>
        )

    }
}

const mapStateToProps = ( {stories} ) => {
    return { stories }
}

export default connect(mapStateToProps, { fetchStories })(StoryList);

