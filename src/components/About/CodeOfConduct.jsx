import React from "react";

const CodeOfConduct = () => {
  return (
    <div className="w-full max-w-4xl mx-auto font-sans text-gray-800 p-6">
      {/* Header Section */}
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-primary mb-4">
          Code of Conduct
        </h2>
        <p className="text-lg text-gray-600">
          At our online learning platform, we strive to maintain a safe and respectful environment for all students. Please adhere to the following guidelines to ensure a positive and productive learning experience.
        </p>
      </div>

      {/* Conduct Rules Section */}
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold text-secondary mb-4">1. Respect and Integrity</h3>
          <p className="text-lg text-gray-700">
            All students are expected to treat their peers, instructors, and other members of the learning community with respect. Personal attacks, discrimination, or harassment of any kind will not be tolerated.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-secondary mb-4">2. Academic Integrity</h3>
          <p className="text-lg text-gray-700">
            Cheating, plagiarism, or any form of dishonesty in assignments, exams, or coursework is strictly prohibited. Students must submit their own work and properly cite any sources used.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-secondary mb-4">3. Attendance and Participation</h3>
          <p className="text-lg text-gray-700">
            Students are expected to attend classes regularly and participate actively in class discussions, assignments, and activities. Lack of participation or consistent absenteeism may result in consequences.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-secondary mb-4">4. Respect for Learning Materials</h3>
          <p className="text-lg text-gray-700">
            Students must not share, distribute, or reproduce any course materials, assignments, or content without explicit permission from the instructor. This ensures the protection of intellectual property.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-secondary mb-4">5. Communication Etiquette</h3>
          <p className="text-lg text-gray-700">
            Students are encouraged to communicate respectfully with both peers and instructors. Always use appropriate language and tone, especially in group discussions or online forums.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-secondary mb-4">6. Safe Online Behavior</h3>
          <p className="text-lg text-gray-700">
            Students should engage in responsible online behavior. Avoid sharing personal, confidential information, or engaging in harmful online activities such as cyberbullying or sharing inappropriate content.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-secondary mb-4">7. Respect for Technology and Resources</h3>
          <p className="text-lg text-gray-700">
            Students are expected to handle all online learning tools, platforms, and resources with care. Misuse of technology, including hacking or unauthorized access to accounts, will result in disciplinary actions.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-secondary mb-4">8. Commitment to Continuous Improvement</h3>
          <p className="text-lg text-gray-700">
            We encourage all students to engage in continuous self-improvement. This includes seeking help when needed, participating in course feedback, and striving to grow academically and personally.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-secondary mb-4">9. Consequences of Violating the Code of Conduct</h3>
          <p className="text-lg text-gray-700">
            Failure to adhere to this Code of Conduct may result in penalties, including warnings, suspension, or expulsion from the platform. Disciplinary actions will depend on the severity of the violation.
          </p>
        </div>
      </div>

      {/* Closing Section */}
      <div className="mt-8 text-center">
        <p className="text-lg text-gray-700">
          By participating in our platform, you agree to abide by this Code of Conduct. Let's work together to create a supportive and respectful community for all learners.
        </p>
      </div>
    </div>
  );
};

export default CodeOfConduct;
