import logo from './logo.svg';
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBBtn } from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
     
    
<header>


    <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary fixed-top">
     
      <div class="container-fluid">
     
        <button
          data-mdb-collapse-init
          class="navbar-toggler"
          type="button"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

       
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
       
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">testimonials</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
         
        </div>
      

      
        <div class="d-flex align-items-center">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
              <a class="nav-link" href="#">login</a>
            </li>
          </ul>

        
          
         
         
        </div>
      
      </div>
     
    </nav>
    <div id="intro" class="bg-image vh-100 shadow-1-strong">
      <video  playsinline autoplay muted loop>
        <source class="h-100"
          src="https://mdbootstrap.com/img/video/animation-intro-min.mp4"
          type="video/mp4"
        />
      </video>
      <div class="mask">
        <div class="container d-flex align-items-center justify-content-center text-center h-100">
          <div class="text-white" data-mdb-theme="dark">
            <h1 class="mb-3">lorem ipsum</h1>
            <h5 class="mb-4">lorem ipsum lorem ipsum lorem ipsum</h5>
            <a class="btn btn-outline-light btn-lg m-2" data-mdb-ripple-init href="https://www.youtube.com/watch?v=c9B4TPnak1A" role="button"
              rel="nofollow" target="_blank">lorem ipsum</a>
            <a class="btn btn-outline-light btn-lg m-2" data-mdb-ripple-init href="https://mdbootstrap.com/docs/standard/" target="_blank"
              role="button">lorem ipsum</a>
          </div>
        </div>
      </div>
    </div>

</header>
<main class="mt-5">
<div class="container mt-5">
<section>
      <div class="row">
        <div class="col-md-6 gx-5 mb-4">
          <div class="bg-image hover-overlay shadow-2-strong" data-mdb-ripple-init data-mdb-ripple-color="light">
            <img src="https://mdbootstrap.com/img/new/slides/031.jpg" class="img-fluid" />
            <a href="#!">
              <div class="mask" ></div>
            </a>
          </div>
        </div>

        <div class="col-md-6 gx-5 mb-4">
          <h4><strong>Facilis consequatur eligendi</strong></h4>
          <p class="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur
            eligendi quisquam doloremque vero ex debitis veritatis placeat unde animi laborum
            sapiente illo possimus, commodi dignissimos obcaecati illum maiores corporis.
          </p>
          <p><strong>Doloremque vero ex debitis veritatis?</strong></p>
          <p class="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod itaque voluptate
            nesciunt laborum incidunt. Officia, quam consectetur. Earum eligendi aliquam illum
            alias, unde optio accusantium soluta, iusto molestiae adipisci et?
          </p>
        </div>
      </div>
    </section>



<section class="text-center">
      <h4 class="mb-5"><strong>Facilis consequatur eligendi</strong></h4>

      <div class="row">
        <div class="col-lg-4 col-md-12 mb-4">
          <div class="card">
            <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
              <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" class="img-fluid" />
              <a href="#!">
                <div class="mask"></div>
              </a>
            </div>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
              <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Button</a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card">
            <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
              <img src="https://mdbootstrap.com/img/new/standard/nature/023.jpg" class="img-fluid" />
              <a href="#!">
                <div class="mask" ></div>
              </a>
            </div>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
              <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Button</a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card">
            <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
              <img src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" class="img-fluid" />
              <a href="#!">
                <div class="mask" ></div>
              </a>
            </div>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
              <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Button</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
</main>
<footer class="text-center bg-body-tertiary">

  <div class="container pt-4">
   
    <section class="mb-4">
     
      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-facebook-f"></i
      ></a>

   
      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-twitter"></i
      ></a>

     
      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-google"></i
      ></a>

     
      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-instagram"></i
      ></a>

  
      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-linkedin"></i
      ></a>
    
      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-github"></i
      ></a>
    </section>
 
  </div>
 
  <div class="text-center p-3">
    © 2024 Copyright:
    <a class="text-body" href="https://mdbootstrap.com/">suni</a>
  </div>

</footer>
    </div>
  );
}

export default App;
