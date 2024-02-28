
import Saranda from "../Assets/saranda1.jpeg";
import Saranda1 from "../Assets/saranda.jpg";
import Saranda2 from "../Assets/albanian-coastline.jpg";
import Saranda3 from "../Assets/saranda3.jpg";
import "./project.css";
import React, { useState } from 'react'
function Home() {
  return (

        <><div id="intro" class="bg-image shadow-2-strong">
          <div class="intro">
              <div class="container d-flex align-items-center justify-content-center text-center h-100">
                  <div class="text-white" data-mdb-theme="dark">
                      <h1 class="mb-3 xs-12">Explore more for your next trip</h1>
                      <h5 class="mb-4 xs-10 md-8">Best & free guide trip around the world</h5>
                      <a id="firstbutton" class=" btn btn-outline-light btn-lg m-2 " href="/#" role="button"
                      >Post your trip</a>
                  </div>
              </div>
          </div>
      </div>
      <div class="container ">
              <div class="row py-5 m-2">
                  <div class=" col-sm-12 col-lg-6 col-xs-12">
                      <h6 class=" py-2 px-4 text-success">#myblog</h6>
                      <h1 class=" py-2 px-4">Blog</h1>
                      <p class=" py-2 px-4">Share your story with the world. Stand out with a professionally-designed blog website
                          that can be customized to fit your brand. Build, manage, and promote your blog with
                          Squarespace s built-in suite of design and marketing tools.
                      </p>
                      <div class=" py-2 px-4 ">
                          <a class=" btn btn-outline-dark btn-lg py-2 px-4 " href="/#" role="button"
                          >Explore more</a>
                      </div>
                  </div>
                  <div class="col  col-sm-12 col-lg-6">
                      <img src={Saranda} class="image1 " alt="..." />
                  </div>
              </div>
          </div><div class="container ">
              <div class="row py-5 m-2">
                  <h1 class="py-2 px-4  ">Explore more</h1>
                  <div class=" col-xs-18 col-lg-4 col-sm-12  py-2 px-4  ">
                      <div class="card ">
                          <img src={Saranda1} class="card-img " alt="..." />
                          <div class="card-img-overlay ">
                              <h5 class="card-title  card text-bg-light">What to do?</h5>
                              <p class="card-text card text-bg-light">Swimming </p>
                          </div>
                      </div>
                  </div>

                  <div class="col-xs-12 col-lg-4 col-sm-12  py-2 px-4  ">
                      <div class="card">
                          <img src={Saranda2} class="card-img " alt="..." />
                          <div class="card-img-overlay ">
                              <h5 class="card-title  card text-bg-light">Where to stay?</h5>
                              <p class="card-text card text-bg-light">Accommmadations </p>
                          </div>
                      </div>
                  </div>

                  <div class="col col-xs-18  col-lg-4 col-sm-12  py-2 px-4  ">
                      <div class="card">
                          <img src={Saranda3} class="card-img " alt="..." />
                          <div class="card-img-overlay ">
                              <h5 class="card-title  card text-bg-light">Where to go?</h5>
                              <p class="card-text card text-bg-light">Ksamil Island </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          
  <section>
    <footer class="text-center text-white bg-dark" id="footer" >
    
        <div class="container p-4 pb-0">
          <section class="">
            <p class="d-flex justify-content-center align-items-center">
             <span class="me-3">Register for free</span>
            <button data-mdb-ripple-init type="button" class="btn btn-outline-light btn-rounded">
               Sign up!
            </button>
            </p>
         </section>
        </div>
   

      <div class="text-center p-3" id="copyright" >
       © 2024 Copyright:
       <a class="text-white" href="">Travel.com</a>
      </div>
    
    </footer>
  
  </section>


          </>



            
  )
}

export default Home




