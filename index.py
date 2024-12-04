import os

def open_app_via_activator(bundle_id):
    """Mở ứng dụng thông qua Activator"""
    command = f"activator send {bundle_id}"
    result = os.system(command)
    if result == 0:
        print(f"Đã mở ứng dụng với Activator: {bundle_id}")
    else:
        print(f"Lỗi khi mở ứng dụng với Activator: {bundle_id}")

# Thay Bundle ID của ứng dụng
bundle_id = "com.apple.mobilesafari"
open_app_via_activator(bundle_id)
