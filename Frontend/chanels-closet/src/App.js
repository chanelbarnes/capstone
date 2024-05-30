import './App.css';
import axios from "axios";
import {useState, useEffect} from "react";
import Header from './components/Header/Header';
import Weather from './components/Weather/Weather';
import Footer from './components/Footer/Footer';
import SearchBar from './components/Weather/SearchBar';
// import ProductFunc from './components/Body/Product'
// import User from './components/Body/User'

function App(){
 // Weather State
 const [weatherData, setWeatherData] = useState([])
 const [searchTerm, setSearchTerm] = useState("Newark NJ")

 const fetchWeather = async (city) => {
  const URL = `http://api.weatherapi.com/v1/forecast.json?key=fa99ab127a1f4de2a6000417242905&q=${city}`
  const response = await fetch(URL)
  const data = await response.json()
    console.log(data)
      setWeatherData(prevWeatherData => [...prevWeatherData, data])
 }

 

  //  --------------useEffect
  useEffect (() => {
    fetchWeather(searchTerm)
  }, [searchTerm])
    
  const handleSearch = (city) => {
    setSearchTerm(city)
  }

  const handleDelete = (index) => {
    setWeatherData(prevWeatherData => prevWeatherData.filter((_, i) => i !== index));
  };
  return (
    <div className='App'>
      <Header />
      <SearchBar onSearch={handleSearch} />

      {weatherData.map((weatherData, index) => (
        <Weather key={index} 
        weatherData={weatherData} 
        handleDelete={() => handleDelete(index)} />
      
      /* <Weather weatherData={weatherData} />  */
      ))}
      
    </div>
  )
}


export default App;













// function App() {
//   //-----------------------[state]
//   //User State
//   const [user, setUser] = useState([]);
//   const [newUser, setNewUser] = useState({
//     username: "",
//     email:""
//   })

//   //Product state
//   const [products, setProducts] = useState([]);
//   const [newProducts, setNewProducts] = useState({
//     name: "",
//     price:"",
//     description: "",
//     quantity:""
//   })
//   //-------------------------------------------------[CRUD]
//   //User CRUD
//   //--------------[Create]
//   const createUser = async (e) => {
//     e.preventDefault();
//     //1. create user
//     const response = await axios.post("http://localhost:3000/users", createUser);
//     console.log(response)
//     setUser(() => [...user, response.data.user])
//   }
//   //--------------[Read]
//   const fetchUser = async () => {
//     // 1.Make a request to server
//       // const response = await axios({
//       //   method: "get",
//       //   url: "/"
//       // })
//       const response = await axios.get ('http://localhost:3000/users')
//       const info = await response.data;
//       console.log(info)
//     // 2. set state
//     setUser(info.users)
//     console.log("User Fetched")
//   }
//   //--------------[Update]
//   const updateUser = async (e) => {
//     const {username, email} = e.target;
//     console.log({username, email})

//     setUser(()=> ({
//       ...createUser, username
//     }))
//   }
//   //--------------[Delete]
//   const deleteUser = async (id) => {
//     const response = await axios.delete(`http://localhost:3000/users/${id}`)
//     console.log("User deleted")
//   }

//   //Product CRUD
//   //----------------[Create]
//  const createProduct = async (product) => {
//     const response = await axios.post("http://localhost:3000/products")
//     setProducts(() => [...products, response.data.product])
//   }
//   //----------------[Read]
//   const fetchProduct = async () => {
//     const response = await axios.get("http://localhost:3000/products");
//     setProducts(response.data)
//   }
//   //----------------[Update]
  
//   //----------------[Delete]
//   const updateProduct = async (id) => {
//     const response = await axios.delete(`http://localhost:3000/products/${id}`);
//   }


//   //--------------useEffect
//   useEffect(() => {
//     fetchUser()
//     fetchProduct()
//   }, []);



//   return (
//     <div className='App'>
//       <>
//       {/* <div key={user._id}>{user.username}</div> */}
//       </>
//       <Header />
//       <div className='Body'>
//         <ProductFunc user={user} products={products} />
//         {/* <User /> */}
//        </div>
    
//     <div className='Footer'><Footer /></div>

//     </div>
//   );
// }

// export default App;
