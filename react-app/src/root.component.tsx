import React, { useEffect, useState } from 'react';
import Character from "./components/charecter";

export default function Root(props) {
  const [lang, setLang] = useState(localStorage.getItem('lang'))

  useEffect(() => {
    if(lang === ''){setLang('es')}

    function handleLangChanged(event) {
      setLang(event.detail.lang);
    }

    window.addEventListener('langDataEvent', handleLangChanged);

    return () => {
      window.removeEventListener('langDataEvent', handleLangChanged);
    };
  }, []);


  return (
    <section style={{ marginTop: 100 }}>
      <Character name="Testapp" lang={lang}/>
    </section>
  );
}
