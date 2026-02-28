// Author: SonK

// --- Mục đích: Xử lý sự kiện click để bật/tắt menu trên thiết bị di động và đổi icon tương ứng
const topMenu = document.getElementById("ct-top-menu");
const toggleTopMenuIcon = document.getElementById("ct-toggle-top-menu-icon");

// Lấy thẻ <path> nằm bên trong nút bấm để lát nữa đổi nét vẽ
const iconPath = toggleTopMenuIcon.querySelector("path");

// Lưu lại 2 hình dáng (nét vẽ) của 2 loại Icon
const hamburgerIconPath = "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"; // 3 đường gạch ngang
const closeIconPath = "M6 18L18 6M6 6l12 12"; // Dấu X chéo

document.addEventListener("click", function (event) {
  const isClickInsideIcon = toggleTopMenuIcon.contains(event.target);
  const isClickInsideMenu = topMenu.contains(event.target);

  if (isClickInsideIcon) {
    // Bật/tắt class 'hidden' của Menu
    topMenu.classList.toggle("hidden");
    topMenu.classList.toggle("ct-top-menu-expanded");

    // Kiểm tra xem Menu đang Ẩn hay Hiện để đổi Icon cho đúng
    if (topMenu.classList.contains("hidden")) {
      // Nếu Menu bị ẩn -> Hiện lại icon Hamburger
      iconPath.setAttribute("d", hamburgerIconPath);
    } else {
      // Nếu Menu đang mở -> Hiện icon Dấu X
      iconPath.setAttribute("d", closeIconPath);
    }
  } else if (!isClickInsideMenu) {
    // Nếu click ra ngoài vùng Menu và ngoài vùng Icon -> Đóng Menu
    if (!topMenu.classList.contains("hidden")) {
      topMenu.classList.add("hidden");
      topMenu.classList.remove("ct-top-menu-expanded");
      // Đồng thời reset lại icon về hình Hamburger
      iconPath.setAttribute("d", hamburgerIconPath);
    }
  }
});
