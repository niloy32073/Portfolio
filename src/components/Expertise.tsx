import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython ,faAndroid,faSwift ,faApple} from '@fortawesome/free-brands-svg-icons';
import { faMobile,faServer } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Java",
    "Kotlin",
    "XML",
    "Jetpack Compose",
    "SQLite",
    "Firebase",
    "Rest API",
    "JSON",
    "Python",
    "TensorFlowLite",
    "Postman"
];

const labelsSecond = [
    "Swift",
    "SwiftUI",
    "UIKit",
    "SwiftData",
    "Rest API",
    "SQLite",
    "Firebase",
    "ML",
    "Git",
];

const labelsThird = [
    "KMP",
    "Compose",
    "SwiftUI",
    "Rest API",
    "SQLite",
    "Firebase",
    "Git",
];

const labelsFourth = [
    "Ktor",
    "nodeJS",
    "dJango",
    "MySQL",
    "PostgreSQL",
    "Postman",
    "Linux",
    "Git"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faAndroid} size="3x"/>
                    <h3>Native Android Development </h3>
                    <p>As a native Android developer skilled in both Kotlin and Java, I create robust, user-centric mobile applications. My expertise in Jetpack Compose and Android best practices ensures high-performance apps with a focus on seamless user experiences.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faApple} size="3x"/>
                    <h3>Native iOS Development</h3>
                    <p>As a native iOS developer proficient in Swift and SwiftUI, I design and build elegant, high-quality applications that deliver exceptional user experiences. My focus is on leveraging the latest iOS technologies to create innovative and reliable mobile solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMobile} size="3x"/>
                    <h3>Cross-Platform Development</h3>
                    <p>As a cross-platform developer utilizing Kotlin Multiplatform (KMP), I create seamless mobile applications that run efficiently on both Android and iOS. My expertise in KMP allows me to deliver consistent, high-performance experiences across platforms while maximizing code reusability.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faServer} size="3x"/>
                    <h3>Backend Development</h3>
                    <p>As a versatile developer, I build secure and scalable backend solutions using Ktor, Node.js, or Django, paired with MySQL or PostgreSQL databases. My focus on comprehensive security ensures that the applications I develop are not only high-performing but also robust and reliable.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFourth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;