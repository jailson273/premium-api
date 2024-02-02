!(function () {
    const search = document.querySelector("#search");
    const send = document.querySelector("#btn-send");

    function colorizeLogError() {
        const logsLevelError = document.querySelectorAll("[level='error']");
        Array.from(logsLevelError).forEach(function (level) {
            level.classList.add("text-danger");
            level.querySelector(".metadata").classList.add("text-danger");
        });
    }

    function handleSend() {
        const value = search.value;
        if (!value || value.toString().trim() === "") {
            return;
        }

        window.location = `/api/log/view?date=${value.replace(/-/gi, "")}`;
    }

    send.addEventListener("click", handleSend.bind(send));
    colorizeLogError();
})();
