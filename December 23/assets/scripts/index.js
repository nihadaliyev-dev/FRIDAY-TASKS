import { data } from "./data.js";

const container = document.querySelector(".container");
const header = document.createElement("div");
const wrapper = document.querySelector(".wrapper");

header.className = "header";
container.append(header);
console.log(data);
data.forEach((tab) => {
  const tabBtn = document.createElement("button");
  const tabContent = document.createElement("div");

  const tabHeader = document.createElement("div");
  const tabBody = document.createElement("div");
  const tabFooter = document.createElement("div");

  tabBtn.className = "tabBtn";
  tabContent.className = "tabMain";

  tabBtn.innerHTML = tab.tabName;

  tabHeader.className = "tabHeader";
  tabBody.className = "tabBody";
  tabFooter.className = "tabFooter";
  header.append(tabBtn);

  tabBtn.addEventListener("click", () => {
    wrapper.innerHTML = "";

    tabHeader.innerHTML = tab.tabContent.headerHTML;
    tabBody.innerHTML = tab.tabContent.bodyHTML;
    tabFooter.innerHTML = tab.tabContent.footerHTML;

    tabContent.append(tabHeader, tabBody, tabFooter);

    wrapper.append(tabContent);
    container.append(wrapper);
  });
});
