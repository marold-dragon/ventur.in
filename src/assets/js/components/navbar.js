// Navbar link Active

document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname.replace(/\/$/, "")

    document.querySelectorAll("#navbar-menu a[href]").forEach((link) => {
        const href = link.getAttribute("href")?.replace(/\/$/, "")
        if (!href) return

        if (currentPath === href || currentPath.endsWith(href)) {
            link.classList.add("active")
        }
    })
})