function FilterCategory(category) {
    let products = document.getElementById("products").children;
    let btn_filter_all = document.getElementById("btn-filter-all");
    let btn_filter_phone = document.getElementById("btn-filter-phone");
    let btn_filter_laptop = document.getElementById("btn-filter-laptop");
    let btn_filter_desktop = document.getElementById("btn-filter-desktop");
    if (category == 'all') {
        btn_filter_all.classList.remove('btn-filter-active');
        btn_filter_phone.classList.remove('btn-filter-active');
        btn_filter_laptop.classList.remove('btn-filter-active');
        btn_filter_desktop.classList.remove('btn-filter-active');
        btn_filter_all.classList += ' btn-filter-active';
        Array.from(products).forEach((ele) => {
            ele.classList.remove("product_visible");
            ele.classList.remove("product_hidden");
            ele.className += " product_visible ";
        });
    } else {
        if (category == 'phone') {
            btn_filter_all.classList.remove('btn-filter-active');
            btn_filter_phone.classList.remove('btn-filter-active');
            btn_filter_laptop.classList.remove('btn-filter-active');
            btn_filter_desktop.classList.remove('btn-filter-active');
            btn_filter_phone.classList += ' btn-filter-active';
        } else if (category == 'laptop') {
            btn_filter_all.classList.remove('btn-filter-active');
            btn_filter_phone.classList.remove('btn-filter-active');
            btn_filter_laptop.classList.remove('btn-filter-active');
            btn_filter_desktop.classList.remove('btn-filter-active');
            btn_filter_laptop.classList += ' btn-filter-active';
        } else if (category == 'desktop') {
            btn_filter_all.classList.remove('btn-filter-active');
            btn_filter_phone.classList.remove('btn-filter-active');
            btn_filter_laptop.classList.remove('btn-filter-active');
            btn_filter_desktop.classList.remove('btn-filter-active');
            btn_filter_desktop.classList += ' btn-filter-active';
        }
        Array.from(products).forEach((ele) => {
            if (!ele.classList.contains(category)) {
                ele.classList.remove("product_visible");
                ele.classList.remove("product_hidden");
                ele.className += " product_hidden ";
            } else {
                ele.classList.remove("product_visible");
                ele.classList.remove("product_hidden");
                ele.className += " product_visible ";
            }
        });
    }
}
