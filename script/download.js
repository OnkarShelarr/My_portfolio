document.querySelector(".btn").addEventListener("click", function () {
  // alert('CV on update')
  // return
  var cvUrl = './Onkar_Shelar_Resume.pdf';
  var link = document.createElement("a");
  link.href = cvUrl;
  link.download = "Om-CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
