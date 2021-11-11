import MenuBookIcon from "@mui/icons-material/MenuBook";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SettingsVoiceIcon from "@mui/icons-material/SettingsVoice";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import DescriptionIcon from "@mui/icons-material/Description";



const Services = [
    
    {
      id: 1,
      title: "Book",
      icon: <MenuBookIcon style={{fontSize:"40px", color: "#57617A"}}/>
   },
    {
      id: 2,
      title: "Audiobooks",
      icon: <HeadphonesIcon style={{fontSize:"40px", color: "#57617A"}}/>
   },
    {
      id: 3,
      title: "Magazines",
      icon: <LibraryBooksIcon style={{fontSize:"40px", color: "#57617A"}}/>
   },
    {
      id: 4,
      title: "Podcasts",
      icon: <SettingsVoiceIcon style={{fontSize:"40px", color: "#57617A"}}/>
   },
    {
      id: 5,
      title: "Sheet Music",
      icon: <MusicNoteIcon style={{fontSize:"40px", color: "#57617A"}}/>
   },
    {
      id: 6,
      title: "Documents",
      icon: <DescriptionIcon style={{fontSize:"40px", color: "#57617A"}}/>
   },
]

export default Services;