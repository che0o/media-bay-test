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
    this.openPopup();
    this.closePopup();
  }

  openPopup() {
    const hendlerOpenPopup = (e) => {
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
      const hendlerClosePopup = () => {
        this.popup.forEach((item) => {
          item.classList.remove(this.settings.popupShowClass);
        });
      };

      btn.addEventListener("click", hendlerClosePopup);
    });
  }
}

new Popup(".popup", {
  openButtons: ".btn-open-modal",
  closeButtons: ".btn-close-modal",
});
