function StudentsInformation(props) {

    return(
        <form 
            className='adding-tasks-box'
        >
            <div className='adding-tasks-box-title'>
                <p>Students Information</p>
            </div>

            <div className='adding-tasks-box-id'>
                <p>Student-Code: </p>
                <input 
                    placeholder='Enter student-code...'
                />
            </div>

            <div className='adding-tasks-box-name'>
                <p>Full name: </p>
                <input 
                    placeholder='Enter student full name...'

                />
            </div>

            <div className='adding-tasks-box-dob'>
                <p>Date of Birth: </p>
                <input 
                    type='date'
                    placeholder='Enter student date of birth...'

                />
            </div>

            <div className='adding-tasks-box-gender'>
                <p>Gender: </p>
                <select>   
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

