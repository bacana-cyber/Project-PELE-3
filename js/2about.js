$(document).ready(function () {

    $(".read-more").click(function () {



        $(".read-more").addClass("d-none")
        $(".read-less").removeClass("d-none")


        $(".more").removeClass("d-none")


        $(".3dot").addClass("d-none")








    })


    $(".read-less").click(function () {

        $(".more").addClass("d-none")


        $(".read-less").addClass("d-none")

        $(".read-more").removeClass("d-none")

        $("3dot").removeClass("d-none")






    })



    $(".up").click(function(){


        

    })




    $(".alert").click(function () {
        alert("saddasadsds")
    })
})