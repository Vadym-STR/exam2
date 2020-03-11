export const taskTogleClassOnClickEsc = {
    options: {
        showModalButtonClass: ".js-show-modal-button",
        modalClass: ".js-modal"
    },
    showModalButton: null,
    modal: null,

    /*метод Init який приймає функцію */
    init: function (options) {
        if (options) {
            this.options = options
        }

        const parameters = this.options;

        console.log(parameters);

        this.showModalButton = document.querySelector(parameters.showModalButtonClass); /* document.querySelector меняем на $ */
        this.modal = document.querySelector(parameters.modalClass);

        console.log(this.showModalButton);
        console.log(this.modal);

        /* викликаємо функцію з строки addActiveClass: function () {
                                                this.modal.classList.add('modal_active')*/
        this.events();
    },

    /* events - задаем события по клику и по нажатию на клавишу esc*/
    events: function () {
        let self = this;

        document.addEventListener('click', self.addActiveClass.bind(self));
        document.addEventListener('click', self.removeActiveClass.bind(self));
        document.addEventListener('keydown', self.removeActiveClass.bind(self));

    },

    addActiveClass: function (events) {
        let target = events.target === this.showModalButton;

        if (target) {
            this.modal.classList.add('modal_active');
        }
    },

    removeActiveClass: function (events) {
        let target = events.target === this.showModalButton || events.keycode === 27;
        let activeClass = document.querySelectorAll(".modal_active");

        if (target && activeClass) {
            this.modal[0].classList.remove('modal_active');
        }
    }
}