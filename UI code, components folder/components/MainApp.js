import React from 'react';
import AppTitle from './AppTitle';
import StudentsInformation from './StudentsInformation';
import StudentsList from './StudentsList';

function MainApp() {

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
                            <StudentsInformation
                            />
                        </div>

                        <div className='col-xl-8'>
                                <div className='col-xl-12'>
                                    <StudentsList 
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


