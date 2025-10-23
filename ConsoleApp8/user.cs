using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp8
{
    public class User:Human
    {
        public String username;
        public String email;
        public bool isAdmin;
        public bool isLogged=false;
        public string password;
        public string bio;
        public User(string name, string surname, int age, string gender, string nationality, string username, string email,
            bool isAdmin, bool isLogged, string password, string bio) : base(name, surname, age, gender, nationality)
        {
            this.username = username;
            this.email = email;
            this.isAdmin = isAdmin;
            if (password.Length < 5)
            {
                throw new ArgumentException("Password must be at least 5 symbols.");
            }
            this.password = password;
            if (bio.Length > 30)
            {
                throw new ArgumentException("Bio must be maximum 30 symbols.");
            }
            this.bio = bio;
        }   
        public string ChangePassword(string currentpassword, string newpassword)
        {
            if (password != currentpassword)
            {
                return ("Current password is incorrect.");
            }
            if (currentpassword == newpassword)
            {
                return ("New password and current password are same.");
            }
            if (newpassword.Length < 5)
            {
                return ("Password must be at least 5 symbols.");
            }
            this.password = newpassword;
            return ("Password updated succesfully.");
            
        }
        public string changeEmail(User[] users, string newemail)
        {
            if (email == newemail)
            {
                return ("New email and current email are same.");
            }
            foreach(User user in users)
            {
                if (user != this && user.email == newemail)
                {
                    return "Email already exists! Choose another one.";
                }
            }
            this.email = newemail;
            return ("Email succesfully updated.");
        }
    }
}
