export default function createReportObject(employeesList) {
  return {
    employees: { ...employeesList },
    getNumberOfDepartments() {
      return Object.keys(this.employees).length;
    },
  };
}
