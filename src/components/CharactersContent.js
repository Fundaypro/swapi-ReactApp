import React, {useEffect , useState}  from 'react'
import loaderScreen from '../imgs/loaderAnimation.gif'
import requireFunction from './requireFunction'

  
function CharacterContent() {
  
  const [people, setPeople] = useState({})
  const [planet, setPlanet] = useState({})
  const [charNumber , setCharNumber] = useState(1)
  const [loadingStatus, setLoadingStatus] = useState(false)
  let backgroundImageControllerLeft = (charNumber === 1) ? 15 :
    charNumber - 1 ;
  let backgroundImageControllerRight = (charNumber === 15) ? 1 :
    charNumber + 1;
  let URL = 'https://swapi.dev/api/people/'+ charNumber +'/?format=json'
  useEffect(()=> {
  
  console.log("loadingCharacter");
  requireFunction(URL)
    .then(json => {
      if (json !== 'error') {
        setLoadingStatus(true)
        setPeople(json)
        return json
      } else if (json === 'error') setLoadingStatus(false)
      })
      .then(data => requireFunction(data.homeworld + "?format=json"))
        .then(json => {
          if (json !== 'error') {
            setLoadingStatus(true)
            setPlanet(json)
            return json
          } else if (json === 'error') setLoadingStatus(false)
        })

  }, [charNumber]);  

  if (loadingStatus === false) {
    return (
      <div className="uploadetConten" style={{  
        backgroundImage: 'url(' + loaderScreen + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '50%'
      }} >
          <button className='swithcBtn' onClick={()=> {
            if (charNumber === 1) setCharNumber(15);
            if (charNumber > 1) setCharNumber(charNumber - 1)
          }}
          style={{width: "25%"}}>
          {String.fromCharCode(8249)}
          </button>
          
           <button className='swithcBtn' onClick={()=> {
              if (charNumber === 15)setCharNumber(1);
              if (charNumber < 15) setCharNumber(charNumber + 1);
            }}
            style={{width: "25%"}}>
              {String.fromCharCode(8250)}
            </button>
        </div>
      
    )}
   if (loadingStatus === true) {
    return (
      <div className='contentInner'>
        <div className="uploadetConten" style={{  
          backgroundImage: 'url(' + require('../imgs/characters/'+ (backgroundImageControllerLeft) +'.jpeg') + ')',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }} >
          <button className='swithcBtn' onClick={()=> {
            if (charNumber === 1) setCharNumber(15);
            if (charNumber > 1) setCharNumber(charNumber - 1)
          }}>
          {String.fromCharCode(8249)}
          </button>
        </div>
      
      <div className="uploadetConten" style={{  
        backgroundImage: 'url(' + require('../imgs/characters/'+ charNumber +'.jpeg') + ')',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }} >
          <button className='swithcBtn' onClick={()=> {
            if (charNumber === 1) setCharNumber(15);
            if (charNumber > 1) setCharNumber(charNumber - 1)
          }}>
          {String.fromCharCode(8249)}
          </button>
          <div>
            <p className="infoString">Name : {people.name}</p>
            <p className="infoString">Gender : {people.gender}</p>
            <p className="infoString">Birth year : {people.birth_year}</p>
            <p className="infoString">From planet: {planet.name}</p>
           </div>
           <button className='swithcBtn' onClick={()=> {
              if (charNumber === 15)setCharNumber(1);
              if (charNumber < 15) setCharNumber(charNumber + 1);
            }}>
              {String.fromCharCode(8250)}
            </button>
        </div>
        <div className="uploadetConten" style={{  
          backgroundImage: 'url(' + require('../imgs/characters/'+ (backgroundImageControllerRight ) +'.jpeg') + ')',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }} >
          <button className='swithcBtn' onClick={()=> {
              if (charNumber === 15)setCharNumber(1);
              if (charNumber < 15) setCharNumber(charNumber + 1);
            }}>
              {String.fromCharCode(8250)}
            </button>
        </div>
        </div>
        
        
    );}
  
}  
   
    
    
        
        
export default CharacterContent;



