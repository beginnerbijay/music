import React,{useState,createContext,useEffect ,useRef} from 'react'
import Music from './Music'

export const User = createContext(null)
function App() {
  let fav;
    const [songs, setsongs] = useState([{
      "title" : "Deva Deva",
      "artist": "Arijit Singh, Jonita Gandh",
      "album": "Brahmastra",
      "year": "2022",
      "img": "https://media2.bollywoodhungama.in/wp-content/uploads/2022/09/Brahmastra-%E2%80%93-Part-One-Shiva-9.jpg",
      "src": '/songs/Deva Deva - Brahmastra.mp3',
      fav
    },
    {
      "title" : "Kesariya",
      "artist": "Arijit Singh, Pritam",
      "album": "Brahmastra",
      "year": "2022",
      "img": "https://www.pinkvilla.com/imageresize/alia_bhatt_and_ranbir_kapoors_brahmastra_song_kesariya_to_be_out_tomorrow.jpg?width=752&t=pvorg",
      "src": '/songs/Kesariya - Brahmastra.mp3',
      fav
    },
    {
      "title" : "Haaniya Ve",
      "artist": "Jubin Nautiyal, Tanishk Bagchi, Rashmi Virag",
      "album": "Thank God",
      "year": "2022",
      "img": "https://www.pagalworld.pw/GpE34Kg9Gq/113684/150451-haaniya-ve-jubin-nautiyal-mp3-song-300.jpg",
      "src": '/songs/Haaniya Ve - Jubin Nautiyal.mp3',
      fav
    },
    {
      "title" : "Galliyan",
      "artist": "Ankit Tiwari , Mithoon",
      "album": "Ek Villain",
      "year": "2014",
      "img": "https://srishtimusic.files.wordpress.com/2014/06/ek_villain.png",
      "src": '/songs/01 Galliyan - Ek Villain ( PagalWorld.com ).mp3',
      fav
    },
    {
      "title" : "Aashiqui Aa Gayi",
      "artist": "Arijit Singh, Mithoon",
      "album": "Radhe Shyam",
      "year": "2021",
      "img": "https://www.pagalworld.pw/GpE34Kg9Gq/113598/148126-aashiqui-aa-gayi-radhe-shyam-mp3-song-300.jpg",
      "src": '/songs/Aashiqui Aa Gayi - Radhe Shyam.mp3',
      fav
    },
    {
      "title" : "Chal Ghar Chalen",
      "artist": "Arijit Singh, Mithoon, Sayeed Quadri",
      "album": "Malang",
      "year": "2019",
      "img": "https://www.pagalworld.pw/GpE34Kg9Gq/113464/143535-chal-ghar-chalen-malang-mp3-song-300.jpg",
      "src": '/songs/Chal Ghar Chalen - Malang.mp3',
      fav
    },
    {
      "title" : "Dil Ko Karaar Aaya",
      "artist": "Neha Kakkar, Yasser Desai, Rajat Nagpal",
      "album": "Indian Pop",
      "year": "2020",
      "img": "https://www.pagalworld.pw/GpE34Kg9Gq/113462/143979-dil-ko-karaar-aaya-neha-kakkar-mp3-song-300.jpg",
      "src": '/songs/Dil Ko Karaar Aaya - Neha Kakkar.mp3',
      fav
    },
    {
      "title" : "Khairiyat",
      "artist": "Arijit Singh, Pritam",
      "album": "Chhichhore",
      "year": "2019",
      "img": "https://www.pagalworld.pw/GpE34Kg9Gq/113422/143078-khairiyat-sad-chhichhore-mp3-song-300.jpg",
      "src": '/songs/Khairiyat Sad - Chhichhore.mp3',
      fav
    },
    {
      "title" : "Lut Gaye",
      "artist": "Jubin Nautiyal, Emraan Hashmi, Tanishk Bagchi",
      "album": "Indian Pop",
      "year": "2021",
      "img": "https://www.pagalworld.pw/GpE34Kg9Gq/113514/144940-lut-gaye-jubin-nautiyal-mp3-song-300.jpg",
      "src": '/songs/Lut Gaye - Jubin Nautiyal.mp3',
      fav
    },
    {
      "title" : "Raataan Lambiyan",
      "artist": "Jubin Nautiyal, Asees Kaur, Tanishk Bagchi",
      "album": "Shershaah",
      "year": "2021",
      "img": "https://www.pagalworld.pw/GpE34Kg9Gq/113558/145809-raataan-lambiyan-shershaah-mp3-song-300.jpg",
      "src": '/songs/Raataan Lambiyan - Shershaah.mp3',
      fav
    },
    {
      "title" : "Ranjha",
      "artist": "B Praak, Jasleen Royal",
      "album": "Shershaah",
      "year": "2021",
      "img": "https://www.pagalworld.pw/GpE34Kg9Gq/113558/145847-ranjha-shershaah-mp3-song-300.jpg",
      "src": '/songs/Ranjha - Shershaah.mp3',
      fav
    },
    {
      "title" : "Tujhe Kitna Chahne Lage",
      "artist": "Arijit Singh",
      "album": "Kabir Singh",
      "year": "2019",
      "img": "https://www.pagalworld.pw/GpE34Kg9Gq/14697/142750-tujhe-kitna-chahne-lage-kabir-singh-mp3-song-300.jpg",
      "src": '/songs/Tujhe Kitna Chahne Lage - Kabir Singh.mp3',
      fav
    }])
    const [currentSongIndex,setCurrentSongIndex] = useState(0);
    const [nextSongIndex,setNextSongIndex] = useState(currentSongIndex + 1);
    const [Playing, setPlaying] = useState(false);
    let audioElement = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);
    useEffect(()=>{
      setNextSongIndex(()=>{
      if (currentSongIndex + 1 >songs.length - 1 ){
        return 0;
      } else{
        return currentSongIndex + 1;
      }
    });
    },[currentSongIndex])

  return (
    <User.Provider value={{songs,currentSongIndex,setCurrentSongIndex,nextSongIndex,Playing,setPlaying,audioElement,currentTime,setCurrentTime}}>
    <Music/>
    </User.Provider>
  )
}

export default App