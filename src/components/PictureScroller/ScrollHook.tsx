import {useState, useEffect} from 'react'

export const ScrollHook = (callback: Function): [boolean, (val: boolean) => void] => {
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, []);

    useEffect(() => {
        if (!isFetching) return;
        callback(() => {
            console.log("called back");
        })
    }, [isFetching]);

    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight
            || isFetching) return;
        setIsFetching(true);
    }

    return [isFetching, setIsFetching];
};