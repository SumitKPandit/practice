const template = document.createElement("template");
template.innerHTML = `
    <style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: arial, "sans-serif";
    }
    html {
        font-size: 10px;
    }
    .user-card {
        max-width: 350px;
        display: flex;
        align-items: flex-start;
        margin-bottom: 1rem;
        border-bottom: 5px solid purple;
    }
    .user-card > div {
        padding: 0.7rem;
        background-color: #ededed;
        flex-grow: 1;
        align-self: stretch;
    }
    h3 {
        color: coral;
        margin-bottom: 0.3rem;
    }
    button {
        border: none;
        background-color: purple;
        border-radius: 0.2rem;
        padding: 0.5rem;
        color: white;

    }
    p {
        margin-bottom: 0.3rem;
    }
    </style>
    <div class="user-card">
        <img />
        <div>
            <h3></h3>
            <div class="info">
                <p><slot name="email" /></p>
                <p><slot name="phone" /></p>
            </div>
            <button id="toggle-info">Hide Info</button>
        </div>
    </div>
`;

class UserCard extends HTMLElement {
    constructor() {
        super();
        this.showInfo = true;
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
        this.shadowRoot.querySelector("img").src = this.getAttribute("avatar");
    }

    toggleInfo() {
        this.showInfo = !this.showInfo;
        const info = this.shadowRoot.querySelector(".info");
        const toggleBtn = this.shadowRoot.querySelector("#toggle-info");
        if(this.showInfo) {
            info.style.display = "block";
            toggleBtn.innerText = "Hide Info";
        } else {
            info.style.display = "none";
            toggleBtn.innerText = "Show Info";
        }   
    }

    connectedCallback() {
        this.shadowRoot.querySelector("#toggle-info").addEventListener("click", () => this.toggleInfo());
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector("#toggle-info").removeEventListener();
    }
}

window.customElements.define("user-card", UserCard);