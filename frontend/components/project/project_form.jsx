import React from "react";

class ProjectForm extends React.Component{
    constructor(props){
        
        super(props);
        this.state = this.props.project;

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.action(this.state);
    }

    update(field){
        return (event) => this.setState({[field]: event.currentTarget.value})
    }
    
    render(){
        
        return(
           <div>
               <form onSubmit={this.handleSubmit}>
                   <label>Author
                        <input 
                            type="text"
                            value={this.state.authorId}
                            onChange={this.update('author_id')}
                        />
                   </label>
                   <label>Title
                        <input 
                            type="text"
                            value={this.state.title}
                            onChange={this.update('title')}
                        />
                   </label>
                   <label>Description
                        <textarea
                            value={this.state.description}
                            onChange={this.update('description')}
                        />
                   </label>
                   
                   <label>Body
                        <textarea
                            value={this.state.body}
                            onChange={this.update('body')}
                        />
                   </label>
                   <label>Category
                        <input 
                            type="text"
                            value={this.state.categoryId}
                            onChange={this.update('category_id')}
                        />
                   </label>
                   <label>Location
                        <input 
                            type="text"
                            value={this.state.locationId}
                            onChange={this.update('location_id')}
                        />
                   </label>
                   <label>Start Date
                        <input 
                            type="text"
                            value={this.state.startDate}
                            onChange={this.update('start_date')}
                        />
                   </label>
                   <label>End Date
                        <input 
                            type="text"
                            value={this.state.endDate}
                            onChange={this.update('end_date')}
                        />
                   </label>
                   <label>Goal Amount
                        <input 
                            type="text"
                            value={this.state.goal}
                            onChange={this.update('goal')}
                        />
                   </label>
                   <label>Risks
                        <input 
                            type="text"
                            value={this.state.risks}
                            onChange={this.update('risks')}
                        />
                   </label>
                <button type="submit" value={this.props.formType}>Create Project</button>
               </form>
           </div>
        )
    }
}



export default ProjectForm;