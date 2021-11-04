//Main
function differentiate_2images(img1, img2){
    var image1 = new Image()
    var image2 = new Image()

    image1.src = img1
    image2.src = img2

    image1.onload = function(){
        var image1 = this

        image2.onload = function(){
            var image2 = this
            var difference = 0
            var canvas = document.createElement("canvas")

            canvas.width = image1.width
            canvas.height = image1.height

            var context = canvas.getContext("2d")

            context.drawImage(image1, 0, 0)
            var imageData1 = context.getImageData(0, 0, image1.width, image1.height)

            context.drawImage(image2, 0, 0)
            var imageData2 = context.getImageData(0, 0, image2.width, image2.height)

            var data1 = imageData1.data
            var data2 = imageData2.data

            for( i = 0; i < data1.length; i += 4 ){
                var r1 = data1[i];
                var g1 = data1[i + 1]
                var b1 = data1[i + 2]
                var r2 = data2[i]
                var g2 = data2[i + 1]
                var b2 = data2[i + 2]
                var diff = Math.abs(r1 - r2) + Math.abs(g1 - g2) + Math.abs(b1 - b2)

                difference += diff
            }

            var result = difference / (image1.width * image1.height * 255 * 3)

            if(result > 0.1 && result < 0.7 && result > 0.1 && result > 0.551 && result < 0.57 || result == 0){
                console.log(`Similarity rate: ${result} | Result: The 2 images are the same. `)
            }else{
                console.log(`Similarity rate: ${result} | Result: The 2 images are not the same. `)
            }
        }
    }
}
