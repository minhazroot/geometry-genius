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