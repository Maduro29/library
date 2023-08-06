# Hướng dẫn chạy web quản lý thư viện (đối với máy sử dụng hệ điều hành Windows)

## Cài đặt môi trường Node.js thông qua nvm
1. Tải file cài đặt nvm
    - Truy cập trang web: Releases · coreybutler/nvm-windows (github.com). Tải phiên bản mới nhất của nvm-setup.zip.
2. Cài đặt nvm
    - Giải nén tệp .zip vừa tải về và chạy tệp nvm-setup.exe.

## Cài đặt Node.js
1. Mở cửa sổ Windows Terminal và chạy lệnh `nvm install 14.17.0` để tải phiên bản Node.js 14.17.0 về.
2. Chạy lệnh `nvm use 14.17.0` để cài đặt môi trường Node.js cho máy tính của bạn.

## Cài đặt Xampp
1. Tải file cài đặt Xampp
    - Truy cập trang web: Download XAMPP (apachefriends.org). Tải bất kì file cài đặt nào (khuyến khích sử dụng phiên bản 8.1.17).
2. Chạy và cài đặt file vừa tải về (chỉ cần nhấn vào các lựa chọn "Next", không cần chỉnh sửa gì).

## Thêm dữ liệu vào cơ sở dữ liệu
1. Mở Xampp và khởi động máy ảo Apache và hệ quản trị cơ sở dữ liệu MySQL.
2. Nhấn vào "Admin" của MySQL để truy cập vào phpMyAdmin.
3. Nhấn vào "New" và nhập tên "library" cho cơ sở dữ liệu mới (xóa cơ sở dữ liệu "library" cũ nếu đã tồn tại).
4. Sau khi tạo thành công cơ sở dữ liệu "library", chọn Import và lần lượt chọn file author.sql và book.sql để thêm 2 bảng vào cơ sở dữ liệu.

## Sử dụng Windows Terminal để chạy chương trình
1. Giải nén library.zip và copy đường dẫn dẫn tới thư mục library.
2. Mở Windows Terminal và chạy lệnh `cd ".../library"` (đường dẫn bạn vừa copy).
3. Chạy lệnh `npm start`. Bạn sẽ nhận được thông báo rằng Web đang chạy trên cổng 2909. Truy cập liên kết localhost:2909.
