// document.getElementById("two").onclick = function () {
//   alert("tree clicked");
// };
// document.querySelector(".box").addEventListener(
//   "click",
//   function (e) {
//     console.log("click inside the box");
//   },
//   false
// );
// document.querySelector("#three").addEventListener(
//   "click",
//   function (e) {
//     console.log("click on picture three");
//     e.stopPropagation();
//   },
//   false
// );
// document.getElementById("sarkari").addEventListener(
//   "click",
//   function (e) {
//     console.log("link clicked");
//     e.stopPropagation();
//     e.preventDefault();
//   },
//   false
// );
document.querySelector(".box").addEventListener("click", function (e) {
  console.log(e.target.tagName);
  if (e.target.tagName === "IMG") {
    console.log(e.target.id);
    let removeIt = e.target.parentNode;
    removeIt.remove();
  }

  //   removeIt.parentNode.removeChild(removeIt);
});
