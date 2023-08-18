//get hight and base form input field
function GetUserValueInputField(UserValueInput) {
    const UserValueField = document.getElementById(UserValueInput);
    const UserValueText = UserValueField.value;
    const UserValue = parseFloat(UserValueText);
    UserValueField.value = ''
    if (isNaN(UserValue)) {
        alert('inter a valid number')
        return;
    }

    return UserValue;
}
//show area or display area
function AreaSet(AreaId, Areas) {
    const GetArea = document.getElementById(AreaId)
    GetArea.innerText = Areas;

}
// 1 triangle 
document.getElementById('Triangle_btn').addEventListener('click', function () {
    const GetBase = GetUserValueInputField('Triangle_base');
    const GetHeight = GetUserValueInputField('Triangle_height');
    const Area = 0.5 * GetBase * GetHeight;
    AreaSet('Area_display', Area)

})
// 2 Rectangle
document.getElementById('Rectangle_btn').addEventListener('click', function () {
    const RectangleWith = GetUserValueInputField('Rectangle_with');
    const RectangleLength = GetUserValueInputField('Rectangle_length');
    const Rectangle = RectangleWith * RectangleLength;
    AreaSet('Rectangle_display', Rectangle);
})
//3 Parallelogram
document.getElementById('Parallelogram_btn').addEventListener('click', function () {
    const Parallelogram_base = GetUserValueInputField('Parallelogram_b');
    const Parallelogram_Height = GetUserValueInputField('Parallelogram_h');
    const Parallelogram = Parallelogram_base * Parallelogram_Height;
    AreaSet('Parallelogram_display', Parallelogram);
})
//Ellipse 
document.getElementById('Ellipse_btn').addEventListener('click', function () {
    const Ellipse_fist = GetUserValueInputField('Ellipse_first_redius');
    const Ellipse_secent = GetUserValueInputField('Ellipse_Secent_redius')
    const Ellipse = 3.14 * Ellipse_fist * Ellipse_secent;
    AreaSet('Ellipse_display', Ellipse);
})