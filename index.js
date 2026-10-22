import student from "./student.json" with { type: "json" };

console.log(student.prenom, student.nomDeFamille.toUpperCase());
console.log(student.dateDeNaissance);
for (const matiere in student.notes) {
  console.log(matiere.toUpperCase() + ":");
  Object.keys(student.notes[matiere]).forEach(n => console.log(student.notes[matiere][n]));
}