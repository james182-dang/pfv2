import React from 'react';
import { FaHtml5, FaCss3, FaNode, FaReact, FaAngular } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiMysql, SiMongodb, SiTypescript, SiMicrosoftword, SiMicrosoftexcel, SiGraphql, SiExpress } from 'react-icons/si';

const skillset = [
    {
        name: "HTML",
        icon: <FaHtml5 style={{color: '#e34c26', fontSize: '2rem'}} />,
    },
    {
        name: "CSS",
        icon: <FaCss3 style={{color: '#264de4', fontSize: '2rem'}} />,
        
    },
    {
        name: "JavaScript",
        icon: <IoLogoJavascript style={{color: '#f0db4f', fontSize: '2rem'}} />,
        
    },
    {
        name: "Node.js",
        icon: <FaNode style={{color: '#3c873a', fontSize: '2rem'}} />,
        
    },
    {
        name: "Express.js",
        icon: <SiExpress style={{color: '#61DBFB', fontSize: '2rem'}} />
    },
    {
        name: "MySQL",
        icon: <SiMysql style={{color: '#00758F', fontSize: '2rem'}} />,
        
    },
    {
        name: "MongoDB",
        icon: <SiMongodb style={{color: '#4DB33D', fontSize: '2rem'}} />,
        
    },
    {
        name: "React",
        icon: <FaReact style={{color: '#61DBFB', fontSize: '2rem'}} />,
        
    },
    {
        name: "GraphQL",
        icon: <SiGraphql style={{color: '#61DBFB', fontSize: '2rem'}} />,
    },
    {
        name: "TypeScript",
        icon: <SiTypescript style={{color: '#007acc', fontSize: '2rem'}} />,
        
    },
    {
        name: "Word",
        icon: <SiMicrosoftword style={{color: '#01A6F0', fontSize: '2rem'}} />,
        
    },
    {
        name: "Excel",
        icon: <SiMicrosoftexcel style={{color: '#7FBC00', fontSize: '2rem'}} />,
        
    }
]

export default skillset;