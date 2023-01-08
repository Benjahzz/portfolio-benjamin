import { useState } from "react";
import i18n from "../i18n";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function getBaseUrl () {
    const [baseUrl,setBaseUrl] = useState("/")
    const {lng} = useParams();
    useEffect(()=>{
        if(!lng) return;
        const newUrl = lng === i18n.options.fallbackLng[0]? "" : lng; 
        setBaseUrl("/" + newUrl)
        console.log(lng)
    },[lng]) 
    return {baseUrl,setBaseUrl}
}