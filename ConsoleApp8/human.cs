using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp8
{
    public class Human
    {
        public string name;
        public string surname;
        public int age;
        public string gender;
        public string nationality;
        public Human(string name, string surname, int age, string gender, string nationality)
        {
            this.name = name;
            this.surname = surname;
            this.age = age;
            this.gender = gender;
            this.nationality = nationality;
             
        }
        public string GetFullName()
        {
            return ($"{name} {surname}");
        }
        public int GetBirthYear()
        {
            return (2025 - age);
        }
    }
}
