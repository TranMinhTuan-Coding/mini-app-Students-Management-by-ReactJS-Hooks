import React from 'react';
import AppTitle from './AppTitle';
import StudentsInformation from './StudentsInformation';
import StudentsList from './StudentsList';

// Import các thư viện cần sử dụng:
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

import Alerts from './Alerts';

// Khai báo dữ liệu ban đầu:
const studentsArray = [
    {
        id: 1,
        studentCode: 'A001',
        fullName: 'Trần Văn A',
        gender: '11',
        dateOfBirth: new Date (1999,8,5)
    },
    {
        id: 2,
        studentCode: 'A002',
        fullName: 'Trần Văn B',
        gender: '11',
        dateOfBirth: new Date (1999,9,2)
    },
    {
        id: 3,
        studentCode: 'A003',
        fullName: 'Trần Văn C',
        gender: '111',
        dateOfBirth: new Date (2000,5,20)
    },
]

// Khai báo dữ liệu student Object để nhận thông tin từ List và truyền sang Form:
const studentDefaultObject = {
    id: '',
    studentCode: '',
    fullName: '',
    gender: '',
    dateOfBirth: ''
}

function MainApp() {

    // Sử dụng thư viện ReactJS-Hooks: gán dữ liệu danh sách sinh viên mặc định cho biến students
    const [students, setStudents] = useState(studentsArray);
    // Sử dụng thư viện ReactJS-Hooks: gán dữ liệu object student 'rỗng' cho biến studentDefault:
    const [studentDefault, setStudentDefault] = useState(studentDefaultObject);

    // const [students, setStudents] = useState(localStorage.getItem('studentsData') ? studentsArray : []);

    // Hàm nhận dữ liệu từ Form thực hiện chức năng thêm/sửa:
    const studentsDataFunction = (formData) => {
        console.log(formData);
        // Logic quản lý chức năng Sửa thông tin Student Item:
        if (formData.id > 0) {
            var fixedStudentItems = students.find(x => x.id === formData.id)
            console.log(fixedStudentItems);

            // Gán thông tin mới cho student Item đang được chỉ định để Fix:
            fixedStudentItems.fullName = formData.fullName;
            fixedStudentItems.gender = formData.gender;
            fixedStudentItems.studentCode = formData.studentCode;
            fixedStudentItems.dateOfBirth = new Date(formData.dateOfBirth);

            setStudents([...students]);
            setStudentDefault(studentDefaultObject);
        } else {
            // Logic quản lý chức năng thêm mới Student Item:

            // Logic quản lý chức năng thêm thông tin sinh viên mới :
            // Nhận dữ liệu từ Form và thêm vào students qua hook useState => tự động đổ dữ liệu ra:
            // Chuyển dữ liệu ngày/tháng/năm sinh từ kiểu chuỗi thành kiểu new Date:
            var studentDOB00 = formData.dateOfBirth;
            var studentDOB01 = studentDOB00.split(('-'))[0] + ',' + studentDOB00.split(('-'))[1] + ',' + studentDOB00.split(('-'))[2];
            var studentDOB02 = new Date(studentDOB01);

            // Tạo 1 biến mới và gán giá trị thông tin sinh viên mới vào:
            var newStudentObject = {
                id: uuidv4(),
                studentCode: formData.studentCode,
                fullName: formData.fullName,
                gender: formData.gender,
                dateOfBirth: studentDOB02
            }

            // Thêm biến newStudentObject vào state students thực hiện chức năng thêm mới thông tin sinh viên:
            if (formData.studentCode == '') {
                setStudents([...students]);
            } else if (formData.fullName == '') {
                setStudents([...students]);
            } else if (formData.fullName == '' && formData.studentCode == '') {
                setStudents([...students]);
            } else {
                setStudents([...students, newStudentObject]);
            }
            // localStorage.setItem('studentsData', JSON.stringify(students));
            }
    }
    
    // Hàm quản lý chức năng xóa student item:
    const deleteStudentInforFunction = (id) => {
        // console.log(id);
        setStudents([...students.filter(x => x.id != id)]);
    }

    // Hàm quản lý chức năng Fix: nhận thông tin Student Item tương ứng từ List rồi truyền sang Form:
    const StudentsInforFixButtonFunction = (studentObject) => {
        console.log(studentObject);

        // Logic chuyển dữ liệu ngày/tháng/năm sinh từ student item thành kiểu String:
        var studentDefaultDOB00 = studentObject.dateOfBirth;

        var day = JSON.stringify(studentDefaultDOB00.getDate());
        var month = JSON.stringify(studentDefaultDOB00.getMonth() + 1);
        var year = JSON.stringify(studentDefaultDOB00.getFullYear());

        if (month.length == 2 && day.length == 2) {
            var studentDefaultDOB = year + '-' + month + '-' + day;
        } else if (month.length == 1 && day.length == 2) {
            var studentDefaultDOB = year + '-0' + month + '-' + day;
        } else if (month.length == 2 && day.length == 1) {
            var studentDefaultDOB = year + '-' + month + '-0' + day;
        } else if (month.length == 1 && day.length == 1) {
            var studentDefaultDOB = year + '-0' + month + '-0' + day;
        }

        // Khai báo 1 biến object mới nhận thông tin từ student item :
        var studentInforObjectFromFixButton = {
            id: studentObject.id,
            studentCode: studentObject.studentCode,
            fullName: studentObject.fullName,
            gender: studentObject.gender,
            dateOfBirth: studentDefaultDOB
        } 

        // Gán biến object vừa khai báo cho biến studentDefault và truyền sang Form :
        setStudentDefault({...studentInforObjectFromFixButton});
        // console.log(studentDefault);
    }

    return(
        <div>
            <div className='container'>
                <div className='row'>
                    <AppTitle/>
                </div>

                <br />

                <div className='row'>
                    <div className='col-xl-12 main-actions-app'>
                        <div className='col-xl-4'>
                            <Alerts 
                            />
                            <StudentsInformation
                                    // Truyền hàm quản lý chức năng nhận dữ liệu từ Form:
                                    studentsDataFunction = {studentsDataFunction}
                                    // Truyền dữ liệu student default Object:
                                    studentDefault = {studentDefault}
                            />
                        </div>

                        <div className='col-xl-8'>
                                <div className='col-xl-12'>
                                    <StudentsList 
                                        // Truyền dữ liệu sang Component con để hiển thị danh sách các sinh viên:
                                        students = {students}
                                        // Truyền hàm quản lý chức năng xóa student item:
                                        deleteStudentInforFunction = {deleteStudentInforFunction}
                                        // Truyền hàm quản lý chức năng Fix:
                                        StudentsInforFixButtonFunction = {StudentsInforFixButtonFunction}
                                    />
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainApp;


