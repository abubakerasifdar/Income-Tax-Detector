
        document.addEventListener('keydown', (e) => {
            if (e.key == "Enter") {
                myFunction()
                document.getElementById('input').value = "";
            }
        })
        function myFunction() {
            let a = Number(document.getElementById("input"
            ).value);
            let netSalary;
            let result;
            if (a >= 30000) {
                netSalary = a - (a * 20 / 100)
                result = `Your Entered ${a} Salary and Net Salary After Deduct is ${netSalary} `
                document.getElementById("output").style.background = "brown"


            }
            else if (a >= 20000 && a < 30000) {
                netSalary = a - (a * 15 / 100)
                    result = `Your Entered ${a} Salary and Net Salary After Deduct is ${netSalary} `
                    document.getElementById("output").style.background = "black"
            }
            else if (a < 20000) {
                netSalary = a - (a * 10 / 100)
                    result = `Your Entered ${a} Salary and Net Salary After Deduct is ${netSalary} `
                    document.getElementById("output").style.background = "purple"
            }
            else {
                result = "Valid input"
            }
            document.getElementById("output").style.display = "flex";
            document.getElementById("output").innerHTML = result;
        }
