const isMale = true;
const age = 33;
const fullName = "EEmmanuel udebu";

const favoriteSport = [
    5,
    { isFootball: true, wrestling: 'fake', },
    "boxing", [0, 1, 2, 3, 4, 6]
];

const bioData = {
    BloodGroup: "0+",
    weight: 68,
    isPregnant: false,
}



console.log(
    typeof isMale,
    typeof age,
    typeof favoriteSport,
    typeof bioData,
);





function Alert(event) {

    event.preventDefault();
    let timerInterval
    Swal.fire({
        title: 'Submit your Github username',
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Look up',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
            return fetch(`//api.github.com/users/${login}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText)
                    }
                    return response.json()
                })
                .catch(error => {
                    Swal.showValidationMessage(
                        `Request failed: ${error}`
                    )
                })
        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: `${result.value.login}'s avatar`,
                imageUrl: result.value.avatar_url
            })
        }
    })


 

































    
}