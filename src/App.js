import React, {useState, useEffect} from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  // 1*
  const [loading, setLoading] = useState(true);

  // 2* const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

const removeTour = (id) => {
  const newTours = tours.filter((tour) => tour.id);
  setTours(newTours);
}
// 5*
  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      console.log(tours);
      setLoading(false);
      setTours(tours) ;

    } catch (error){
      setLoading(false);
      console.log(error);

    }
    // const response = await fetch(url);
    // const tours = await response.json();
    // console.log(tours);
  };

// 6*
  useEffect(() => {
    fetchTours();
  }, []);

// 3*
  if (Loading) {
    return (<main>
      <Loading/>
    </main>);
  }

if(tours.length === 0) {
  return (
    <main>
      <div className = 'title'>
        <h2>no tours left</h2>
        <button onClick={fetchTours}>refresh</button>
      </div>
    </main>
  )
}
// 4*
  return ( //<h2>Tours Project Setup</h2>
      <main>
        <Tours
        tours = {tours} removeTour={removeTour}/>
      </main>);
}

export default App
