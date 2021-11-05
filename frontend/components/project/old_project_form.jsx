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
           <div className="project-form-container">
               <form className="project-form" onSubmit={this.handleSubmit}>
                   
                        {/* <input 
                            type="text"
                            value={this.state.categoryId}
                            onChange={this.update('category_id')}
                        /> */}
                        <select className="project-form-item" id="category-select" placeholder="test">
                            <option value="0">Category</option>
                            <option value="1">Art</option>
                            <option value="2">Comics</option>
                            <option value="3">Crafts</option>
                            <option value="4">Dance</option>
                            <option value="5">Design</option>
                            <option value="6">Fashion</option>
                            <option value="7">Film and Video</option>
                            <option value="8">Food</option>
                            <option value="9">Games</option>
                            <option value="10">Journalism</option>
                            <option value="11">Music</option>
                            <option value="12">Photography</option>
                            <option value="13">Publishing</option>
                            <option value="14">Technology</option>
                            <option value="15">Theater</option>
                        </select>
                   
                   {/* <label>Author
                        <input 
                            type="text"
                            value={this.state.authorId}
                            onChange={this.update('author_id')}
                        />
                   </label> */}
                   <label className="project-form-item" for="project-form-description">
                       <h2>Describe what you’ll be creating.</h2>
                       <h3>And don’t worry, you can edit this later, too.</h3>
                   </label>
                        <textarea
                            placeholder="An album of songs based on Pablo Neruda poems."
                            id="project-form-description"
                            value={this.state.description}
                            onChange={this.update('description')}
                        />
                   
                   <label className="project-form-item" for="project-form-title">Title
                   </label>
                        <input 
                            id="project-form-title"
                            type="text"
                            value={this.state.title}
                            onChange={this.update('title')}
                        />
                   <label className="project-form-item" for="project-form-body">Body
                   </label>
                        <textarea
                            id="project-form-body"
                            value={this.state.body}
                            onChange={this.update('body')}
                        />
                    <select className="project-form-item" id="location-select">
                        <option value="0">Location</option>
                        <option value="1">Austrailia</option>
                        <option value="2">Austria</option>
                        <option value="3">Belgium</option>
                        <option value="4">Canada</option>
                        <option value="5">Denmark</option>
                        <option value="6">France</option>
                        <option value="7">Germany</option>
                        <option value="8">Greece</option>
                        <option value="9">Hong Kong</option>
                        <option value="10">Ireland</option>
                        <option value="11">Italy</option>
                        <option value="12">Japan</option>
                        <option value="13">Luxembourg</option>
                        <option value="14">Mexico</option>
                        <option value="15">New Zealand</option>
                        <option value="16">Norway</option>
                        <option value="17">Poland</option>
                        <option value="18">Singapore</option>
                        <option value="19">Slovenia</option>
                        <option value="20">Spain</option>
                        <option value="21">Sweden</option>
                        <option value="22">Switzerland</option>
                        <option value="23">the Netherlands</option>
                        <option value="24">the United Kingdom</option>
                        <option value="25">the United States</option>
                    </select>
                   {/* <label>Location
                        <input 
                            type="text"
                            value={this.state.locationId}
                            onChange={this.update('location_id')}
                        />
                   </label> */}
                   <label className="project-form-item" for="project-form-start">Start Date
                   </label>
                        <input 
                            id="project-form-start"
                            type="text"
                            value={this.state.startDate}
                            onChange={this.update('start_date')}
                        />
                   <label className="project-form-item" for="project-form-end">End Date
                   </label>
                        <input 
                            id="project-form-end"
                            type="text"
                            value={this.state.endDate}
                            onChange={this.update('end_date')}
                        />
                   <label className="project-form-item" for="project-form-goal">Goal Amount
                   </label>
                        <input 
                            id="project-form-goal"
                            type="text"
                            value={this.state.goal}
                            onChange={this.update('goal')}
                        />
                   <label className="project-form-item" for="project-form-risks">Risks
                   </label>
                        <input 
                            id="project-form-risk"
                            type="text"
                            value={this.state.risks}
                            onChange={this.update('risks')}
                        />
                <button type="submit" value={this.props.formType}>Create Project</button>
               </form>
           </div>
        )
    }
}



export default ProjectForm;