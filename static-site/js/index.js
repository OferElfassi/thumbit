$("form").on("change", ".file-upload-field", function(){
    $(this).parent(".file-upload-wrapper").attr("data-text",$(this).val().replace(/.*(\/|\\)/, '') );
    $('#submit-btn').css('visibility','initial')
});
$("form").on("submit",function (e) {
    const that = this
    e.preventDefault();
    var formData = new FormData(this);
    $.ajax({
        type: "POST",
        url: "/upload",
        data: formData,
        processData: false,
        contentType: false,
        success: function(r){
            $(".file-upload-wrapper").attr("data-text",'Select your file!')
            $('#submit-btn').css('visibility','hidden')
            $("form p").css('animation','blinkingText 4s')
            setTimeout(()=>{
                $("form p").css('animation','')
            },3000)
        },
        error: function (e) {
            alert('File upload error')
            console.log("some error", e);
        }
    });

});
