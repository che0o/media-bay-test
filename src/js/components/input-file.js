const fileInputs = document.querySelectorAll('input[type="file"]');

if (fileInputs.length) {
  fileInputs.forEach((input) => {
    let fileWrap = input.parentElement;
    if (!fileWrap.classList.contains("form-uploadfile")) {
      fileWrap = fileWrap.parentElement;
    }
    input.addEventListener("change", (e) => {
      const that = e.target;
      const files = that.files;
      let filesStr = "";
      Array.from(files).forEach((file, index) => {
        if (index) {
          filesStr += ", ";
        }
        filesStr += file.name;
      });
      fileWrap.querySelector(".form-uploadfile-text").textContent = filesStr;
    });
  });
}
