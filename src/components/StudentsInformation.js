// Import các thư viện cần sử dụng:
import {useForm} from 'react-hook-form';
import {useEffect} from 'react';

function StudentsInformation(props) {

    var {studentsDataFunction,
        studentDefault} = props;

    // Sử dụng các hàm của react-hook-form:
    const {register, handleSubmit, reset} = useForm();

    // Hàm nhận dữ liệu từ form và gán vào biến formData:
    const formFunction = (formData) => {
        console.log(formData);
        studentsDataFunction(formData)
    }

    // Hook useEffect gọi call back mỗi khi component được Mount và mỗi khi giá trị của Dependencies (biến object studentDefault) thay đổi:
    // => Reset lại giá trị các thanh input theo giá trị của object studentDefault được truyền từ MainApp sang:
    useEffect (() => {
        // console.log(studentDefault);
        reset({...studentDefault})
    }, [studentDefault]);

    return(
        <form 
            className='adding-tasks-box'
            onSubmit={handleSubmit(formFunction)}
        >            
            <div className='adding-tasks-box-title'>
                <p>Students Information</p>
            </div>

            <div className='adding-tasks-box-id'>
                <p>Student-Code: </p>
                <input 
                    placeholder='Enter student-code...'
                    {...register('studentCode')}
                />
            </div>

            <div className='adding-tasks-box-name'>
                <p>Full name: </p>
                <input 
                    placeholder='Enter student full name...'
                    {...register('fullName')}
                />
            </div>

            <div className='adding-tasks-box-dob'>
                <p>Date of Birth: </p>
                <input 
                    type='date'
                    placeholder='Enter student date of birth...'
                    {...register('dateOfBirth')}
                />
            </div>

            <div className='adding-tasks-box-gender'>
                <p>Gender: </p>
                <select
                    {...register('gender')}
                >   
                    <option value='1'>Select student gender</option>
                    <option value='11'>Male</option>
                    <option value='111'>Female</option>
                </select>
            </div>

            <div className='adding-tasks-box-buttons'>
                <button className='adding-tasks-box-submit-button'>
                        Submit
                </button>
                <button className='adding-tasks-box-clear-button'>
                        Clear
                </button>
            </div>
        </form>
    )
}
export default StudentsInformation;

