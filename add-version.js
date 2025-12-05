const fs = require("fs");
const path = require("path");

const htmlFile = "index.html";   // bạn muốn xử lý file nào thì đổi tên
const version = Date.now();      // timestamp đảm bảo luôn mới

let html = fs.readFileSync(htmlFile, "utf8");

// regex: match src="..." và href="..." cho CSS, JS, IMG
html = html.replace(/(src|href)="([^"]+\.(css|js|png|jpg|jpeg|gif|webp))(\?v=\d+)?"/g,
    (match, attr, filePath, ext) => `${attr}="${filePath}?v=${version}"`
);

fs.writeFileSync(htmlFile, html, "utf8");

console.log("Đã update version:", version);
