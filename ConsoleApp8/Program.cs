/*Aşağıdakı parameter-lrə sahib bir Human class-ı yaradın.
Human class
- Name,
- Surname,
- Age (default sıfır),
- gender
- nationality
- getFullName() - method
- getBirthYear() - method - new Date() - currentYear

Human classından miras alan User class-ı yaradın.
User class
- Username
- Email
- isAdmin (true/false)
- isLogged (true/false) => default false (constructor-da gondermirsiniz bu deyeri)
- password (minimum 5 simvol olmalidir)
- bio (maxlength 30 ola biler)
- changePassword() - method-u var ve 2 parameter qebul edir, currentPassword ve newPassword => yoxlayirki eger currentPassword dogrudursa, 
newPassword-u teyin edib update edir, eger yalnishdirsa, kohne password oldugu kimi qalir ve alert verir
Eger, kohne ve yeni password eyni olarsa, 'new password and current password is the same' return etmelidir
- changeEmail() - method parameter olaraq users array-i ve newEmail qebul etmelidir ve newEmail-in bashqa user-de olub-olmamasini yoxlayir.
Eger unique-dirse o zaman email-i update edir, eger unique deyilse, oldugu kimi qalir ve alert verir.
Eger, kohne ve yeni password eyni olarsa, 'new password and current password is the same' return etmelidir
*/
using System;
namespace ConsoleApp8
{
    public class Program
    {
        static void Main()
        {
            Human human1 = new Human("Faxriyya", "Valiyeva", 20, "female", "azerbaijanian");

            Console.WriteLine(human1.GetFullName());
            Console.WriteLine(human1.GetBirthYear());
            User user1 = new User("Faxriyya", "Valiyeva", 20, "female", "azerbaijanian", "veliefha", "faxriyyavaliyeva@gmail.com", true,true, "1234567", "fullstack developer");
            Console.WriteLine("1234567", "2356567");
            User user2 = new User("Brliant", "Novruzlu", 18, "female", "azerbaijanian", "brli", "brliantnovruzlu@gmail.com", false, true, "01010101", "biology teacher");
            User user3 = new User("Vusal", "Valiyev", 13, "male", "azerbaijanian", "vusalll", "vusalveliyev12@gmail.com", false, true, "07092012", "student");
            User[] users = new User[] { user1, user2 };

            Console.WriteLine(user1.changeEmail(users, "jane@gmail.com"));
        }
    }
}
        
    


