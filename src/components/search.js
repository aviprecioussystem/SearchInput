import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SearchComponent = () => {

    const [text, setText] = useState('')
    const [users, setUsers] = useState([])

    const autoComponent = async () => {
        const url = 'https://raw.githubusercontent.com/ahfarmer/emoji-search/master/src/emojiList.json'
        const response = await axios.get(url)
        setUsers(response.data)
    }

    useEffect(() => {
        autoComponent()
    }, [])

    const onChangeHandler = (e) => {
        setText(e.target.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(text)
    }

    const getFilteredListItems = (list, text) => {

        if (text.length > 0 && text !== "") {
            return list.filter((item => {
                const lowerTitle = item.title.toLowerCase();
                text = text.toLowerCase();
                return lowerTitle === text ||
                    lowerTitle.startsWith(text)
            }))
        }

        return [];
    }

    const filteredList = getFilteredListItems(users, text)

    return (
        <>
            <div>SearchComponent</div>
            <form onSubmit={onSubmitHandler}>
                <input type='text' value={text} onChange={onChangeHandler} />
                <button >Click</button>
            </form>
            <div>
                <ul style={{ listStyle: 'none' }}>
                    {filteredList.map((value, index) => <li key={index + "id_list"}>
                        <span>{value.symbol} </span>
                        <span>{value.title}</span>
                    </li>)}
                </ul>
            </div>
        </>
    )
}
export default SearchComponent