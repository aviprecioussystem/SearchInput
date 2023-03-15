// import React, { useState, useEffect } from "react";
// import axios from "axios";
// const EmojiSearch = () => {
//     const [emojiList, setEmojiList] = useState([]);
//     const [searchTerm, setSearchTerm] = useState("");
//     useEffect(() => {
//         axios
//             .get(
//                 "https://raw.githubusercontent.com/ahfarmer/emoji-search/master/src/emojiList.json"
//             )
//             .then((result) => setEmojiList(result.data))
//             .catch((error) => console.error(error));
//     }, []);
//     const handleSearch = (e) => {
//         setSearchTerm(e.target.value);
//     };
//     const filteredEmojiList =
//         searchTerm !== ""
//             ? emojiList.filter((emoji) => {
//                 return emoji.title.toLowerCase().startsWith(searchTerm.toLowerCase());
//             })
//             : [];
//     return (
//         <div>
//             <input
//                 type="text"
//                 placeholder="Search emojis by title"
//                 value={searchTerm}
//                 onChange={handleSearch}
//             />
//             <ul>
//                 {filteredEmojiList.map((emoji) => (
//                     <li key={emoji.title}>
//                         {emoji.symbol} {emoji.title}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };
// export default EmojiSearch;