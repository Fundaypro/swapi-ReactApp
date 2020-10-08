import React, {useEffect , useState}  from 'react'
import loaderScreen from '../imgs/loaderAnimation.gif'
import requireFunction from './requireFunction'


function PlanetsContent() {
const [planetNumber, setPlanetNumber] = useState(1);
const [planet, setPlanet] = useState({});
let backgroundImageControllerLeft = (planetNumber === 1) ? 14 :
    planetNumber - 1 ;
let backgroundImageControllerRight = (planetNumber === 14) ? 1 :
    planetNumber + 1;
const [loadingStatus, setLoadingStatus] = useState(false)
let URL = 'https://swapi.dev/api/planets/'+planetNumber+'/?format=json'

useEffect(()=>{
    console.log('loadingPlanets');
    requireFunction(URL).then(json => {
        if(json !== 'error') {
        setLoadingStatus(true)
        setPlanet(json)
        }else if (json === 'error'){
            console.log('load failed')
            setLoadingStatus(false)
        } 
    })

    },[planetNumber])

if (loadingStatus === true) {
    return (
        <div className="contentInner">
            <div className="uploadetConten" style={{  
              backgroundImage: 'url(' + require('../imgs/planets/'+ (backgroundImageControllerLeft) +'.jpeg') + ')',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }} >
              <button className='swithcBtn' onClick={()=> {
                if (planetNumber === 1) setPlanetNumber(14);
                if (planetNumber > 1) setPlanetNumber(planetNumber - 1)
              }}>
              {String.fromCharCode(8249)}
              </button>
            </div>
        
            <div className="uploadetConten" style={{  
                backgroundImage: 'url(' + require('../imgs/planets/'+ planetNumber +'.jpeg') + ')',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <button className='swithcBtn' onClick={()=> {
                    if (planetNumber === 1) setPlanetNumber(14);
                    if (planetNumber > 1) setPlanetNumber(planetNumber - 1)
                }}>
                  {String.fromCharCode(8249)}
                </button>
                <div>
                    <p className="infoString">Name : {planet.name}</p>
                    <p className="infoString">Diameter : {planet.diameter + ' km'}</p>
                    <p className="infoString">Climate : {planet.climate}</p>
                    <p className="infoString">Population : {'~' + planet.population}</p>
                    <p className="infoString">Terrain : {planet.terrain}</p>
                </div>
                <button className='swithcBtn' onClick={()=> {
                  if (planetNumber === 14)setPlanetNumber(1);
                  if (planetNumber < 14) setPlanetNumber(planetNumber + 1);
                }}>
                  {String.fromCharCode(8250)}
                </button>
            </div>
            <div className="uploadetConten" style={{  
              backgroundImage: 'url(' + require('../imgs/planets/'+ (backgroundImageControllerRight ) +'.jpeg') + ')',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }} >
              <button className='swithcBtn' onClick={()=> {
                  if (planetNumber === 14)setPlanetNumber(1);
                  if (planetNumber < 14) setPlanetNumber(planetNumber + 1);
                }}>
                  {String.fromCharCode(8250)}
                </button>
            </div>
        </div>
)}
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
            if (planetNumber === 1) setPlanetNumber(14);
            if (planetNumber > 1) setPlanetNumber(planetNumber - 1)
          }}
          style={{width: "25%"}}>
          {String.fromCharCode(8249)}
          </button>
          
           <button className='swithcBtn' onClick={()=> {
              if (planetNumber === 14)setPlanetNumber(1);
              if (planetNumber < 14) setPlanetNumber(planetNumber + 1);
            }}
            style={{width: "25%"}}>
              {String.fromCharCode(8250)}
            </button>
        </div>
      
    )}
}

export default PlanetsContent ;
