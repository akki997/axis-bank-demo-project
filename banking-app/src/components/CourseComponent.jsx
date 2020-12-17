import React, { Component } from 'react';

import AddCourseComponent from './AddCourseComponent';

class CourseComponent extends Component {
    constructor(props){
        super(props)
        this.state= {
            courseList:[
                {
                    courseId:"J001",
                    courseName:"Java",
                    fees:"1000"
                },
                {
                    courseId:"C001",
                    courseName:"C#",
                    fees:"1000"
                },
                {
                    courseId:"K001",
                    courseName:"Kotlin",
                    fees:"1000"
                }
            ]
        }
    }
    deleteCourse =(courseId)=>{
        let cList = this.state.courseList.filter((course)=>{
            return (course.courseId !== courseId)
        })
        this.setState({courseList:cList})
    }
    updateCourse =(courseId)=>{
         this.state.courseList.filter((course)=>{
            if(course.courseId === courseId){
              
            }
             
            
        })
       
        
        
    }
    updatationCourse=(id,name,fees)=>{

        console.log(id)

    }
   
   
    createCourse= (id,name,fees)=>{
        this.setState({courseList: [...this.state.courseList,{ courseId: id, courseName:name, fees:fees}]})
    }
    render() {
        return (
            <div>
               <h2 className = "text-center">Course List</h2>
               <div className = "row">
                   <table className = "table table-striped table-bordered">
                       <thead className="thead-dark">
                           <tr>
                               <th>Course ID</th>
                               <th>Course Name</th>
                               <th>Course Fees</th>
                               <th>Actions</th>
                              
                           </tr>

                       </thead>
                       <tbody>
                          {
                              this.state.courseList.map(
                                  course =>
                                  
                                  <tr key = {course.courseId}>
                                      <td> {course.courseId}</td>
                                      <td> {course.courseName}</td>
                                      <td> {course.fees}</td>
                                      <td><button className="btn btn-danger" onClick={() => this.deleteCourse(course.courseId)}>Delete</button>
                                      <button className="btn btn-info" onClick={()=> this.updateCourse(course.courseId)}>Update</button></td>
                                      
                                    </tr>
                
                                     
                              )
                          }
                          
                          
                          
                       </tbody>
                   </table>
               </div>
               <AddCourseComponent createCourse={this.createCourse} updatationCourse={this.updatationCourse}></AddCourseComponent>
            </div>
        )
        }
       
        
}

export default CourseComponent;