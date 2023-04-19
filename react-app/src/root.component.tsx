import React, { useEffect, useState } from 'react';
import App from "./App";

export default function Root(props) {
  const [lang, setLang] = useState('')

  useEffect(() => {
    function handleLangChanged(event) {
      setLang(event.detail.lang);
      console.log("evento", event)
    }

    window.addEventListener('langDataEvent', handleLangChanged);

    return () => {
      window.removeEventListener('langDataEvent', handleLangChanged);
    };
  }, []);


  return (
    <section style={{ marginTop: 100 }}>
      <App name="Testapp" lang={lang}/>
    </section>
  );
}
