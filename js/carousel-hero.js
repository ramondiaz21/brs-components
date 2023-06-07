class CarouselComponent extends HTMLElement {
  constructor() {
    super();
    // this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
      .home .carousel-1,
      .home .carousel-2,
      .home .carousel-3 {
        background: #eeeeee;
        background-image: url("https://brsmechanicalsd.com/wp-content/uploads/2023/01/Gradient_BG.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 100px 0 100px 0;
        /*background: rgb(255,210,94);
        background: linear-gradient(152deg, rgba(255,210,94,0.5970763305322129) 0%, rgba(255,255,255,1) 57%);
      */
      }

      .home .row {
        align-items: center;
      }
      
      .home .btn-full-blue {
        margin-top: 40px;
      }
      
      .home .carousel ul {
        padding-left: 25px;
      }
      
      .home .carousel .image-wrapper {
        align-items: center;
        display: grid;
        flex-direction: column;
        gap: 30px;
        justify-items: center;
      }
      
      .carousel-control-next,
      .carousel-control-prev {
        display: none !important;
      }
      
      .carousel-indicators {
        bottom: 0px;
      }
      
      .carousel-indicators li {
        background-color: #0f4d8f;
        border-bottom: none;
        border-radius: 100px;
        border-top: none;
        height: 12px;
        width: 12px;
      }
      
      /* .home ul {
        padding-left: 20px;
      } */
      
      .home li,
      .about .over li {
        color: #000000;
        font-family: "Noto Sans", sans-serif;
        font-size: 2em;
        font-weight: 600;
      }
      
      .home ul li::marker,
      .about .over li::marker {
        color: #0f4d8f;
      }
      
      /* .home .img-hero {
        background: #818282;
        border: none;
        border-radius: 34px;
        height: 160px;
        width: 100%;
      } */
      
      .home .image-wrapper {
        display: flex;
        flex-direction: column;
        gap: 30px;
      }
      </style>

      <section class="home">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <!-- Aquí estarán los elementos del carrusel -->
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </section>
    `;

    const carouselInner = this.querySelector('.carousel-inner');
    const carouselItems = [
      { 
        imgSrc: 'https://brsmechanicalsd.com/wp-content/uploads/2023/01/Hero-image.png', 
        headline: 'Reliable Home <br> Mechanical Services',
        services: ['Warranties Available', 'Free Estimates', 'Senior and Military Discounts'],
        phone: '+16197552742'
      },
      { 
        imgSrc: 'https://brsmechanicalsd.com/wp-content/uploads/2023/01/Hero-image.png', 
        headline: 'Reliable Home <br> Mechanical Services',
        services: ['Warranties Available', 'Garantias', 'Senior and Military Discounts'],
        phone: '+16197552742'
      },
      { 
        imgSrc: 'https://brsmechanicalsd.com/wp-content/uploads/2023/01/Hero-image.png', 
        headline: 'Reliable Home <br> Mechanical Services',
        services: ['Warranties Available', 'Free Estimates', 'Senior and Military Discounts'],
        phone: '+16197552742'
      },
      // puedes agregar más elementos del carrusel aquí
    ];

    carouselItems.forEach((item, index) => {
      const carouselItem = document.createElement('div');
      carouselItem.className = 'carousel-item carousel-1';
      if (index === 0) {
        carouselItem.classList.add('active');
      }

      carouselItem.innerHTML = `
        <div class="container">
          <div class="row">
            <div class="col-lg-7 col-md-6 col-12">
              <h1 class="headline-1 bold blue-text">${item.headline}</h1>
              <div class="service-description mb-5">
                ${item.services.map(service => `
                  <div class="circle-text">
                    <i class="fas fa-circle"></i>
                    <p class="text-1 black-text medium">${service}</p>
                  </div>
                `).join('')}
              </div>
              <p class="text-1 black-text medium">For all your heating and cooling needs call us!</p>
              <a href="tel:${item.phone}" class="btn btn-full-blue button-1">CALL US</a>
            </div>
            <div class="col-lg-5 col-md-6 col-12">
              <img src="${item.imgSrc}" class="w-100" alt="">
            </div>
          </div>
        </div>
      `;

      carouselInner.appendChild(carouselItem);
    });
  }
}

window.customElements.define('carousel-component', CarouselComponent);
