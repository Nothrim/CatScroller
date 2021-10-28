import {useState, useEffect} from 'react'

export const ScrollHook = (callback: Function): [boolean, (val: boolean) => void] => {
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, []);

    useEffect(() => {
        if (!isFetching) return;
        callback()
    }, [isFetching]);

    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight -50
            || isFetching) return;
        setIsFetching(true);
    }

    return [isFetching, setIsFetching];
};
