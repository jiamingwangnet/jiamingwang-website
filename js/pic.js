
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            let pic = e.target.result;
            localStorage.setItem("pic", pic);
            $('.modelImage').attr('src', pic);
            $('.image').attr('src', pic)
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function getPic() {
    let pic = localStorage.pic;
    $('.image').attr('src', pic);
    $('.modelImage').attr('src', pic);
}