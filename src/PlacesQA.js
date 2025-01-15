import norwyImg from "/Norway.jpg"; 
import pisaImg from "/Pisa.jpg";
import russiaImg from "/Russia.jpg";
import australiaImg from "/Australia.jpg";
import franceImg from "/France.jpg";
import germanyImg from "/Germany.jpg";
import londonImg from "/London.jpg";
import irelandImg from "/Ireland.jpg";
import malaysiaImg from "/Malaysia.jpg";

const PlacesQA = [
    {   
        id:0,
        img_location: norwyImg,
        Answer:"Norway",
        Options:["Switzerland","Bolivia", "Nepal", "Norway"] ,
        Fact:"Norway’s Lofoten islands are in the Arctic Circle. The northern lights are visible there eight months a year."        ,
        alt:"image of northern lights in the sky"
    },
    {   
        id:1,
        img_location:pisaImg,
        Answer:"Pisa",
        Options:["Austria","Australia", "Pisa", "Greece"] ,
        Fact:"Pisa’s famed Leaning Tower was once slanted as much as 5.5 degrees from the perpendicular (about 15 feet). After extensive work, the lean is now less than 4 degrees."       , 
        alt:"image of a white tower which is slanting"
    },
    {   
        id:2,
        img_location: russiaImg,
        Answer:"Russia",
        Options:["Russia","Saudi Arabia", "Spain", "Mexico"] ,
        Fact:"The cathedral of Saint Basil the Blessed was built by Ivan the Terrible after his victories over the Kazan and Astrakhan khanates. According to a popular legend, the architect who built the cathedral was blinded so he couldn’t create anything that was its equal."        ,
        alt:"image of colorful spiral structured buildings with snow on them and colorful tops"
    },
    {   
        id:3,
        img_location:australiaImg,
        Answer:"Australia",
        Options:["Kenya","Australia", "China", "Chile"] ,
        Fact:"Uluru, also known as Ayers Rock, rests in Australia’s Northern Territory. It is the world’s largest monolith, reaching over 1,100 feet above the surrounding desert plain and having a circumference of 5.8 miles."       , 
        alt:"sand slike stone stuctures on a deserted yellow colored sand"
    },
    {   
        id:4,
        img_location: franceImg,
        Answer:"France",
        Options:["Denmark","Canada", "France", "Norway"] ,
        Fact:"Located about 10 miles from Paris, the Palace of Versailles—originally a hunting lodge—was the residence of the French king (and seat of the French government) from 1682 to 1789."        ,
        alt:"a gallery with curved glass on top and paintings on the side"
    },
    {   
        id:5,
        img_location:germanyImg,
        Answer:"Germany",
        Options:["Poland","Germany", "England", "Spain"] ,
        Fact:"Atop the Brandenburg Gate is a statue of the goddess of victory on a chariot pulled by four horses, bearing a symbol of peace. When French forces occupied Berlin from 1806 to 1808, Napoleon took the statue and sent it back to Paris as a trophy. Following his defeat, the statue was returned.."       , 
        alt:"a pantheon like structure with 4 pillars supporting the roof in light of the setting sun"
    },
    {   
        id:6,
        img_location:londonImg,
        Answer:"England",
        Options:["United States","Brazil", "England", "Thailand"] ,
        Fact:"The London Eye was built to commemorate the new millennium (it was originally called the Millennium Wheel). Ceremoniously opened on December 31, 1999, the massive Ferris wheel was scheduled to be taken down after five years, but it remains open due to popular demand."       , 
        alt:"a very large ferris wheel by the side of a river"
    },
    {   
        id:7,
        img_location:irelandImg,
        Answer:"Ireland",
        Options:["South Korea","Mexico", "Ireland", "Thailand"] ,
        Fact:"Ireland’s Cliffs of Moher reach 700 feet above the sea and stretch for five miles. The scenic vista has served as a filming location for many movies, from Harry Potter and the Half-Blood Prince to The Princess Bride.",
        alt:"very large cliffs by the side of the sea"
    },
    {   
        id:8,
        img_location:malaysiaImg,
        Answer:"Malaysia",
        Options:["Malaysia","Mexico", "Ireland", "Thailand"] ,
        Fact:"The Petronas Twin Towers in Kuala Lumpur, Malaysia, were once the tallest buildings in the world, from 1996 to 2003.",
        alt:"huge lit connected towers with conical tops "
    }
   ];

export default PlacesQA;