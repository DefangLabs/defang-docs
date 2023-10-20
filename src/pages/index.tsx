import { useEffect } from 'react';


export default function Home() {
  useEffect(() => {
    window.location.href = 'https://defang.io/';
  }, []);

  return null;
}
