export default function mostProfitableDepartment(salesData) {
    // Create an object to store the total sales for each department
    const departmentSales = {};
  
    // Iterate through the salesData and calculate the total sales for each department
    for (const data of salesData) {
      const { department, sales } = data;
      if (departmentSales[department]) {
        departmentSales[department] += sales;
      } else {
        departmentSales[department] = sales;
      }
    }
  
    // Find the department with the highest total sales
    let mostProfitableDept = '';
    let highestSales = 0;
    for (const department in departmentSales) {
      if (departmentSales[department] > highestSales) {
        highestSales = departmentSales[department];
        mostProfitableDept = department;
      }
    }
  
    return "Most profitable department is '"+mostProfitableDept+"' for dataset 1";
  }