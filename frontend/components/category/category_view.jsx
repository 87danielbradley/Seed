import React from "react";
import { Link } from "react-router-dom";
import CategoryItem from "./category_item";



class CategoryView extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        // this.props.fetchProjects({category: this.props.match.params.category});
        this.props.fetchProjects()
            .then(response => {
                window.scroll({top: 0,behavior: 'smooth'});
                this.setState({projects: response})})
        
    }
    
    render(){
        const {projects} = this.props;
        const myRandom = Math.floor(Math.random() * this.props.projects.length)
        const myLength = this.props.projects.length
        return[
           
            (projects.length > 0) ? (
            <div className="home-main">
                
                <h1>{this.props.projects[0].category}</h1>
                <h2>Explore {this.props.projects[0].category} from Seedbed's community.</h2>
            <div className="home-large-container">
                
                <div className="home-med-container-left">
                    <h4>FEATURED PROJECT</h4>
                    <div className="cat-picture-main"><Link to={`/projects/${this.props.projects[0].id}`}><img src={this.props.projects[0].url}/></Link></div>
                    <h1>{<Link to={`/projects/${this.props.projects[0].id}`} replace>{this.props.projects[0].title}</Link>}</h1>
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
                        <CategoryItem project={this.props.projects[(myRandom+1)%myLength]}/>
                        <CategoryItem project={this.props.projects[(myRandom+2)%myLength]}/>
                        <CategoryItem project={this.props.projects[(myRandom+3)%myLength]}/>
                    </div>
                    <div>
                        tabs
                    </div>
                </div>
                
            </div>
            </div>
           ) : <div>loading</div>
            
            ]
        
    }
}



export default CategoryView;