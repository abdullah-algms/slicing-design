//
import { useEffect, useState } from 'react'

export default function Header() {
  const [headerVisible, setHeaderVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
    const totalHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollPosition === 0) {
      if (!headerVisible) {
        setHeaderVisible(true);
      }
    } else if (totalHeight - windowHeight <= scrollPosition) {
    
      if (headerVisible) {
      setHeaderVisible(false);
      }
    }
  };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [headerVisible]);
  
  return (
    <>
      <div id="header" className="fixed bottom-0 left-0 z-50 w-[390px] h-[77px] flex-shrink-0" style={{ borderRadius: '0px 0px 40px 40px', background: '#FDFDFD' }}>
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        
          <div className="inline-flex flex-col items-center justify-center group px-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13.2024 2.86559C12.872 2.56875 12.4436 2.40454 11.9994 2.40454C11.5553 2.40454 11.1268 2.56875 10.7964 2.86559L4.19641 8.79599C4.00875 8.96474 3.85868 9.17107 3.75594 9.40157C3.65319 9.63208 3.60006 9.88162 3.60001 10.134V18.6C3.60001 19.0774 3.78965 19.5352 4.12721 19.8728C4.46478 20.2103 4.92262 20.4 5.40001 20.4H7.80001C8.2774 20.4 8.73523 20.2103 9.0728 19.8728C9.41036 19.5352 9.60001 19.0774 9.60001 18.6V13.8C9.60001 13.6409 9.66322 13.4882 9.77574 13.3757C9.88826 13.2632 10.0409 13.2 10.2 13.2H13.8C13.9591 13.2 14.1117 13.2632 14.2243 13.3757C14.3368 13.4882 14.4 13.6409 14.4 13.8V18.6C14.4 19.0774 14.5896 19.5352 14.9272 19.8728C15.2648 20.2103 15.7226 20.4 16.2 20.4H18.6C19.0774 20.4 19.5352 20.2103 19.8728 19.8728C20.2104 19.5352 20.4 19.0774 20.4 18.6V10.134C20.3999 9.88162 20.3468 9.63208 20.2441 9.40157C20.1413 9.17107 19.9913 8.96474 19.8036 8.79599L13.2036 2.86559H13.2024Z" fill="black"/></svg>
          </div>
          
          <div className="inline-flex flex-col items-center justify-center group px-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M10.5 17.25H16.5V18.75H10.5V17.25ZM7.5 17.25H9V18.75H7.5V17.25ZM10.5 13.5H16.5V15H10.5V13.5ZM7.5 13.5H9V15H7.5V13.5ZM10.5 9.75H16.5V11.25H10.5V9.75ZM7.5 9.75H9V11.25H7.5V9.75Z" fill="black"/><path d="M18.75 3.75H16.5V3C16.5 2.60218 16.342 2.22064 16.0607 1.93934C15.7794 1.65804 15.3978 1.5 15 1.5H9C8.60218 1.5 8.22064 1.65804 7.93934 1.93934C7.65804 2.22064 7.5 2.60218 7.5 3V3.75H5.25C4.85218 3.75 4.47064 3.90804 4.18934 4.18934C3.90804 4.47064 3.75 4.85218 3.75 5.25V21C3.75 21.3978 3.90804 21.7794 4.18934 22.0607C4.47064 22.342 4.85218 22.5 5.25 22.5H18.75C19.1478 22.5 19.5294 22.342 19.8107 22.0607C20.092 21.7794 20.25 21.3978 20.25 21V5.25C20.25 4.85218 20.092 4.47064 19.8107 4.18934C19.5294 3.90804 19.1478 3.75 18.75 3.75ZM9 3H15V6H9V3ZM18.75 21H5.25V5.25H7.5V7.5H16.5V5.25H18.75V21Z" fill="black"/></svg>
          </div>
          
          <div className="inline-flex flex-col items-center justify-center group px-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 5.15C4 4.31457 4.33187 3.51335 4.92261 2.92261C5.51335 2.33187 6.31457 2 7.15 2H15.85C16.6854 2 17.4866 2.33187 18.0774 2.92261C18.6681 3.51335 19 4.31457 19 5.15V20.75C18.9999 20.888 18.9616 21.0233 18.8895 21.141C18.8174 21.2587 18.7142 21.3543 18.5913 21.4171C18.4684 21.4799 18.3305 21.5076 18.1929 21.497C18.0553 21.4865 17.9232 21.4383 17.8113 21.3575L11.5 16.8013L5.18875 21.3575C5.0768 21.4383 4.94474 21.4865 4.80711 21.497C4.66948 21.5076 4.53162 21.4799 4.4087 21.4171C4.28579 21.3543 4.1826 21.2587 4.11049 21.141C4.03837 21.0233 4.00014 20.888 4 20.75V5.15ZM7.15 3.5C6.71239 3.5 6.29271 3.67384 5.98327 3.98327C5.67384 4.29271 5.5 4.71239 5.5 5.15V19.283L11.0612 15.2668C11.189 15.1746 11.3425 15.125 11.5 15.125C11.6575 15.125 11.811 15.1746 11.9387 15.2668L17.5 19.283V5.15C17.5 4.71239 17.3262 4.29271 17.0167 3.98327C16.7073 3.67384 16.2876 3.5 15.85 3.5H7.15Z" fill="black"/></svg>
          </div>
          
          <div className="inline-flex flex-col items-center justify-center group px-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C11.0111 2 10.0444 2.29324 9.22215 2.84265C8.3999 3.39206 7.75904 4.17295 7.3806 5.08658C7.00216 6.00021 6.90315 7.00555 7.09607 7.97545C7.289 8.94536 7.7652 9.83627 8.46447 10.5355C9.16373 11.2348 10.0546 11.711 11.0245 11.9039C11.9945 12.0969 12.9998 11.9978 13.9134 11.6194C14.827 11.241 15.6079 10.6001 16.1573 9.77785C16.7068 8.95561 17 7.98891 17 7C17 5.67392 16.4732 4.40215 15.5355 3.46447C14.5979 2.52678 13.3261 2 12 2ZM12 10C11.4067 10 10.8266 9.82405 10.3333 9.49441C9.83994 9.16476 9.45542 8.69623 9.22836 8.14805C9.0013 7.59987 8.94189 6.99667 9.05764 6.41473C9.1734 5.83279 9.45912 5.29824 9.87868 4.87868C10.2982 4.45912 10.8328 4.1734 11.4147 4.05764C11.9967 3.94189 12.5999 4.0013 13.1481 4.22836C13.6962 4.45542 14.1648 4.83994 14.4944 5.33329C14.8241 5.82664 15 6.40666 15 7C15 7.79565 14.6839 8.55871 14.1213 9.12132C13.5587 9.68393 12.7956 10 12 10ZM21 21V20C21 18.1435 20.2625 16.363 18.9497 15.0503C17.637 13.7375 15.8565 13 14 13H10C8.14348 13 6.36301 13.7375 5.05025 15.0503C3.7375 16.363 3 18.1435 3 20V21H5V20C5 18.6739 5.52678 17.4021 6.46447 16.4645C7.40215 15.5268 8.67392 15 10 15H14C15.3261 15 16.5979 15.5268 17.5355 16.4645C18.4732 17.4021 19 18.6739 19 20V21H21Z" fill="black"/></svg>
          </div>
          
        </div>
      </div>
    </>
  )
}