import os

def open_app(bundle_id):
    """Mở ứng dụng qua bundle ID"""
    command = f"open {bundle_id}"
    result = os.system(command)
    if result == 0:
        print(f"Đã mở ứng dụng với Bundle ID: {bundle_id}")
    else:
        print(f"Lỗi khi mở ứng dụng với Bundle ID: {bundle_id}")

# Gọi hàm với Bundle ID của ứng dụng
bundle_id = "com.apple.mobilesafari"  # Thay bằng Bundle ID bạn muốn
open_app(bundle_id)

# apt install com.rpetrich.rocketbootstrap
