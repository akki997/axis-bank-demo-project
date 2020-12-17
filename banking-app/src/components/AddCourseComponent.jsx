import React, { Component } from 'react';



class AddCourseComponent extends Component {
    constructor(props){
        super(props)
            this.state ={
              courseId : '',
              courseName: '',
              fees: ''


            }
          
        
       
    }
    componentDidMount()
    {
        this.updateCourse()
    }
    changeCourseIdHandler= (event)=>{
        this.setState({courseId: event.target.value});
        
    }
    changeCourseNameHandler= (event)=>{
        this.setState({courseName: event.target.value});
        
    }
    changeFeesHandler=(event)=>{
        this.setState({fees: event.target.value});
       

    }
    updateCourse=()=>{
        this.props.updatationCourse(this.state.courseId,this.state.courseName,this.state.fees)
      
       //this.setState({courseId:'',courseName:'',fees:''})
    }
    addCourse=()=>{
       
       this.props.createCourse(this.state.courseId,this.state.courseName,this.state.fees)
      
       this.setState({courseId:'',courseName:'',fees:''})
       

    }
    
    render() {
        return (
            <div>
                 <h2 className = "text-center">Add Course</h2>
               <div className = "row">
                   <table className = "table table-striped table-bordered">
                       <thead className="thead-dark">
                           <tr>
                               <th>Course</th>
                               <th>Details</th>
                              
                           </tr>

                       </thead>
                       <tbody>
                      <tr>
                          <td>
                              Course ID
                          </td>
                          <td>
                              <input type="text" name="courseId" value={this.state.courseId} onChange={this.changeCourseIdHandler}></input>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              Course Name
                          </td>
                          <td>
                              <input type="text" name="courseName" value={this.state.courseName} onChange={this.changeCourseNameHandler}></input>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              Course Fees
                          </td>
                          <td>
                              <input type="text" name="fees" value={this.state.fees} onChange={this.changeFeesHandler}></input>
                          </td>
                      </tr>
                      <tr>
                          <button className="btn btn-primary" onClick={() => this.addCourse()}>Add Course</button>
                      </tr>
                       </tbody>
                   </table>
               </div>
            </div>
       
        );
    }
}

export default AddCourseComponent;
