import React from "react";
import { Link } from "react-router-dom";
import CategoryItem from "./category_item";



class CategoryView extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        // this.props.fetchProjects({category: this.props.match.params.category});
        this.props.fetchProjects();
    }
    
    render(){
        
        return(
            <div className="home-main">
            <h1>{this.props.projects[0].category}</h1>
            <h2>Explore {this.props.projects[0].category} from Seedbed's community.</h2>
            <div className="home-large-container">
                
                <div className="home-med-container-left">
                    <h4>FEATURED PROJECT</h4>
                    <div className="cat-picture-main">Picture</div>
                    <h1>{this.props.projects[0].title}</h1>
                    <h2>{this.props.projects[0].body}</h2>
                    <h3>{this.props.projects[0].author}</h3>

                    <div className="featured-links">
                        <button className="featured-remind"><i className="far fa-bookmark"></i>   Remind me</button>

                        <div className="featured-likes">
                            <button className="rec-stats-icons"><i className="far fa-thumbs-up"></i>   </button>
                            <button className="rec-stats-icons"><i className="far fa-thumbs-down"></i></button>
                        </div> 
                    </div>
                </div>
                
                <div className="home-med-container-right">    RECOMMENDED FOR YOU
                    <div className="category-container">
                        <CategoryItem project={this.props.projects[Math.floor(Math.random() * this.props.projects.length)]}/>
                        <CategoryItem project={this.props.projects[Math.floor(Math.random() * this.props.projects.length)]}/>
                        <CategoryItem project={this.props.projects[Math.floor(Math.random() * this.props.projects.length)]}/>
                    </div>
                    <div>
                        tabs
                    </div>
                </div>
                
            </div>
            </div>
           
        )
    }
}



export default CategoryView;