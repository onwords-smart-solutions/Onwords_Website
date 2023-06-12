const data = [
    {
        id: 1,
        memberImg: 'images/ram-designer.png',
        memberName: "RamKumar",
        Designation:"Graphic Design"

    },
    {
        id: 2,
        memberImg: 'images/ram-designer.png',
        memberName: "Ganesh",
        Designation:"Ui & Ux Design"

    },
    {
        id: 3,
        memberImg: 'images/ram-designer.png',
        memberName: "Vinith",
        Designation:"Web Development"

    },
];
export default (data)
const teamMember = document.querySelector('team-member')
// const teamMemberName = document.querySelector('team-member-name')

const show = teamMember.map((val,index) => {

return(
    `
    <div class="empl">
                <img src="{% static 'images/ram-designer.png' %}" alt="" class="img-fluid">
                <h6 class="team-member-name">${val.memberName}</h6>
                <p class="team-member-designation">${val.Designation}</p>
               </div>
    
    `
)
   

})

teamMember.innerHTML = show

