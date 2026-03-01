import {IMenuItem} from '@modules/utils/menu/IMenuItem';

export namespace MenuManager{
  export function ResignMenu(menu: IMenuItem[], e: MouseEvent) {
    let div = document.querySelector(".global-menu") as HTMLDivElement;
    if (!div) {
      div = document.createElement("div");
      div.className = "global-menu";
      document.body.appendChild(div);
    }
    div.innerHTML = "";
    menu.forEach(s => {
      let item = document.createElement('div');
      item.className = "menu-item flex flex-align-center";
      item.innerHTML = `<i class="fa ${s.icon}"></i><span>${s.name}</span>`
      item.onmousedown = () => s.action();
      div.appendChild(item);
    })
    let x = (e.pageX + 150) > document.body.offsetWidth ? e.pageX - 150: e.pageX;
    div.style.top = e.pageY + "px";
    div.style.left = x + "px";
    div.className = "global-menu show";
    let click = (ev:MouseEvent) => {
      div.className = "global-menu hide";
      document.body.removeEventListener("mousedown", click);
    }
    document.body.addEventListener("mousedown", click);
  }
}
