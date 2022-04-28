import { useState, useEffect, useRef } from "react"

export const useFetch = (url) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({data:null, loading:true, error:null})

    useEffect(() => {

        return () => {
            isMounted.current=false;
        }

    }, [])


    useEffect(() => {

        setState({data:null, loading:true, error:null}) // para que aparezca el loading

        fetch(url).then(res => res.json()).then(data => {

                if(isMounted.current){  // para que no se ejecute despues de que se desmonta el componente
                    setState({
                        data,
                        loading: false,
                        error: null
                    })
                } 
        });
    },[url])

    return state;

}
