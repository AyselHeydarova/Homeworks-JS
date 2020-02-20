
function creatNewUser(name, surname) {
    return  {
        firstName: name,
        lastName: surname,
        getLogin: function (name, surname) {
            return (name.charAt(0) + surname).toLowerCase();
        }
    };

}

const newUser = creatNewUser('Aysel', 'Heydarova');

console.log(newUser);

console.log(newUser.getLogin('Aysel', 'Asadova'));


























