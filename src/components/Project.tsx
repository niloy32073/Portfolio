import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import bocr from '../assets/images/bocr.png';
import attendance from '../assets/images/Attendance.png';
import textSender from '../assets/images/TextSender.png';
import tripwiz from '../assets/images/TripWiz.png';
import mymoney from '../assets/images/MyMoney.png';
import terrawhale from '../assets/images/TerraWhale.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://terrawhales.com/" target="_blank" rel="noreferrer"><img src={terrawhale} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://terrawhales.com/" target="_blank" rel="noreferrer"><h2>TerraWhales</h2></a>
                <p>TerraWhale is a cross-platform investment app designed to connect venture capitalists with emerging businesses. VCs can explore detailed profiles of new startups and easily schedule meetings to discuss potential investments. The app is backed by a robust custom backend built with Node.js and MySQL, ensuring a seamless and secure user experience across platforms.</p>
            </div>
            <div className="project">
                <a href="https://github.com/niloy32073/My-Money" target="_blank" rel="noreferrer"><img src={mymoney} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/niloy32073/My-Money" target="_blank" rel="noreferrer"><h2>My Money</h2></a>
                <p>My Money is an AI-powered expense tracker app designed to streamline personal finance management. It automatically reads and analyzes incoming SMS messages to generate detailed financial reports. The app stores data locally for easy access and is built natively for Android using Kotlin and Jetpack Compose, ensuring a smooth and responsive user experience.</p>
            </div>
            <div className="project">
                <a href="https://tripwiz.ca/" target="_blank" rel="noreferrer"><img src={tripwiz} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://tripwiz.ca/" target="_blank" rel="noreferrer"><h2>TripWiz</h2></a>
                <p>TripWiz is a travel website with a dedicated native Android WebView app that enhances the user experience by incorporating additional features beyond the standard WebView. The app seamlessly integrates with the website, providing users with an optimized and enriched interface for exploring travel options and booking experiences directly from their mobile devices.</p>
            </div>
            <div className="project">
                <a href="https://github.com/niloy32073/Text-Sender" target="_blank" rel="noreferrer"><img src={textSender} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/niloy32073/Text-Sender" target="_blank" rel="noreferrer"><h2>Text Sender</h2></a>
                <p>Text Sender is a native Android app leveraging OCR technology to extract data from images and send it to a remote server for processing. This app streamlines data capture and transmission, providing a fast and efficient solution for converting physical text into digital form. Built for accuracy and ease of use, it seamlessly integrates advanced OCR capabilities into a mobile platform.</p>
            </div>
            <div className="project">
                <a href="https://github.com/niloy32073/bocr" target="_blank" rel="noreferrer"><img src={bocr} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/niloy32073/bocr" target="_blank" rel="noreferrer"><h2>Bangla License Plate Ditector</h2></a>
                <p>Bangla License Plate Detector is a native Android app designed to recognize and extract Bangla text from vehicle license plates. The app captures an image of the vehicle, processes it using a Python script to isolate the license plate region, and then applies OCR to accurately extract the Bangla text from the plate. This seamless integration of image processing and OCR technology provides a robust solution for license plate recognition in the Bangla language.</p>
            </div>
            <div className="project">
                <a href="https://github.com/niloy32073/AttendanceMangement" target="_blank" rel="noreferrer"><img src={attendance} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/niloy32073/AttendanceMangement" target="_blank" rel="noreferrer"><h2>Attendance Management</h2></a>
                <p>Attendance Management is a native Android app tailored for schools to efficiently manage student attendance. With a user-friendly interface designed to accommodate older teachers, the app offers a local database for secure data storage and a statistics section for analyzing student performance and attendance trends, making it an essential tool for educational institutions.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;