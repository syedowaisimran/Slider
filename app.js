var slider_img = document.querySelector('.slider-img')
var img = ['a.jpg.jpg', 'b.jpg.jpg', 'c.jpg.jpg', 'd.jpg.jpg', 'e.jpg.jpg']
var i = 0

function perv() {
    if (i <= 0) i = img.length
    i--
    return setImg()

}
function next() {
    if (i >= img.length - 1) i = -1
    i++
    return setImg()


}
function setImg() {
    return slider_img.setAttribute("src", 'img/' + img[i])
}