const toDoInput = document.querySelector(".toDoInput");
const addBtn = document.querySelector(".addBtn");
const sortBtn = document.querySelector(".sortBtn");
const deleteBtn = document.querySelector(".deleteAllBtn");
const list = document.querySelector(".toDoTasks");

const deletePopUpBg = document.querySelector(".deletePopUp__main");
const deletePopUp = document.querySelector(".deletePopUp");
const deletePopUpCancel = document.getElementById("deleteCancel");
const deletePopUpDeleteAll = document.getElementById("deleteAll");

let toDos = [];

createList(toDos);
deleteBtn.addEventListener("click", () => {
  deletePopUpBg.style.display = "block";
  deletePopUpBg.classList.add("fadeIn");
  deletePopUp.classList.add("fadeIn");
  deletePopUpCancel.addEventListener("click", () => {
    deletePopUpBg.classList.add("fadeOut");
    deletePopUp.classList.add("fadeOut");
    setTimeout(() => {
      deletePopUpBg.style.display = "none";
    }, 400);
  });
  deletePopUpDeleteAll.addEventListener("click", () => {
    toDos = [];
    list.innerHTML = "";
    deletePopUpBg.classList.remove("fadeIn");
    deletePopUpBg.classList.add("fadeOut");
    setTimeout(() => {
      deletePopUpBg.style.display = "none";
    }, 400);
  });
});
addBtn.addEventListener("click", () => {
  if (toDoInput.value.length > 0) {
    setTimeout(() => {
      deleteBtn.style.opacity = "0";
    }, 400);
    setTimeout(() => {
      deleteBtn.style.opacity = "1";
      deleteBtn.innerHTML = "Delete All";
      deleteBtn.classList.remove("errorMsg");
    }, 800);
    let obj = {};
    obj.title = toDoInput.value;
    //   obj.id = toDos[toDos.length - 1].id + 1;
    obj.id = toDos.length + 1;
    toDos.push(obj);

    list.innerHTML = "";
    createList(toDos);

    toDoInput.value = "";
    console.log(toDos);
  } else {
    deleteBtn.classList.add("errorMsg");
    setTimeout(() => {
      deleteBtn.style.opacity = "0";
    }, 400);
    setTimeout(() => {
      deleteBtn.style.opacity = "1";
      deleteBtn.innerHTML = "You can't add empty task!";
      deleteBtn.classList.remove("errorMsg");
    }, 800);
  }
});

let iteration = 1;
sortBtn.addEventListener("click", () => {
  if (iteration % 2 != 0) {
    list.innerHTML = "";
    iteration++;
    createList([...toDos].sort((a, b) => a.title.localeCompare(b.title)));

    sortBtn.innerHTML =
      '          <svg  style="background: none"  version="1.0"  xmlns="http://www.w3.org/2000/svg"  width="18.000000pt"  height="18.000000pt"  viewBox="0 0 512.000000 512.000000"  preserveAspectRatio="xMidYMid meet">  <g    transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"    fill="#fbfbfb"    stroke="none"  >    <path      d="M1405 4673 c-47 -24 -86 -64 -106 -108 -18 -38 -19 -106 -19 -1725 l0 -1685 -257 257 c-142 141 -274 264 -293 274 -73 38 -188 16 -247 -48 -54 -57 -69 -167 -34 -236 24 -46 914 -934 958 -956 44 -22 128 -20 177 4 27 13 196 176 497 477 389 391 457 464 467 499 18 63 14 105 -14 163 -45 90 -139 133 -239 110 -47 -11 -64 -26 -317 -277 l-268 -266 -2 1690 -3 1689 -22 40 c-27 50 -58 80 -105 100 -48 19 -134 19 -173 -2z"    />    <path      d="M3754 4676 c-77 -35 -82 -44 -433 -864 l-334 -780 5 -61 c8 -114 96 -196 208 -195 100 1 166 52 210 158 l22 56 408 0 408 0 22 -56 c44 -107 111 -157 211 -157 71 0 132 32 174 91 27 39 30 52 30 115 l0 72 -329 765 c-181 421 -337 776 -348 790 -41 52 -86 74 -156 77 -42 2 -79 -2 -98 -11z m199 -999 c59 -138 107 -255 107 -259 0 -5 -99 -8 -220 -8 -121 0 -220 3 -220 8 0 12 215 512 220 512 3 0 53 -114 113 -253z"    />    <path      d="M3241 2335 c-61 -19 -118 -78 -137 -140 -30 -102 13 -202 107 -249 l53 -26 348 0 347 0 -414 -580 c-228 -319 -422 -595 -431 -613 -43 -82 -9 -203 74 -262 l44 -30 608 0 608 0 44 30 c138 97 118 306 -34 370 -31 12 -94 15 -384 15 -279 0 -345 3 -341 13 3 7 192 275 420 594 228 320 418 590 420 600 27 94 12 159 -53 223 -32 33 -59 50 -92 58 -72 18 -1128 15 -1187 -3z"    />  </g></svg>';

    console.log(toDos);
  } else {
    list.innerHTML = "";
    iteration++;
    createList([...toDos].sort((b, a) => a.title.localeCompare(b.title)));

    sortBtn.innerHTML =
      ' <svg version="1.0" xmlns="http://www.w3.org/2000/svg" style="background: none;"            width="18.000000pt"             height="18.000000pt"             viewBox="0 0 512.000000 512.000000"             preserveAspectRatio="xMidYMid meet"           >             <g               transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"               fill="#fbfbfb"               stroke="none"             >               <path                 d="M1405 4654 c-44 -23 -933 -912 -956 -956 -35 -69 -20 -179 34 -236 59 -64 174 -86 247 -48 19 10 151 133 293 274 l257 257 0 -1683 c0 -1499 2 -1687 16 -1720 33 -79 110 -132 194 -132 88 0 152 38 193 115 l22 40 3 1689 2 1690 268 -266 c253 -251 270 -266 317 -277 100 -23 194 20 239 110 28 58 32 100 14 163 -10 35 -78 108 -467 499 -301 301 -470 464 -497 477 -49 24 -136 26 -179 4z"               />               <path                 d="M3191 4605 c-61 -19 -118 -78 -137 -140 -30 -102 13 -202 107 -249 l53 -26 348 0 347 0 -414 -580 c-228 -319 -422 -595 -431 -613 -43 -82 -9 -203 74 -262 l44 -30 608 0 608 0 44 30 c138 97 118 306 -34 370 -31 12 -94 15 -384 15 -279 0 -345 3 -341 13 3 7 192 275 420 594 228 320 418 590 420 600 27 94 12 159 -53 223 -32 33 -59 50 -92 58 -72 18 -1128 15 -1187 -3z"               />               <path                 d="M3724 2296 c-77 -35 -82 -44 -433 -864 l-334 -780 5 -61 c8 -114 96 -196 208 -195 100 1 166 52 210 158 l22 56 408 0 408 0 22 -56 c44 -107 111 -157 211 -157 71 0 132 32 174 91 27 39 30 52 30 115 l0 72 -329 765 c-181 421 -337 776 -348 790 -41 52 -86 74 -156 77 -42 2 -79 -2 -98 -11z m199 -999 c59 -138 107 -255 107 -259 0 -5 -99 -8 -220 -8 -121 0 -220 3 -220 8 0 12 215 512 220 512 3 0 53 -114 113 -253z"               />             </g>           </svg>';

    console.log(toDos);
  }
});

