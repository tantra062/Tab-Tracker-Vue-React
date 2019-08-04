import React from 'react';

function useBoomark(songId){
    const [isBookmark, setIsBookmark] = useState([]);
    useEffect(() => {
        function handleBookmarkStatus(status){
            setBookmark(status.isBookmark);
            console.log('SETBOOKMARK')
        }


        console.log('CHECK IF BOOKMARKED?')
        return () => {
            // cleanup
        };
    })
    return isBookmark;
}

export default useBoomark;