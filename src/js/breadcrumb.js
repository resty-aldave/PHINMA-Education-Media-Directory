document.addEventListener("DOMContentLoaded", () => {
  const breadcrumbNav = document.getElementById("breadcrumb-nav");
  if (!breadcrumbNav) return;

  const crumbsData = breadcrumbNav.getAttribute("data-crumbs");
  if (!crumbsData) return;

  let crumbs;
  try {
    crumbs = JSON.parse(crumbsData);
  } catch (e) {
    console.error("Breadcrumb: Invalid JSON in data-crumbs", e);
    return;
  }

  if (!Array.isArray(crumbs) || crumbs.length === 0) return;

  // Build the breadcrumb list
  const ol = document.createElement("ol");
  ol.className = "breadcrumb-list";
  ol.setAttribute("itemscope", "");
  ol.setAttribute("itemtype", "https://schema.org/BreadcrumbList");

  crumbs.forEach((crumb, index) => {
    const li = document.createElement("li");
    li.className = "breadcrumb-item";
    li.setAttribute("itemprop", "itemListElement");
    li.setAttribute("itemscope", "");
    li.setAttribute("itemtype", "https://schema.org/ListItem");

    const isLast = index === crumbs.length - 1;

    if (!isLast && crumb.href) {
      const a = document.createElement("a");
      a.href = crumb.href;
      a.textContent = crumb.label;
      a.setAttribute("itemprop", "item");
      a.className = "breadcrumb-link";

      const nameSpan = document.createElement("span");
      nameSpan.setAttribute("itemprop", "name");
      nameSpan.textContent = crumb.label;
      
      a.textContent = "";
      a.appendChild(nameSpan);
      li.appendChild(a);

      // Separator chevron
      const sep = document.createElement("span");
      sep.className = "breadcrumb-separator";
      sep.setAttribute("aria-hidden", "true");
      sep.textContent = ">";
      li.appendChild(sep);
    } else {
      const current = document.createElement("span");
      current.className = "breadcrumb-current";
      current.setAttribute("itemprop", "name");
      current.textContent = crumb.label;
      current.setAttribute("aria-current", "page");
      li.appendChild(current);
    }

    const meta = document.createElement("meta");
    meta.setAttribute("itemprop", "position");
    meta.setAttribute("content", String(index + 1));
    li.appendChild(meta);

    ol.appendChild(li);
  });

  breadcrumbNav.appendChild(ol);

  handleMobileCollapse(breadcrumbNav, crumbs);

  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      handleMobileCollapse(breadcrumbNav, crumbs);
    }, 200);
  });
});

function handleMobileCollapse(nav, crumbs) {
  const existingEllipsis = nav.querySelectorAll(".breadcrumb-ellipsis");
  existingEllipsis.forEach(el => el.remove());

  const items = nav.querySelectorAll(".breadcrumb-item");
  const isMobile = window.innerWidth <= 768;

  if (isMobile && crumbs.length > 3) {
    items.forEach((item, i) => {
      if (i === 0 || i >= crumbs.length - 2) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });

    const ellipsis = document.createElement("li");
    ellipsis.className = "breadcrumb-item breadcrumb-ellipsis";
    ellipsis.innerHTML = `<span class="breadcrumb-dots">···</span><span class="breadcrumb-separator" aria-hidden="true">&gt;</span>`;
    items[0].after(ellipsis);
  } else {
    items.forEach(item => {
      item.style.display = "";
    });
  }
}
