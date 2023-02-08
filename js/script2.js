function LoadModel(ModelName1,ModelName2) {
  //var ModelName = localStorage.getItem("ModelName");
  document.getElementById("model").src = ModelName1;
  document.getElementById("model").setAttribute(ios-src) = ModelName2;
}
window.onload = LoadModel(localStorage.getItem("ModelName1"),localStorage.getItem("ModelName2")); 