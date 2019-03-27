import React from 'react';

class AddStudent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            course: '',
            grade: ''
        }
        

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(event){
        const { name, value} =event.target
        this.setState({
             [name]:value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.callBack({...this.state});
        
        this.setState({
            name: '',
            course: '',
            grade: ''
        })
    }
    render(){
        const {col = 's12'} = this.props;
        const {name , course, grade} = this.state;
        const inputs =['name', 'course', 'grade'];
        const generateInput = inputs.map((element, index) =>{
            return(
                <div className="input-field" key={index}>
                    <input name={element} autoComplete="off" id={element}type="text" value={[element]} onChange={this.handleInput}maxLength="10" required/>
                    <label htmlFor={element}>Student Name</label>   
                </div>
            )
        });

        return(
            <div className={`col ${col}`}>
                <form onSubmit={this.handleSubmit} action="">
                    <div className="center">Add Student</div>
                    {/* {generateInput} */}

                    <div className="input-field">
                        <input name="name" autoComplete="off" id="name" type="text" value={name} onChange={this.handleInput} maxLength="10" required/>
                        <label htmlFor="name">Student Name</label>   
                    </div>
                    <div className="input-field">
                        <input name="course" autoComplete="off" id="course" type="text" value={course} onChange={this.handleInput} maxLength="10" required/>
                        <label htmlFor="course">Course</label>   
                    </div>
                    <div className="input-field">
                        <input name="grade" autoComplete="off" id="grade" type="text" value={grade} onChange={this.handleInput} maxLength="10" required/>
                        <label htmlFor="grade">Grade</label>   
                    </div>
                    <button className="btn green">Add Student</button>
                </form> 
            </div>
        )
    }
}

export default AddStudent;