import React, { useEffect, useState } from 'react'
import './css/PlayStation.css'
import GamesCard from './GamesCard'
function PlayStation5() {
  const games =  [
    {
        name : "Marvel's Spider-Man: Miles Morales",
        description : "Marvel's Spider-Man: Miles Morales is a 2020 action-adventure video game developed by Insomniac Games and published by Sony Interactive Entertainment.",
        imageURL : "https://image.api.playstation.com/vulcan/ap/rnd/202008/1420/HcLcfeQBXd2RiQaCeWQDCIFN.jpg",
        infoUrl : "https://insomniac.games/game/marvels-spider-man-miles-morales/",
        buyURL : "https://www.playstation.com/en-in/games/marvels-spider-man-miles-morales/#buy-now"
    },{
       name : "God of War Ragnarök",
       description : "God of War Ragnarök is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment. It was released worldwide on November 9, 2022, for the PlayStation 4 and PlayStation 5.",
       imageURL : "https://images.alphacoders.com/117/thumb-1920-1173124.jpg",
       infoUrl : "https://www.playstation.com/en-in/games/god-of-war-ragnarok/",
        buyURL : "https://www.amazon.in/God-Ragnarok-Launch-Game-PlayStation/dp/B0B68KX5KQ?th=1"
    },{
        name : "Tekken 7",
        description : "Tekken 7 is a fighting game developed and published by Bandai Namco Entertainment. It is the seventh main and ninth overall installment in the Tekken series.Tekken 7 was released to arcades in March 2015.",
        imageURL : "https://wallpapercave.com/wp/wp2570398.png",
        infoUrl : "https://en.bandainamcoent.eu/tekken/tekken-7",
        buyURL : "https://www.bandainamcoent.com/games/tekken-7#editions"
     },{
        name : "Uncharted 4: A Thief's End",
        description : "Uncharted 4: A Thief's End is a 2016 action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment. It is the fourth main entry in the Uncharted series.",
        imageURL : "https://wallpapercave.com/wp/wp2272919.jpg",
        infoUrl : "https://www.playstation.com/en-in/games/uncharted-4-a-thiefs-end/",
        buyURL : "https://www.amazon.in/Uncharted-4-Thiefs-End-PS4/dp/B01AHLUVX2"
     },{
        name : "Grand Theft Auto V",
        description : "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overall.",
        imageURL : "https://c4.wallpaperflare.com/wallpaper/100/649/280/gta-5-in-photoshop-grand-theft-auto-five-wallpaper-preview.jpg",
        infoUrl : "https://www.rockstargames.com/gta-v",
        buyURL : "https://www.rockstargames.com/gta-v?info=order"
     },{
        name : "Resident Evil 2",
        description : "The player controls rookie cop Leon S. Kennedy and college student Claire Redfield, who must escape Raccoon City after its citizens are transformed into zombies by a biological weapon two months after the events of the original Resident Evil.",
        imageURL : "https://i.pinimg.com/originals/c8/9e/8d/c89e8db7043f090c3baccfbd6f86e3bc.jpg",
        infoUrl : "https://www.residentevil2.com/",
        buyURL : "https://www.amazon.in/Resident-Evil-2-PlayStation-4/dp/B07DJW779T?th=1"
     },{
        name : "Red Dead Redemption 2",
        description : "Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and a prequel to the 2010 game Red Dead Redemption.",
        imageURL : "https://images.ctfassets.net/wn7ipiv9ue5v/3ktrooKksc4qmuEZZtasm9/a22c31ddb0f5d536b4187aa79f8c4539/RDR2_CompareEditions_Ultimate_1632x831.jpg",
        infoUrl : "https://www.rockstargames.com/reddeadredemption2/",
        buyURL : "https://www.rockstargames.com/reddeadredemption2/order"
     },{
        name : "The Last of Us Part II",
        description : "The Last of Us Part II is a 2020 action-adventure game developed by Naughty Dog and published by Sony Interactive Entertainment for the PlayStation 4.",
        imageURL : "https://c4.wallpaperflare.com/wallpaper/785/129/102/the-last-of-us-2-naughty-dog-playstation-ellie-the-last-of-us-part-ii-hd-wallpaper-preview.jpg",
        infoUrl : "https://www.playstation.com/en-in/games/the-last-of-us-part-ii/",
        buyURL : "https://www.playstation.com/en-in/games/the-last-of-us-part-ii/#buy-now"
     },{
        name : "Prince of Persia: The Forgotten Sands",
        description : "Prince of Persia The Forgotten Sands is the next chapter in the fan-favorite Sands of Time universe. Visiting his brother's kingdom following his adventure in Azad, the Prince finds the royal palace under siege from a mighty army bent on its destruction.",
        imageURL : "https://wallpapercave.com/wp/wp3612502.jpg",
        infoUrl : "https://www.ubisoft.com/en-gb/game/prince-of-persia/the-forgotten-sands",
        buyURL : "https://www.ubisoft.com/en-gb/game/prince-of-persia/the-forgotten-sands#18JTJr6vQacgHWbyPbN96I"
     },{
        name : "Assassin's Creed Valhalla",
        description : "Become Eivor, a Viking raider raised to be a fearless warrior, and lead your clan from icy desolation in Norway to a new home amid the lush farmlands of ninth-century England. Find your settlement and conquer this hostile land by any means to earn a place in Valhalla",
        imageURL : "https://images.alphacoders.com/107/1077459.jpg",
        infoUrl : "https://www.ubisoft.com/en-gb/game/assassins-creed/valhalla",
        buyURL : "https://www.ubisoft.com/en-gb/game/assassins-creed/valhalla/buy"
     },{
        name : "Devil May Cry 5",
        description : "Devil May Cry 5 is a 2019 action-adventure game developed and published by Capcom. It is the sixth installment overall and the fifth mainline installment in the Devil May Cry series.",
        imageURL : "https://images6.alphacoders.com/926/thumb-1920-926723.jpg",
        infoUrl : "https://www.devilmaycry.com/5/us/",
        buyURL : "https://www.devilmaycry.com/5/us/"
     },{
        name : "Rise of the Tomb Raider",
        description : "Rise of the Tomb Raider is a 2015 action-adventure video game developed by Crystal Dynamics and published by Microsoft Studios and Square Enix's European subsidiary. The game is the eleventh main entry in the Tomb Raider series, the sequel to the 2013's Tomb Raider, and is the second instalment in the Survivor trilogy.",
        imageURL : "https://images2.alphacoders.com/597/597950.jpg",
        infoUrl : "https://www.crystald.com/projects/rise-of-the-tomb-raider/",
        buyURL : "https://store.epicgames.com/en-US/p/rise-of-the-tomb-raider"
     }
  ]

//   function func(e){
//     if(e === null || e.length === 0) return "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam eveniet eos delectus temporibus! Quia facere aliquam ex beatae, numquam minima.";
//     if(e.length > 101) return e.slice(0,130) + "...";
//     else return e;
//   }  
  return (
    <div className = "mygamescontainer">
        {
            games.map((item,idx)=>{
                return (
                    <GamesCard key={idx} name={item.name} desc = {item.description} imgg = {item.imageURL} detailUrl = {item.infoUrl}
                     buyURL = {item.buyURL} />
                );
            })
        }
    </div>
  )
}

export default PlayStation5
