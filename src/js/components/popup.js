class Popup {
  constructor(selectorPopup, options) {
    this.options = options || {};
    this.popup = document.querySelectorAll(selectorPopup);

    this.defaults = {
      popupShowClass: "show",
    };

    this.settings = Object.assign(this.defaults, this.options);
    this.buttonOpenModal = document.querySelectorAll(this.settings.openButtons);
    this.buttonCloseModal = document.querySelectorAll(
      this.settings.closeButtons
    );
    this.currentScroll;
    this.openPopup();
    this.closePopup();
  }

  openPopup() {
    const hendlerOpenPopup = (e) => {
      this.currentScroll = window.pageYOffset;
      document.body.classList.add("dis-scroll");

      this.popup.forEach((item) => {
        if (item.id === e.target.id) {
          item.classList.add(this.settings.popupShowClass);
        }
      });
    };

    this.buttonOpenModal.forEach((btn) => {
      btn.addEventListener("click", hendlerOpenPopup);
    });
  }

  closePopup() {
    this.buttonCloseModal.forEach((btn) => {
      const hendlerClosePopup = (e) => {
        if (e && e.type === "keyup" && e.key !== "Escape") return;

        document.body.classList.remove("dis-scroll");
        window.scrollTo(0, this.currentScroll);

        this.popup.forEach((item) => {
          item.classList.remove(this.settings.popupShowClass);
        });
      };

      window.addEventListener("keyup", hendlerClosePopup);
      btn.addEventListener("click", hendlerClosePopup);
    });
  }
}

new Popup(".popup", {
  openButtons: ".btn-open-modal",
  closeButtons: ".btn-close-modal",
});
