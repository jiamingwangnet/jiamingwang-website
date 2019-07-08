
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            let pic = e.target.result;
            $('.modelImage').attr('src', pic);
            $('.image').attr('src', pic)
            profile.pic = pic;
            saveProfileInfo("pic")
        };

        reader.readAsDataURL(input.files[0]);
    }
}