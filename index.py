import os

def open_app_via_launchctl(bundle_id):
    """Mở ứng dụng bằng launchctl"""
    command = f"launchctl kickstart -k system/{bundle_id}"
    result = os.system(command)
    if result == 0:
        print(f"Đã mở ứng dụng với Launchctl: {bundle_id}")
    else:
        print(f"Lỗi khi mở ứng dụng với Launchctl: {bundle_id}")

# Thay bằng Bundle ID
bundle_id = "com.apple.mobilesafari"
open_app_via_launchctl(bundle_id)
