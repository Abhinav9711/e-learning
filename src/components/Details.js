import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Details = (props) => {
    const location = useLocation();
    const history = useNavigate();
    const subject = location.state;
    const lecture = ["video lecture 1", "video lecture 2", "video lecture 3", "video lecture 4", "video lecture 5", "video lecture 6", "video lecture 7", "video lecture 8",]


    const handleClick = () => {
        history('/home/details/quiz', {state: subject});
    }

    return (
        <>

            <div style={{ paddingTop: '10px', paddingBottom: '5px' }}>
                <h1> <b>{subject}  Videos Lectures.....</b></h1>
            </div>

            <div>
                {
                    lecture.map(lec => {
                        return (
                            <div className='details'>
                                <img src="https://icon-library.com/images/play-video-icon-png-transparent/play-video-icon-png-transparent-11.jpg" width="30" height="30" style={{ marginTop: '19px', marginLeft: '40px' }} />
                                <h2 style={{ backgroundColor: '' }}> {subject} {lec}</h2>
                            </div>
                        )
                    })
                }
            </div>

            <div className='details'>
                <div></div>
                <button onClick={handleClick} style={{marginTop: '20px', marginBottom: '30px', backgroundColor: 'rgb(164, 201, 177)', color:'rgb(50, 58, 201)', fontSize:'20px'}}> <h3>{subject} quiz</h3></button>
            </div>

        </>
    )
}

export default Details;