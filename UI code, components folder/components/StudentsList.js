import React from "react";

function StudentsList(props) {
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
                        <tr>
                            <th scope="row">1</th>
                            
                            <td>A001</td>

                            <td>Nguyễn Văn A</td>

                            <td>
                                15/05/1997                        
                            </td>

                            <td>
                                Male
                            </td>

                            <td>
                                <button 
                                    className='task-actions-fix-button'
                                >Fix</button>
                                <button 
                                    className='task-actions-delete-button'
                                >Delete</button>
                            </td>
                        </tr> 
                </tbody>
            </table>
        </div>
    )
}
export default StudentsList;
