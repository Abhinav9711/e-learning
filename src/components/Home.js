import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';


const Home = () => {
    const location = useLocation();
    const history = useNavigate();
    
    const [fullRecord, setFullRecord] = useState(['English', 'Maths', 'ENV', 'Computer', 'GK', 'Arts', 'Social Science', 'Hindi'])
    const [record, setRecord] = useState(['English', 'Maths', 'ENV', 'Computer', 'GK', 'Arts', 'Social Science', 'Hindi'])
    const [upcomingCourses, setUpcomingCourses] = useState(['English part 2', 'Maths part 2', 'ENV part 2', 'GK part 2', 'Arts part 2', 'Hindi part 2']);

    const handleClick = (subject) => {
        history("/home/details", { state: subject });
    }

    const getData = (value) => {
        let newRecord = []
        for (let i = 0; i < fullRecord.length; i++) {
            const title = fullRecord[i];
            if (title.toLowerCase().startsWith(value.toLowerCase())) {
                newRecord.push(fullRecord[i])
            }
        }
        if (newRecord) {
            setRecord(newRecord)
        }
    }

    var timeId;
    const searchInput = (e) => {
        clearTimeout(timeId);
        timeId = setTimeout(() => {
            getData(e.target.value);
        }, 500);
    }

    return (
        <>
            <div style={{ textAlign: 'center', paddingTop: '50px', marginBottom: '30px' }}>
                <input style={{ textAlign: 'center', padding: '10px', paddingLeft: '200px', paddingRight: '200px', backgroundColor: '#c6cbd4' }} onKeyUp={searchInput} placeholder="Search here..."></input>
                <h3 style={{ marginLeft: '1200px', color: 'black' }}>For Children (1st-8th)</h3>
            </div>

            <div className="container">
                {
                    record.map(r => {
                        return (<div>
                            <button style={{ backgroundColor: 'rgb(164, 201, 177)' }} onClick={() => handleClick(r)}>
                                <img src="https://babich.biz/content/images/2017/01/schools-promotional-videos.jpg" width="200" height="150" />
                            </button>
                            <p>{r}</p>


                        </div>)
                    })
                }
            </div>


            <div style={{ marginLeft: '52px', textAlign: 'left', marginTop: '50px' }}>
                <h2>Upcoming Courses...</h2>
            </div>
            <div className="container1">
                {
                    upcomingCourses.map(r => {
                        return (<div>
                            <button style={{ backgroundColor: 'rgb(164, 201, 177)' }} onClick={() => { }}>
                                <img src="https://babich.biz/content/images/2017/01/schools-promotional-videos.jpg" width="200" height="150" />
                            </button>
                            <p>{r}</p>


                        </div>)
                    })
                }
            </div>
        </>
    )
}

export default Home;