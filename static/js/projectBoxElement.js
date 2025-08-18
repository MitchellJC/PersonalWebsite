class ProjectBoxElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const template = document.getElementById("project-template");
    const templateContent = template.content;
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(templateContent.cloneNode(true));

    const codeAnchor = shadow.getElementById("code-anchor");
    const projectAnchor = shadow.getElementById("project-anchor");
    const img = shadow.getElementById("project-img");

    codeAnchor.setAttribute("href", this.getAttribute("code-href"));
    projectAnchor.setAttribute("href", this.getAttribute("project-href"));
    img.setAttribute("src", this.getAttribute("img-src"));
  }
}

customElements.define("project-box-element", ProjectBoxElement);
