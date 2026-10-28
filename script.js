const toPage = (page_name, checkedElement) => {
    checkedElement.checked = true;

    setTimeout(() => {
        checkedElement.checked = false;
        window.location.href = `${page_name}.html`;
    }, 1000);
};
