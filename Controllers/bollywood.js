const bollywood = (req,res)=>{
    res.send(
      [
        {
            "id":1,
            "caption":"Shahruk Khan",
            "details":"Shah Rukh Khan , also known by the initialism SRK, is an Indian actor, film producer, and television personality who works in Hindi films. Referred to in the media as the 'Baadshah of Bollywood' (in reference to his 1999 film Baadshah), 'King of Bollywood' and 'King Khan'",
            "icon":"https://th.bing.com/th/id/OIP.9tWb9OCfS2JjpSXiKLfDpQHaJX?pid=ImgDet&rs=1"
        },
    
        {
            "id":2,
            "caption":"Shraddha Kapoor",
            "details":"Shraddha Kapoor (born 3 March 1987 or 1989 ) is an Indian actress who works in Hindi-language films. She features in listings of the most popular and highest-paid actresses in the country. She has been featured in Forbes India's Celebrity 100 list since 2014 and was featured by Forbes Asia in their 30 Under 30",
            "icon":"https://images.mid-day.com/images/images/2014/dec/29-Shraddha-Kapoor_l.jpg"
        },
    
        {
            "id":3,
            "caption":"Amitabh bachchan",
            "details":"Amitabh Bachchan is an Indian actor, film producer, television host, occasional playback singer and former politician known for his work in Hindi cinema. He is regarded as one of the most influential actors in the history of Indian cinema.",
            "icon":"https://th.bing.com/th/id/R.fbb47cb790f690050d25d88f9d34ac96?rik=NEROvMK3f6N1tQ&riu=http%3a%2f%2fwallsdesk.com%2fwp-content%2fuploads%2f2016%2f12%2fAmitabh-Bachchan-Background-.jpg&ehk=QzyG9aTUJ9KRkmvH5REmeIJoBborDOoiZXOZsgz%2brEE%3d&risl=&pid=ImgRaw&r=0"
        },
    
        {
            "id":4,
            "caption":"deepika padukone",
            "details":"Deepika Padukone is an Indian actress who works in Hindi films. She is one of the highest-paid actresses in India, and her accolades include three Filmfare Awards. She features in listings of the nation's most popular personalities, and Time named her one of the 100 most influential people in the world in 2018 ",
            "icon":"https://th.bing.com/th/id/OIP.mF2tCDUJgBQPhaXvhbI9jwHaFc?pid=ImgDet&rs=1"
        },
    
        {
            "id":5,
            "caption":"Anil Kapoor",
            "details":"Anil Kapoor (born 24 December 1956) is an Indian actor and producer who works primarily in Hindi films, besides television and international films and television. In a career spanning over 40 years as an actor and since 2005 as a producer, Kapoor has appeared in more than 100 films.",
            "icon":"https://i2.cinestaan.com/image-bank/1500-1500/59001-60000/59689.jpg"
        }
    
    
    ],
        
    )
}

module.exports.bollywoodData = bollywood;