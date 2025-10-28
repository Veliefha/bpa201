using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp12
{
    internal class Developer : Employee, IWorkable, IReportable
    {
        public int ProjectCount { get; set; }

        public Developer(string name, decimal baseSalary, int projectCount)
            : base(name, "Developer", baseSalary)
        {
            ProjectCount = projectCount;
        }

        public override void DisplayInfo()
        {
            Console.WriteLine($"Developer {Name} started working on {ProjectCount} projects.");
        }

        public void Work()
        {
            Console.WriteLine($"{Name} is coding new features...");
        }

        public void GenerateReport()
        {
            Console.WriteLine($"{Name} generated a report: \"Completed {ProjectCount} new modules.\"");
        }

        public void ShowReport()
        {
            Console.WriteLine($"{Name}'s report has been reviewed successfully.");
        }

        public override decimal CalculateSalary()
        {
            decimal total = BaseSalary + (ProjectCount * 200);
            Console.WriteLine($"{Name}'s salary: {total} AZN");
            return total;
        }
    }
}
