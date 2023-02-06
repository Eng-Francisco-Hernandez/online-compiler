export const programs = [
  {
    key: "nodejs",
    program: `console.log("Hello, World!");`,
  },
  {
    key: "java",
    program: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
  },
  {
    key: "python3",
    program: `print("Hello World!")`,
  },
  {
    key: "python2",
    program: `print("Hello World!")`,
  },
  {
    key: "c",
    program: `#include <stdio.h>
int main(void)
{
    printf("Hello, World!");
}`,
  },
  {
    key: "cpp",
    program: `#include <iostream>
using namespace std;
int main()
{
    cout<<"Hello, World!";
    return 0;
}`,
  },
  {
    key: "php",
    program: `<?php
    echo "Hello World!";
?>`,
  },
  {
    key: "ruby",
    program: `puts "Hello World"`,
  },
  {
    key: "go",
    program: `package main
import "fmt"
func main() {
    fmt.Println("Hello, World!")
}`,
  },
  {
    key: "bash",
    program: `ls`,
  },
  {
    key: "sql",
    program: `CREATE TABLE Employee_Info
(
EmployeeID int NOT NULL,
EmployeeName varchar(255),
EmergencyContactName varchar(255),
PhoneNumber int,
Address varchar(255),
City varchar(255),
Country varchar(255) DEFAULT 'India'
);

INSERT INTO Employee_Info(EmployeeID, EmployeeName, EmergencyContactName, PhoneNumber, Address, City, Country)
VALUES ('06', 'Sanjana','Jagannath', '9921321141', 'Camel Street House No 12', 'Chennai', 'India');

INSERT INTO Employee_Info
VALUES ('07', 'Sayantini','Praveen', '9934567654', 'Nice Road 21', 'Pune', 'India');

SELECT * FROM Employee_Info;`,
  },
  {
    key: "csharp",
    program: `// Hello World! program
namespace HelloWorld
{
    class Hello {         
        static void Main(string[] args)
        {
            System.Console.WriteLine("Hello World!");
        }
    }
}`,
  },
  {
    key: "dart",
    program: `void main() {
    print("Hello, World!");
}`,
  },
];
