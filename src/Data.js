import web from '../src/images/img1.svg';
import web1 from '../src/images/web1.jpg';
import camera from '../src/images/camera.jpg';
import game from '../src/images/game.jpg';
import graphic from '../src/images/graphic.jpg';
import market from '../src/images/market.jpg';
import prj from '../src/images/prj.jpg';


// json type data file used to render info to the cars 
// array of objects
const Data = [ 
    {
        imgsrc: web1,
        title: "Web Development",
        description: "Hire a team of highly talented individuals to help you create your optimum online presence.",
    },
    {
        imgsrc: graphic,
        title: "Graphic Design",
        description: "All good websites have 1 thing in common and that is a good design. That's where we step in.",
    },
    {
        imgsrc: market,
        title: "Affiliate Marketing",
        description: "Simply having your services out there isn't enough. You need to get in touch with the right audience in order for your business to truly succed.",
    },
    {
        imgsrc: game,
        title: "Game Development",
        description: "All work and no play makes you a boring guy. But work where game is a part of your life isn't anything short of exciting.",
    },
    {
        imgsrc: web,
        title: "Product Design",
        description: "Emaculate product design is winning half the battle.",
    },
    {
        imgsrc: prj,
        title: "Project Management",
        description: "Managing a work load of such high in demand skills and tasks can be a daunting affair for some but not for our guys. Hire them and breathe a sigh of relief.",
    },
    {
        imgsrc: camera,
        title: "Portrait Photography",
        description: "Photography. That is all",
    }
]

export default Data