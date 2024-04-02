import { useEffect } from 'react'
import './App.css'

function App() {
 
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data =>{
      console.log(data);
    })
    .catch(err =>{
      console.log(err);
    })
  } , [] )
  return (
    <>
      <h1 className='h1'>Home page</h1>
      <div className="all-container">
        <div className="wrapper">
          <div className="card">
            
            <div className="img">
              <img src="https://picsum.photos/300/301" alt="rasm bor" />
            </div>
            <div className="tex">
              <h2>TEXNOLOGY</h2>
            </div>
            <div className="desc">
              <h3>Architectural Engineering Wonders of the <br /> modern era for your Inspiration</h3>
            </div>
            <div className="info">
              <div className="img">
                <h4>October 29 , 2024</h4>
              </div>
            </div>
          </div>
          <div className="card">
            
            <div className="img">
              <img src="https://picsum.photos/200/301" alt="rasm bor" />
            </div>
            <div className="tex">
              <h2>TEXNOLOGY</h2>
            </div>
            <div className="desc">
              <h3>Architectural Engineering Wonders of the <br /> modern era for your Inspiration</h3>
            </div>
            <div className="info">
              <div className="img">
                <h4>October 29 , 2024</h4>
              </div>
            </div>
          </div>
          <div className="card">
            
            <div className="img">
              <img src="https://picsum.photos/200/302" alt="rasm bor" />
            </div>
            <div className="tex">
              <h2>TEXNOLOGY</h2>
            </div>
            <div className="desc">
              <h3>Architectural Engineering Wonders of the <br /> modern era for your Inspiration</h3>
            </div>
            <div className="info">
              <div className="img">
                <h4>October 29 , 2024</h4>
              </div>
            </div>
          </div>
          <div className="card">
            
            <div className="img">
              <img src="https://picsum.photos/200/303" alt="rasm bor" />
            </div>
            <div className="tex">
              <h2>TEXNOLOGY</h2>
            </div>
            <div className="desc">
              <h3>Architectural Engineering Wonders of the <br /> modern era for your Inspiration</h3>
            </div>
            <div className="info">
              <div className="img">
                <h4>October 29 , 2024</h4>
              </div>
            </div>
          </div>
          <div className="card">
            
            <div className="img">
              <img src="https://picsum.photos/200/304" alt="rasm bor" />
            </div>
            <div className="tex">
              <h2>TEXNOLOGY</h2>
            </div>
            <div className="desc">
              <h3>Architectural Engineering Wonders of the <br /> modern era for your Inspiration</h3>
            </div>
            <div className="info">
              <div className="img">
                <h4>October 29 , 2024</h4>
              </div>
            </div>
          </div>
          <div className="card">
            
            <div className="img">
              <img src="https://picsum.photos/200/305" alt="rasm bor" />
            </div>
            <div className="tex">
              <h2>TEXNOLOGY</h2>
            </div>
            <div className="desc">
              <h3>Architectural Engineering Wonders of the <br /> modern era for your Inspiration</h3>
            </div>
            <div className="info">
              <div className="img">
                <h4>October 29 , 2024</h4>
              </div>
            </div>
          </div>
          <div className="card">
            
            <div className="img">
              <img src="https://picsum.photos/200/300" alt="rasm bor" />
            </div>
            <div className="tex">
              <h2>TEXNOLOGY</h2>
            </div>
            <div className="desc">
              <h3>Architectural Engineering Wonders of the <br /> modern era for your Inspiration</h3>
            </div>
            <div className="info">
              <div className="img">
                <h4>October 29 , 2024</h4>
              </div>
            </div>
          </div>
          <div className="card">
            
            <div className="img">
              <img src="https://picsum.photos/200/307" alt="rasm bor" />
            </div>
            <div className="tex">
              <h2>TEXNOLOGY</h2>
            </div>
            <div className="desc">
              <h3>Architectural Engineering Wonders of the <br /> modern era for your Inspiration</h3>
            </div>
            <div className="info">
              <div className="img">
                <h4>October 29 , 2024</h4>
              </div>
            </div>
          </div>
          <div className="card">
            
            <div className="img">
              <img src="https://picsum.photos/200/308" alt="rasm bor" />
            </div>
            <div className="tex">
              <h2>TEXNOLOGY</h2>
            </div>
            <div className="desc">
              <h3>Architectural Engineering Wonders of the <br /> modern era for your Inspiration</h3>
            </div>
            <div className="info">
              <div className="img">
                <h4>October 29 , 2024</h4>
              </div>
            </div>
          </div>
          <div className="card">
            
            <div className="img">
              <img src="https://picsum.photos/200/309" alt="rasm bor" />
            </div>
            <div className="tex">
              <h2>TEXNOLOGY</h2>
            </div>
            <div className="desc">
              <h3>Architectural Engineering Wonders of the <br /> modern era for your Inspiration</h3>
            </div>
            <div className="info">
              <div className="img">
                <h4>October 29 , 2024</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App