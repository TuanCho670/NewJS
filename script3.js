    var landi_form = document.getElementById('FORM2');
    landi_form.querySelector('form').setAttribute('id','emailForm');
        var change_btn_submit = `<button id="submit-btn" class="ladi-element submit-btn" type="submit"><p id="submit-headline" class="submit-headline" style='font-size:20px'>Đăng Ký Ngay</p></button>`;
    var button_submit = document.getElementById("BUTTON4");
    button_submit.querySelector('.ladi-button').innerHTML = change_btn_submit;
    var input_email = document.getElementById('FORM_ITEM3');
    input_email.querySelector('.ladi-form-item').innerHTML = `<input id="email" autocomplete="off" tabindex="2" name="email" required="" class="ladi-form-control-input" type="email" placeholder="Nhập Email Của Bạn" >`;
    
    document.addEventListener('DOMContentLoaded', function() {
          // Lấy tất cả các phần tử có class 'lazy-load'
    
    // Tìm button trong form có id "payment" và chỉ button đó có class "ladi-hidden"
    const specificButton = document.querySelector('#emailForm button.ladi-hidden');
    
    if (specificButton) {
    console.log('Đã tìm thấy button, đang xóa...');
    
    // Xóa button khỏi DOM
    specificButton.remove();
    
    console.log('Button đã được xóa thành công.');
    } else {
    console.log('Không tìm thấy button phù hợp với điều kiện.');
    }
    });
    
     // Hàm xóa div có class 'ladipage-message'
            function removeMessageDiv() {
                const messageDiv = document.querySelector('.ladipage-message');
                if (messageDiv) {
                    messageDiv.remove();
                    console.log("Div with class 'ladipage-message' has been removed.");
                }
            }
    
            // Sử dụng MutationObserver để theo dõi các thay đổi trong DOM
            const observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    // Kiểm tra nếu div với class 'ladipage-message' được thêm vào DOM
                    if (mutation.addedNodes.length > 0) {
                        mutation.addedNodes.forEach(function(node) {
                            if (node.classList && node.classList.contains('ladipage-message')) {
                                removeMessageDiv();
                            }
                        });
                    }
                });
            });
    
            // Bắt đầu theo dõi các thay đổi trong toàn bộ body
            observer.observe(document.body, { childList: true, subtree: true });
    
            // Gọi hàm removeMessageDiv nếu div đã tồn tại từ trước
            removeMessageDiv();
