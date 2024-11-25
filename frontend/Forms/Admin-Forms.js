class AdminForms extends HTMLElement {
	constructor() {
	  super();
	  this.shadow = this.attachShadow({ mode: 'open' });
  
	  this.container = document.createElement('div');
	  this.container.classList.add('container', 'mt-4');
	  this.container.innerHTML = `
		<div id="appendCardsHere" class="row g-5">
		  <!-- Static Add Form Card -->
		  <div class="col-12 col-sm-6 col-md-4">
			<div class="card">
			  <div class="card-body text-center">
				<a href="#">
				  <img id="add-form" class="text-center" src="../public/assets/icons/plus-circle.svg" width="200">
				</a>
			  </div>
			</div>
		  </div>
		</div>
	  `;
	  this.importStyles();
	  
	  // Add dynamic cards
	  this.addCard({
		id: 1,
		title: "Formulario Empleo Estudiantes",
		startDate: "01/11/2024",
		endDate: "15/11/2024",
		badges: [{ text: "Estudiantes", color: "primary" }, { text: "Badge", color: "success" }],
	  });
	  this.addCard({
		id: 2,
		title: "Formulario Satisfacción Piscina",
		startDate: "16/11/2024",
		endDate: "30/11/2024",
		badges: [{ text: "Info", color: "info" }, { text: "Alert", color: "warning" }],
	  });
	  this.addCard({
		id: 3,
		title: "Dynamic Card 2",
		startDate: "16/11/2024",
		endDate: "30/11/2024",
		badges: [{ text: "Info", color: "info" }, { text: "Alert", color: "warning" }],
	  });
	  this.addCard({
		id: 4,
		title: "Dynamic Card 2",
		startDate: "16/11/2024",
		endDate: "30/11/2024",
		badges: [{ text: "Info", color: "info" }, { text: "Alert", color: "warning" }],
	  });
	  this.addCard({
		id: 5,
		title: "Dynamic Card 2",
		startDate: "16/11/2024",
		endDate: "30/11/2024",
		badges: [{ text: "Info", color: "info" }, { text: "Alert", color: "warning" }],
	  });
  
	  this.shadow.appendChild(this.container);
	}
  
	importStyles() {
	  const generalBootstrap = document.createElement('link');
	  generalBootstrap.setAttribute('rel', 'stylesheet');
	  generalBootstrap.setAttribute('href', '/bootstrap_changes.css');
  
	  const styleLink = document.createElement('link');
	  styleLink.setAttribute('rel', 'stylesheet');
	  styleLink.setAttribute('href', '/Forms/styles.css');
  
	  const bootstrap = document.createElement('link');
	  bootstrap.setAttribute('rel', 'stylesheet');
	  bootstrap.setAttribute('href', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');
  
	  this.shadow.appendChild(styleLink);
	  this.shadow.appendChild(generalBootstrap);
	  this.shadow.appendChild(bootstrap);
	}
	handleCardClick(id)
	{
		console.log('Card clicked', id);
		// Redirect to the form page
		// window.location.href = `/form/?id=${id}`;
	}
	handleCardFavorite(id) {
		console.log('Star clicked', id);
	}
	addCard({ id, title, startDate, endDate, badges = [] }) {
	  const GridOfCards = this.container.querySelector('#appendCardsHere');
  
	  if (GridOfCards) {
		const card = document.createElement('section');
		card.classList.add('col-12', 'col-sm-6', 'col-md-4');
		card.setAttribute('data-id', id);
		card.innerHTML = `
		  <div class="card mb-4">
			<div class="card-body">
			  <!-- Row 1: Header Section -->
			  <div class="row" id="row-header">
				<div class="col-auto">
				  <div class="star-container">
					<input id="star" type="checkbox">
					<img id="star-selected" src="/public/assets/icons/star-fill_grey.svg" width="40">
					<img id="star-unselected" src="/public/assets/icons/star-fill_red.svg" width="40">
				  </div>
				</div>
				<div class="col">
				  <section class="d-flex align-items-center">
					<div class="row w-100 justify-content-end">
					  <div class="col-auto d-flex align-items-center pe-1">
						<img src="/public/assets/icons/calendar-black.svg" width="20" height="20">
					  </div>
					  <div class="col-auto text-end">
						<p class="mb-1">${startDate}</p>
						<p class="mb-0">${endDate}</p>
					  </div>
					</div>
				  </section>
				</div>
			  </div>
  
			  <!-- Row 2: Card Title -->
			  <div class="row mt-5">
				<div class="col">
				  <h5 class="card-title text-center">${title}</h5>
				</div>
			  </div>
  
			  <!-- Row 3: Badges -->
			  <div class="row mt-4">
				<div class="col">
				  <div>
					${badges
					  .map(
						(badge) =>
						  `<span class="badge rounded-pill text-bg-${badge.color}">${badge.text}</span>`
					  )
					  .join('')}
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		`;
  
		// Attach click event to the card
		card.addEventListener('click', (event) => {
			if (!event.target.closest('#star')) {
				this.handleCardClick(id);
			}
		});
		// Attach click event to the star favorite
		let star = card.querySelector('#star');
		star.addEventListener('click', () => this.handleCardFavorite(id));
		GridOfCards.appendChild(card);
	  }
		
	}
  
	connectedCallback() {
		console.log('Admin Forms mounted');
		
	}
  }
  
  window.customElements.define('admin-forms', AdminForms);
  