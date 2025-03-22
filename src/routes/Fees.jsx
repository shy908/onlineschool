import React from "react";
import { motion } from "framer-motion";

const Fees = () => {
  const grades = [
    {
      level: "Grade R",
      fee: 500,
      age: "5-6 years",
      focus: "Focus on foundational learning",
      activities: "Play-based activities",
      environment: "Safe and nurturing environment",
    },
    {
      level: "Primary (Grade 1-7)",
      fee: 550,
      age: "Grade 1-7",
      focus: "Comprehensive curriculum",
      activities: "Subject-based learning",
      environment: "Focus on key skills development",
    },
    {
      level: "Secondary (Form 1-4)",
      fee: 600,
      age: "Form 1-4",
      focus: "Advanced subject choices",
      activities: "Preparation for high school",
      environment: "Personalized attention",
    },
    {
      level: "High School (Form 5-6)",
      fee: 800,
      age: "Form 5-6",
      focus: "In-depth subject focus",
      activities: "Exam preparation",
      environment: "University and career readiness",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6 font-sans text-gray-800">
      {/* Fees Overview Section */}
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-primary mb-4">Fees Overview</h2>
        <p className="text-lightText text-lg">
          All our school formats come with transparent fee structures to suit
          different needs and budgets.
        </p>
      </div>

      {/* Fee Table Section */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full table-auto text-left border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-8 py-6 text-lg font-semibold">Grade</th>
              <th className="px-8 py-6 text-lg font-semibold">Monthly Fee</th>
              <th className="px-8 py-6 text-lg font-semibold">Termly Fee</th>
              <th className="px-8 py-6 text-lg font-semibold">Annual Fee</th>
              <th className="px-8 py-6 text-lg font-semibold">Age</th>
              <th className="px-8 py-6 text-lg font-semibold">Focus</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((grade, index) => (
              <motion.tr
                key={index}
                className="border-t hover:bg-gray-50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <td className="px-8 py-6">{grade.level}</td>
                <td className="px-8 py-6">R{grade.fee}</td>
                <td className="px-8 py-6">R{(grade.fee * 3).toFixed(2)}</td>
                <td className="px-8 py-6">R{(grade.fee * 12).toFixed(2)}</td>
                <td className="px-8 py-6">{grade.age}</td>
                <td className="px-8 py-6">{grade.focus}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Additional Information */}
      <div className="mt-8 text-sm text-lightText">
        <p className="mb-6">
          <strong>5% discount</strong> when you pay the annual fees upfront.
        </p>
        <p className="mb-6">
          <strong>5% sibling discount</strong> will be applied to school
          fees for the second and any subsequent siblings.
        </p>
        {grades.find((grade) => grade.level === "High School (Form 5-6)") && (
          <p className="mt-6 text-sm">
            <strong>Note:</strong> If you are taking 3 or fewer subjects,
            the fee is reduced to R500 per month.
          </p>
        )}
      </div>
    </div>
  );
};

export default Fees;
