(() => {
    const refs = {
        modalContainer: document.querySelector(".backdrop"),
        modalContainerOpen: document.querySelectorAll(".modal-open-button"),
        modalContainerClose: document.querySelector(".modal__close-button"),

        modal: document.querySelector(".modal"),
        inps: document.querySelectorAll(".modal__text-input"),

        msgsContainers: document.querySelectorAll(".modal__warning-text-container"),
        modalBtnMsg: document.querySelector(".modal__button-warning"),
    }

    const Alert = {
        wrongInput: 1,
        emptyInput: 3
    }
    Object.freeze(Alert);


    // "Open modal" buttons
    refs.modalContainerOpen.forEach( btn => {
        btn.addEventListener("click", () => {
            refs.modalContainer.style.transform = "scaleY(1)";
            document.body.style.overflow = "hidden";
        });
    });

    // The "close modal" button. Yes, there's only one of kind
    refs.modalContainerClose.addEventListener("click", () => {
        refs.modalContainer.style.transform = "scaleY(0)";
        document.body.style.overflow = "visible";
    });


    // Invalid inputs on the submit event
    refs.modal.addEventListener("invalid", (e) => {
        e.preventDefault;

        refs.modalBtnMsg.textContent = "Invalid inputs";
        let emptyInputsAbsent = true;

        for (let idx = 0; idx < refs.inps.length; ++idx) {
            if (refs.inps[idx].value.length == 0) {
                refs.msgsContainers[idx].childNodes[Alert.emptyInput].style.opacity = "1";
                refs.msgsContainers[idx].childNodes[Alert.wrongInput].style.opacity = "0";
                emptyInputsAbsent = false;
            }
        }
        
        if (!emptyInputsAbsent) {
            refs.modalBtnMsg.textContent = "All fields are required";
        }
        refs.modalBtnMsg.style.opacity = "1";
        setTimeout(() => { refs.modalBtnMsg.style.opacity = "0"; }, 2000);
    }, true);


    // Change alert message of an input back if this input gets some... input
    for (let idx = 0; idx < refs.inps.length; ++idx) {
        refs.inps[idx].addEventListener("input", () => {
            refs.msgsContainers[idx].childNodes[Alert.emptyInput].style.opacity = "0";
            refs.msgsContainers[idx].childNodes[Alert.wrongInput].style.opacity = "1";
        });
    }
})();