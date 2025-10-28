using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp12
{
    public class Intern : Employee, IWorkable, IReportable
    {
        public Intern(string name, decimal baseSalary)
            :base(name, "Intern", baseSalary) { }
        public override void DisplayInfo()
        {
            Console.WriteLine($"Intern {Name} is assisting the development team.");
        }
        public void Work()
        {
            Console.WriteLine($"Intern {Name} is learning and helping with small tasks");
        }
        public void GenerateReport()
        {
            Console.WriteLine($"{Name} generated a report: \"Learned basics of C#.\"");
        }
        public void ShowReport()
        {
            Console.WriteLine($"{Name}'s progress report shared with mentor.");
        }
        public override decimal CalculateSalary()
        {
            Console.WriteLine($"{Name}'s salary: {BaseSalary} AZN");
            return BaseSalary;
        }

    }
}
