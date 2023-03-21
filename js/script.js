$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");

    if ($(window).scrollTop() > 0) {
      $(".top").show();
    } else {
      $(".top").hide();
    }
  });
});

function ResumeDownload() {
  // Replace 'example.pdf' with the name of the local file you want to download
  const fileName = "Umair Resume.pdf";

  // Replace '/path/to/file/example.pdf' with the local path of the file you want to download
  const fileUrl = "UmairResume.pdf";

  // Create a new anchor element to trigger the download
  const downloadLink = document.createElement("a");

  // Set the href and download attributes to trigger the download
  downloadLink.href = fileUrl;
  downloadLink.download = fileName;

  // Trigger the click event on the download link
  downloadLink.click();
}

var pressedButton = document.getElementsById("Submitbtn")[0];
pressedButton.addEventListener("click", function (event) {
  alert("Thank you!!!");
});
