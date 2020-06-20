import React from 'react';
import { MyService } from './MyService';

export const AboutMyServicesView = ()=>{
    const services = [
        {
            imgURL: require("../img/s_img1.jpg"),
            headingList: ["Capture", "Good Memories", "With Your Spouse With Our", "Quality Couples Photos"],
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in turpis dictum, varius odio a, placerat nulla. Mauris ac rhoncus elit. Nulla quis feugiat neque. Vivamus nec orci sit amet ipsum lobortis laoreet. Donec gravida lectus id felis condimentum volutpat. Duis arcu lacus, consectetur ac consequat vitae",
            swap: true
        },
        {
            imgURL: require("../img/s_img2.jpg"),
            headingList: ["We", "Capture The Essence", "Of Every Expression With", "Our Close Up Photos"],
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in turpis dictum, varius odio a, placerat nulla. Mauris ac rhoncus elit. Nulla quis feugiat neque. Vivamus nec orci sit amet ipsum lobortis laoreet. Donec gravida lectus id felis condimentum volutpat. Duis arcu lacus, consectetur ac consequat vitae",
            swap: false
        },
        {
            imgURL: require("../img/s_img3.jpg"),
            headingList: ["Capture", "Precious Birthday", "Memories and Feelings with", "Memories and Feelings with"],
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in turpis dictum, varius odio a, placerat nulla. Mauris ac rhoncus elit. Nulla quis feugiat neque. Vivamus nec orci sit amet ipsum lobortis laoreet. Donec gravida lectus id felis condimentum volutpat. Duis arcu lacus, consectetur ac consequat vitae",
            swap: true
        },
    ]
    return (
        <div id="about-my-services">
            <div>
                <span className="section-header">About My Services</span>
            </div>
            <p style={{padding: "15px", fontSize: "16px"}}>As a photographer i work hard to make you look your best in every shot, to make sure your idea of a good look is portayed properly, i work with different concepts and i’m open to also work with you to get the best result possible. 
                <b>Come To DVJ Lets Make a Master Piece</b></p>
            {
                services.map(({imgURL, headingList, content, swap}, count)=>(
                    <MyService 
                        imgURL={ imgURL } 
                        headingList={ headingList } 
                        content={ content }
                        swap={ swap }
                        key={ count }
                        />
                ))
            }
        </div>
    )
}