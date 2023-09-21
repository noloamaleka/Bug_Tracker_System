//image handlers
let images = [];
let bannerImage = document.getElementById('person_image');
bannerImage.addEventListener('change', function(){
    const reader = new FileReader();
    reader.addEventListener('load', function(){
        images.push(reader.result);
});
reader.readAsDataURL(bannerImage.files[0]);
});
