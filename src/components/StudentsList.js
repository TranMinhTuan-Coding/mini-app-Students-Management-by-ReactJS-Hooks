import React from "react";

function StudentsList(props) {

    var {students,
        deleteStudentInforFunction,
        StudentsInforFixButtonFunction} = props;
    // console.log(typeof students[0].dateOfBirth.getDate());

    return(                       
        <div className='tasks-infor-table'>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Student-Code</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Date of Birth</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                        {students.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                
                                <td>{item.studentCode}</td>

                                <td>{item.fullName}</td>

                                <td>
                                    {/* 15/05/1997 */}
                                    {/* Dữ liệu ngày tháng truyền sang Component con này cần chuyển về                         */}
                                    {item.dateOfBirth.getDate()}-{item.dateOfBirth.getMonth() + 1}-{item.dateOfBirth.getFullYear()}
                                </td>

                                <td>
                                    {item.gender == '1' && 'Select Student Gender !'}
                                    {item.gender == '11' && 'Male'}
                                    {item.gender == '111' && 'Female'}
                                </td>

                                <td>
                                    <button 
                                        className='task-actions-fix-button'
                                        onClick={() => StudentsInforFixButtonFunction(item)}
                                    > Fix
                                    </button>

                                    <button 
                                        className='task-actions-delete-button'
                                        onClick={() => deleteStudentInforFunction(item.id)}
                                    >Delete</button>
                                </td>
                            </tr> 
                        ))}
                        
                </tbody>
            </table>
        </div>
    )
}
export default StudentsList;
