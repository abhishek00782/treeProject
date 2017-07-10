
function addLiEl(ulEl, liBtnLbl){
var
liEl = document.createElement('LI'),
liIdx = ulEl.childNodes.length + 1,
ulIdx = document.getElementsByTagName('UL').length,
btn = '<label onDblClick = "addLiEl(ul' + ulIdx + ', this.innerHTML)">' + liBtnLbl + liIdx + '</label>',
subUl = '<ul id = "ul' + ulIdx + '"></ul>';
ulEl.appendChild(liEl)
liEl.innerHTML = btn + subUl
}
function Aobj(parCount,childCount,name) {
  this.parCount=parCount;
  this.childCount=childCount;
  this.name=name;
}
