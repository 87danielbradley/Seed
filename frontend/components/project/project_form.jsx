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
                            onChange={this.update('authorId')}
                        > </input>
                   </label>
                   <label>Title
                        <input 
                            type="text"
                            value={this.state.title}
                            onChange={this.update('title')}
                        > </input>
                   </label>
                   <label>Description
                        <textarea
                            value={this.state.description}
                            onChange={this.update('description')}
                        > </textarea>
                   </label>
                   
                   <label>Body
                        <textarea
                            value={this.state.body}
                            onChange={this.update('body')}
                        > </textarea>
                   </label>
                   <label>Category
                        <input 
                            type="text"
                            value={this.state.categoryId}
                            onChange={this.update('categoryId')}
                        > </input>
                   </label>
                   <label>Location
                        <input 
                            type="text"
                            value={this.state.locationId}
                            onChange={this.update('locationId')}
                        > </input>
                   </label>
                   <label>Start Date
                        <input 
                            type="text"
                            value={this.state.startDate}
                            onChange={this.update('startDate')}
                        > </input>
                   </label>
                   <label>End Date
                        <input 
                            type="text"
                            value={this.state.endDate}
                            onChange={this.update('endDate')}
                        > </input>
                   </label>
                   <label>Goal Amount
                        <input 
                            type="text"
                            value={this.state.goal}
                            onChange={this.update('goal')}
                        > </input>
                   </label>
                   <label>Risks
                        <input 
                            type="text"
                            value={this.state.risks}
                            onChange={this.update('risks')}
                        > </input>
                   </label>
                <button type="submit" value={this.props.formType}/>
               </form>
           </div>
        )
    }
}



export default ProjectForm;