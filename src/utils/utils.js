import { useState } from "react";
import i18n from "../i18n";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

export function getBaseUrl() {
  const [baseUrl, setBaseUrl] = useState("/");
  const { lng } = useParams();
  useEffect(() => {
    if (!lng) return;
    const newUrl = lng === i18n.options.fallbackLng[0] ? "" : lng;
    setBaseUrl("/" + newUrl);
  }, [lng]);
  return { baseUrl, setBaseUrl };
}

export const useBasePath = () => {
  const location = useLocation();
  const { lng } = useParams();
  return location.pathname.replace("/" + lng, "");
};
