class ProjectBoxElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const template = document.getElementById("project-template");
    const templateContent = template.content;
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(templateContent.cloneNode(true));

    // Code link
    const codeAnchor = shadow.getElementById("code-anchor");
    codeAnchor.setAttribute("href", this.getAttribute("code-href"));

    // Project link
    const projectAnchor = shadow.getElementById("project-anchor");
    const projectButtonClass = this.getAttribute("project-button-class");
    if (projectButtonClass !== null) {
      projectAnchor.classList.add(projectButtonClass);
    } else {
      projectAnchor.setAttribute("href", this.getAttribute("project-href"));
    }

    // Image
    const img = shadow.getElementById("project-img");
    img.setAttribute("src", this.getAttribute("img-src"));
  }
}

customElements.define("project-box-element", ProjectBoxElement);
