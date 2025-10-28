/*Abstrakt class və interface-ləri birləşdirərək müxtəlif növ işçilər üçün maaş   hesablanması, performans qiymətləndirməsi və hesabat mexanizmini qurmaq.
   1.IWorkable interface    
 Metod:
 void Work();
  2. IReportable interface 


Metodlar:

void GenerateReport();
void ShowReport();    
   İşçi öz işinə dair hesabat yarada və göstərə bilsin.
3.

Employee adlı abstract class 


Property-lər:

string Name;
string Position;
decimal BaseSalary;



Abstrakt metodlar:

public abstract decimal CalculateSalary();
public abstract void DisplayInfo();
  Normal metod:  
public void GiveBonus(decimal amount)     
  İşçiyə bonus əlavə edir və yeni maaşı hesablayır.

4.

Developer, Manager, Intern adlı class-lar

Bu class-lar Employee-dən miras alacaq və həm IWorkable, həm IReportable interfeyslərini implement edəcək.

Developer üçün maaş = BaseSalary + (ProjectCount * 200)
ProjectCount (developer üçün)  
  əmin class-ların kimi müəyyənləşdirilməlidi  

Manager üçün maaş = BaseSalary + (TeamSize * 150)
TeamSize (manager üçün)  
  əmin class-ların kimi müəyyənləşdirilməlidi  

Intern üçün maaş = BaseSalary (bonus verilmir)



Work() və GenerateReport() metodları hər biri öz işinə uyğun mesaj qaytarsın.

5.Program.cs hissəsində:
3 fərqli obyekt yarat: Developer, Manager, Intern

Hər biri üçün:

DisplayInfo()

Work()

GenerateReport()

CalculateSalary()

və GiveBonus() çağır.


  
Output ücün bu nümunəni istifade edib , Datalar yarada bilersiz.

 Developer Namiq started working on 3 projects.
Namiq   generated a report: "Completed 3 new modules."
Namiq's salary: 4600 AZN

Manager Akif managing 5 people.
Akif   generated a report: "Team performance improved by 20%."
Akif's salary: 5750 AZN

Intern Ali is assisting the development team.
Ali generated a report: "Learned basics of C#."
Ali’s salary: 800 AZN*/
using System;
namespace ConsoleApp12
{
    public class Program { 
    static void Main(string[] args)
        {
            Developer developer = new Developer("Namiq", 4000, 3);
            Manager manager = new Manager("Akif", 5000, 5);
            Intern intern = new Intern("Ali", 800);
            Console.WriteLine("Developer");
            developer.DisplayInfo();
            developer.Work();
            developer.GenerateReport();
            developer.CalculateSalary();
            developer.GiveBonus(200);
            manager.DisplayInfo();
            manager.Work();
            manager.GenerateReport();
            manager.CalculateSalary();
            manager.GiveBonus(250);
            intern.DisplayInfo();
            intern.Work();
            intern.GenerateReport();
            intern.CalculateSalary();

        }
            }
}