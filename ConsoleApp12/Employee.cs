using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp12
{
    public abstract class Employee
    {
        public string Name { get; set; }
        public string Position { get; set; }
        public decimal BaseSalary { get; set; }

        public Employee(string name, string position, decimal baseSalary)
        {
            Name = name;
            Position = position;
            BaseSalary = baseSalary;
        }

        public abstract decimal CalculateSalary();
        public abstract void DisplayInfo();
        public void GiveBonus(decimal amount)
        {
            BaseSalary += amount;
            Console.WriteLine($"{Name} received a bonus of {amount} AZN. New base salary: {BaseSalary} AZN");
        }

    }
    
}
