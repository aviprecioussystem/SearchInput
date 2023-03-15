export const baseUrl = 'https://raw.githubusercontent.com/ahfarmer/emoji-search/master/src'

export const getFilteredListItems = (list, text) => {

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