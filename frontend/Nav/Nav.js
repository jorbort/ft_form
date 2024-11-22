class NavBar extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // Create the main container
        const container = document.createElement('div');
        container.classList.add('Nav-container');

        // Create an image
        
        
        // Create a link to the stylesheet
        const styleLink = document.createElement('link');
        styleLink.setAttribute('rel', 'stylesheet');
        styleLink.setAttribute('href', '/Nav/styles.css');
        
        this.profilePicture(container);
        this.logoutButton(container);
        // Append elements to shadow root
        shadow.appendChild(styleLink);
        shadow.appendChild(container);

    }
    profilePicture(container) {
        const img = document.createElement('img');
        img.setAttribute('src', '/public/assets/images/default-profile.jpeg'); 
        img.setAttribute('alt', 'Profile Picture');
        img.classList.add('image-class');

        // Append the image to the container
        container.appendChild(img);
    }
    logoutButton(container) {
    
        const button = document.createElement('button');
        button.textContent = 'Logout';
        button.classList.add('logout-class');

        container.appendChild(button);
    }
}

window.customElements.define('nav-bar', NavBar);
