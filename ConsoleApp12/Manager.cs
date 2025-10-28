using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp12
{
    internal class Manager : Employee
    {
        public int TeamSize { get; set; }
        public Manager(string name, decimal baseSalary, int Teamsize)
            : base(name, "Manager", baseSalary)
        {
            TeamSize = TeamSize;
        }
        public override void DisplayInfo()
        {
            Console.WriteLine($"Manager {Name} managing {TeamSize} people.");
        }

        public void Work()
        {
            Console.WriteLine($"{Name} is organizing meetings and reviewing progress...");
        }

        public void GenerateReport()
        {
            Console.WriteLine($"{Name} generated a report: \"Team performance improved by 20%.\"");
        }

        public void ShowReport()
        {
            Console.WriteLine($"{Name}'s report presented to the board.");
        }

        public override decimal CalculateSalary()
        {
            decimal total = BaseSalary + (TeamSize * 150);
            Console.WriteLine($"{Name}'s salary: {total} AZN");
            return total;
        }
    
}
}
