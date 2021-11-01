import React, {useEffect , useState}  from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { nextPlanet, prevPlanets } from '../features/MenuSlice';
import loaderScreen from '../imgs/loaderAnimation.gif'
import requireFunction from './requireFunction'


function PlanetsContent(props) {
const planetNumber = useSelector(state=>state.menu.planets);
const maxPlanet = useSelector(state=>state.menu.maxPlanets)
const dispatch = useDispatch()
const [planet, setPlanet] = useState({});

let backgroundImageControllerLeft = (planetNumber === 1) ? maxPlanet :
    planetNumber - 1 ;
let backgroundImageControllerRight = (planetNumber === maxPlanet) ? 1 :
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
                dispatch(prevPlanets())
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
                    dispatch(prevPlanets())
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
                  dispatch(nextPlanet());
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
                  dispatch(nextPlanet());
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
            dispatch(prevPlanets())
          }}
          style={{width: "25%"}}>
          {String.fromCharCode(8249)}
          </button>
          
           <button className='swithcBtn' onClick={()=> {
              dispatch(nextPlanet());;
            }}
            style={{width: "25%"}}>
              {String.fromCharCode(8250)}
            </button>
        </div>
      
    )}
}

export default PlanetsContent ;