function createList(arr) {
  arr.forEach((toDo) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const button = document.createElement("button");
    const editBtn = document.createElement("button");
    const editBox = document.createElement("div");
    button.setAttribute("id", "deleteButton");

    p.innerText = toDo.title;
    button.innerHTML =
      '<svg  version="1.0"  xmlns="http://www.w3.org/2000/svg"  width="20.000000pt"  height="20.000000pt"  viewBox="0 0 512.000000 512.000000"  preserveAspectRatio="xMidYMid meet">  <g    transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"    fill="#fbfbfb"    stroke="none"  >    <path      d="M1790 5102 c-19 -9 -45 -32 -57 -51 -22 -32 -23 -43 -23 -227 l0 -194 851 0 850 0 -3 199 c-3 223 -7 237 -79 273 -31 17 -89 18 -769 18 -680 0 -738 -1 -770 -18z"    />    <path      d="M765 4326 c-27 -7 -64 -20 -81 -28 -49 -27 -115 -99 -143 -158 -24 -52 -26 -65 -29 -257 l-4 -203 2051 0 2051 0 0 173 c0 195 -12 262 -61 339 -39 60 -121 116 -196 134 -81 19 -3510 19 -3588 0z"    />    <path      d="M850 3358 c-1 -84 213 -3168 222 -3203 14 -54 89 -129 145 -144 30 -8 409 -11 1355 -9 l1313 3 43 23 c46 24 97 87 106 130 6 27 236 3156 236 3206 l0 26 -1710 0 -1710 0 0 -32z m1272 -456 c14 -8 36 -32 47 -52 21 -38 21 -41 21 -1080 0 -1039 0 -1042 -21 -1080 -52 -93 -178 -99 -244 -12 -20 27 -20 45 -23 1067 -1 572 0 1054 3 1072 3 18 19 46 36 62 51 51 118 60 181 23z m1027 -1 c14 -9 34 -30 45 -45 21 -27 21 -32 21 -1086 0 -1054 0 -1059 -21 -1086 -52 -71 -128 -88 -197 -46 -71 45 -67 -27 -67 1132 0 931 2 1046 16 1075 36 76 137 103 203 56z"    />  </g></svg>';

    editBox.innerHTML = `<input id="editInput" type="text" value="${p.innerText}" required /><div id="saveChangesBox">  <button id="editBtn" type="submit">    <i class="fa-solid fa-check"></i>  </button>  <button id="discardEditBtn" type="submit">    <i class="fa-solid fa-xmark"></i>  </button></div>`;
    editBox.classList.add("editBox");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    editBox.style.display = "none";

    button.addEventListener("click", (e) => {
      li.className = "fly";
      console.log(e);
      setTimeout(() => {
        toDos = arr.filter((elem) => elem.id !== toDo.id);

        //   li.className = "task";
        //   list.classList = "toDoTasks";
        //   list.innerHTML = "";
        list.innerHTML = "";
        createList(toDos);
      }, 800);
      console.log(e.target, toDo.id);
    });
    editBtn.addEventListener("click", (e) => {
      const saveChanges = li.querySelector("#editBtn");
      const discardChanges = li.querySelector("#discardEditBtn");

      saveChanges.addEventListener("click", (e) => {
        let mainBox = e.target.parentElement.parentElement.parentElement;
        p.innerText = mainBox.querySelector(".editBox input").value;
        let index = arr.find((elem) => toDo.id === elem.id);
        index.title = p.innerText;
        console.log(index);
        editBox.style.display = "none";
      });
      discardChanges.addEventListener("click", () => {
        editBox.style.display = "none";
      });
      console.log(discardChanges);
      console.log(e.target.target);
      console.log(saveChanges);
      editBox.style.display = "flex";
    });

    li.appendChild(editBox);
    li.appendChild(p);
    li.appendChild(editBtn);
    li.appendChild(button);
    list.appendChild(li);
  });
}
